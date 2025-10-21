<?php
class VideoController {
    private $db;
    
    public function __construct($database) {
        $this->db = $database;
    }
    
    public function getVideos() {
        try {
            $page = isset($_GET['page']) ? max(1, intval($_GET['page'])) : 1;
            $limit = isset($_GET['limit']) ? min(MAX_PAGE_SIZE, max(1, intval($_GET['limit']))) : DEFAULT_PAGE_SIZE;
            $offset = ($page - 1) * $limit;
            
            $sql = "SELECT v.*, u.username, u.display_name, u.avatar 
                    FROM videos v 
                    JOIN users u ON v.user_id = u.id 
                    ORDER BY v.created_at DESC 
                    LIMIT :limit OFFSET :offset";
            
            $videos = $this->db->fetchAll($sql, [
                'limit' => $limit,
                'offset' => $offset
            ]);
            
            // Get total count
            $countSql = "SELECT COUNT(*) as total FROM videos";
            $total = $this->db->fetchOne($countSql)['total'];
            
            echo json_encode([
                'success' => true,
                'data' => $videos,
                'pagination' => [
                    'page' => $page,
                    'limit' => $limit,
                    'total' => $total,
                    'pages' => ceil($total / $limit)
                ]
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => $e->getMessage()]);
        }
    }
    
    public function getVideo() {
        try {
            $id = $_GET['id'] ?? null;
            if (!$id) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Video ID is required']);
                return;
            }
            
            $sql = "SELECT v.*, u.username, u.display_name, u.avatar, u.subscribers 
                    FROM videos v 
                    JOIN users u ON v.user_id = u.id 
                    WHERE v.id = :id";
            
            $video = $this->db->fetchOne($sql, ['id' => $id]);
            
            if (!$video) {
                http_response_code(404);
                echo json_encode(['success' => false, 'error' => 'Video not found']);
                return;
            }
            
            // Increment view count
            $this->db->update('videos', 
                ['views' => $video['views'] + 1], 
                'id = :id', 
                ['id' => $id]
            );
            
            echo json_encode(['success' => true, 'data' => $video]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => $e->getMessage()]);
        }
    }
    
    public function searchVideos() {
        try {
            $query = $_GET['q'] ?? '';
            $page = isset($_GET['page']) ? max(1, intval($_GET['page'])) : 1;
            $limit = isset($_GET['limit']) ? min(MAX_PAGE_SIZE, max(1, intval($_GET['limit']))) : DEFAULT_PAGE_SIZE;
            $offset = ($page - 1) * $limit;
            
            if (empty($query)) {
                echo json_encode(['success' => true, 'data' => [], 'pagination' => ['page' => 1, 'limit' => $limit, 'total' => 0, 'pages' => 0]]);
                return;
            }
            
            $sql = "SELECT v.*, u.username, u.display_name, u.avatar 
                    FROM videos v 
                    JOIN users u ON v.user_id = u.id 
                    WHERE v.title LIKE :query OR v.description LIKE :query 
                    ORDER BY v.views DESC, v.created_at DESC 
                    LIMIT :limit OFFSET :offset";
            
            $videos = $this->db->fetchAll($sql, [
                'query' => "%{$query}%",
                'limit' => $limit,
                'offset' => $offset
            ]);
            
            // Get total count for search
            $countSql = "SELECT COUNT(*) as total FROM videos v WHERE v.title LIKE :query OR v.description LIKE :query";
            $total = $this->db->fetchOne($countSql, ['query' => "%{$query}%"])['total'];
            
            echo json_encode([
                'success' => true,
                'data' => $videos,
                'pagination' => [
                    'page' => $page,
                    'limit' => $limit,
                    'total' => $total,
                    'pages' => ceil($total / $limit)
                ]
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => $e->getMessage()]);
        }
    }
    
    public function uploadVideo() {
        try {
            // Check if user is authenticated
            $userId = $this->getCurrentUserId();
            if (!$userId) {
                http_response_code(401);
                echo json_encode(['success' => false, 'error' => 'Authentication required']);
                return;
            }
            
            // Validate file upload
            if (!isset($_FILES['video']) || $_FILES['video']['error'] !== UPLOAD_ERR_OK) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'No video file uploaded']);
                return;
            }
            
            $file = $_FILES['video'];
            $fileExtension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
            
            // Validate file type
            if (!in_array($fileExtension, ALLOWED_VIDEO_TYPES)) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Invalid file type']);
                return;
            }
            
            // Validate file size
            if ($file['size'] > MAX_VIDEO_SIZE) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'File too large']);
                return;
            }
            
            // Generate unique filename
            $filename = uniqid() . '.' . $fileExtension;
            $filepath = UPLOAD_PATH . $filename;
            
            // Move uploaded file
            if (!move_uploaded_file($file['tmp_name'], $filepath)) {
                http_response_code(500);
                echo json_encode(['success' => false, 'error' => 'Failed to save file']);
                return;
            }
            
            // Get form data
            $title = $_POST['title'] ?? '';
            $description = $_POST['description'] ?? '';
            $privacy = $_POST['privacy'] ?? 'public';
            
            // Handle thumbnail upload
            $thumbnailPath = null;
            if (isset($_FILES['thumbnail']) && $_FILES['thumbnail']['error'] === UPLOAD_ERR_OK) {
                $thumbnail = $_FILES['thumbnail'];
                $thumbnailExtension = strtolower(pathinfo($thumbnail['name'], PATHINFO_EXTENSION));
                
                if (in_array($thumbnailExtension, ALLOWED_IMAGE_TYPES) && $thumbnail['size'] <= MAX_IMAGE_SIZE) {
                    $thumbnailFilename = uniqid() . '.' . $thumbnailExtension;
                    $thumbnailPath = THUMBNAIL_PATH . $thumbnailFilename;
                    move_uploaded_file($thumbnail['tmp_name'], $thumbnailPath);
                }
            }
            
            // Insert video record
            $videoData = [
                'user_id' => $userId,
                'title' => $title,
                'description' => $description,
                'video_path' => $filename,
                'thumbnail_path' => $thumbnailPath ? basename($thumbnailPath) : null,
                'privacy' => $privacy,
                'views' => 0,
                'likes' => 0,
                'dislikes' => 0,
                'created_at' => date('Y-m-d H:i:s')
            ];
            
            $videoId = $this->db->insert('videos', $videoData);
            
            echo json_encode([
                'success' => true,
                'data' => ['id' => $videoId, 'message' => 'Video uploaded successfully']
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => $e->getMessage()]);
        }
    }
    
    public function updateVideo() {
        try {
            $userId = $this->getCurrentUserId();
            if (!$userId) {
                http_response_code(401);
                echo json_encode(['success' => false, 'error' => 'Authentication required']);
                return;
            }
            
            $input = json_decode(file_get_contents('php://input'), true);
            $videoId = $input['id'] ?? null;
            
            if (!$videoId) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Video ID is required']);
                return;
            }
            
            // Check if user owns the video
            $video = $this->db->fetchOne('SELECT * FROM videos WHERE id = :id AND user_id = :user_id', 
                ['id' => $videoId, 'user_id' => $userId]);
            
            if (!$video) {
                http_response_code(404);
                echo json_encode(['success' => false, 'error' => 'Video not found or access denied']);
                return;
            }
            
            $updateData = [];
            if (isset($input['title'])) $updateData['title'] = $input['title'];
            if (isset($input['description'])) $updateData['description'] = $input['description'];
            if (isset($input['privacy'])) $updateData['privacy'] = $input['privacy'];
            
            if (!empty($updateData)) {
                $this->db->update('videos', $updateData, 'id = :id', ['id' => $videoId]);
            }
            
            echo json_encode(['success' => true, 'message' => 'Video updated successfully']);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => $e->getMessage()]);
        }
    }
    
    public function deleteVideo() {
        try {
            $userId = $this->getCurrentUserId();
            if (!$userId) {
                http_response_code(401);
                echo json_encode(['success' => false, 'error' => 'Authentication required']);
                return;
            }
            
            $input = json_decode(file_get_contents('php://input'), true);
            $videoId = $input['id'] ?? null;
            
            if (!$videoId) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Video ID is required']);
                return;
            }
            
            // Check if user owns the video
            $video = $this->db->fetchOne('SELECT * FROM videos WHERE id = :id AND user_id = :user_id', 
                ['id' => $videoId, 'user_id' => $userId]);
            
            if (!$video) {
                http_response_code(404);
                echo json_encode(['success' => false, 'error' => 'Video not found or access denied']);
                return;
            }
            
            // Delete video file
            if (file_exists(UPLOAD_PATH . $video['video_path'])) {
                unlink(UPLOAD_PATH . $video['video_path']);
            }
            
            // Delete thumbnail file
            if ($video['thumbnail_path'] && file_exists(THUMBNAIL_PATH . $video['thumbnail_path'])) {
                unlink(THUMBNAIL_PATH . $video['thumbnail_path']);
            }
            
            // Delete from database
            $this->db->delete('videos', 'id = :id', ['id' => $videoId]);
            
            echo json_encode(['success' => true, 'message' => 'Video deleted successfully']);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => $e->getMessage()]);
        }
    }
    
    private function getCurrentUserId() {
        // This would typically check JWT token or session
        // For now, return a mock user ID
        return 1;
    }
}
?>
