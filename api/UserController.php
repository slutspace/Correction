<?php
class UserController {
    private $db;
    
    public function __construct($database) {
        $this->db = $database;
    }
    
    public function getUsers() {
        try {
            $page = isset($_GET['page']) ? max(1, intval($_GET['page'])) : 1;
            $limit = isset($_GET['limit']) ? min(MAX_PAGE_SIZE, max(1, intval($_GET['limit']))) : DEFAULT_PAGE_SIZE;
            $offset = ($page - 1) * $limit;
            
            $sql = "SELECT id, username, display_name, avatar, subscribers, created_at 
                    FROM users 
                    ORDER BY subscribers DESC 
                    LIMIT :limit OFFSET :offset";
            
            $users = $this->db->fetchAll($sql, [
                'limit' => $limit,
                'offset' => $offset
            ]);
            
            // Get total count
            $countSql = "SELECT COUNT(*) as total FROM users";
            $total = $this->db->fetchOne($countSql)['total'];
            
            echo json_encode([
                'success' => true,
                'data' => $users,
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
    
    public function getUser() {
        try {
            $username = $_GET['username'] ?? null;
            if (!$username) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Username is required']);
                return;
            }
            
            $sql = "SELECT u.*, 
                           COUNT(v.id) as video_count,
                           SUM(v.views) as total_views
                    FROM users u 
                    LEFT JOIN videos v ON u.id = v.user_id 
                    WHERE u.username = :username 
                    GROUP BY u.id";
            
            $user = $this->db->fetchOne($sql, ['username' => $username]);
            
            if (!$user) {
                http_response_code(404);
                echo json_encode(['success' => false, 'error' => 'User not found']);
                return;
            }
            
            // Get user's videos
            $videosSql = "SELECT * FROM videos WHERE user_id = :user_id ORDER BY created_at DESC LIMIT 20";
            $videos = $this->db->fetchAll($videosSql, ['user_id' => $user['id']]);
            
            $user['videos'] = $videos;
            
            echo json_encode(['success' => true, 'data' => $user]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => $e->getMessage()]);
        }
    }
    
    public function createUser() {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            
            $username = $input['username'] ?? '';
            $email = $input['email'] ?? '';
            $password = $input['password'] ?? '';
            $displayName = $input['display_name'] ?? '';
            
            // Validate input
            if (empty($username) || empty($email) || empty($password)) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Username, email, and password are required']);
                return;
            }
            
            // Check if username or email already exists
            $existingUser = $this->db->fetchOne(
                'SELECT id FROM users WHERE username = :username OR email = :email',
                ['username' => $username, 'email' => $email]
            );
            
            if ($existingUser) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Username or email already exists']);
                return;
            }
            
            // Hash password
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            
            // Create user
            $userData = [
                'username' => $username,
                'email' => $email,
                'password' => $hashedPassword,
                'display_name' => $displayName ?: $username,
                'avatar' => null,
                'banner' => null,
                'subscribers' => 0,
                'created_at' => date('Y-m-d H:i:s')
            ];
            
            $userId = $this->db->insert('users', $userData);
            
            echo json_encode([
                'success' => true,
                'data' => ['id' => $userId, 'message' => 'User created successfully']
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => $e->getMessage()]);
        }
    }
    
    public function updateUser() {
        try {
            $userId = $this->getCurrentUserId();
            if (!$userId) {
                http_response_code(401);
                echo json_encode(['success' => false, 'error' => 'Authentication required']);
                return;
            }
            
            $input = json_decode(file_get_contents('php://input'), true);
            
            $updateData = [];
            if (isset($input['display_name'])) $updateData['display_name'] = $input['display_name'];
            if (isset($input['bio'])) $updateData['bio'] = $input['bio'];
            if (isset($input['website'])) $updateData['website'] = $input['website'];
            
            // Handle avatar upload
            if (isset($_FILES['avatar']) && $_FILES['avatar']['error'] === UPLOAD_ERR_OK) {
                $avatar = $_FILES['avatar'];
                $avatarExtension = strtolower(pathinfo($avatar['name'], PATHINFO_EXTENSION));
                
                if (in_array($avatarExtension, ALLOWED_IMAGE_TYPES) && $avatar['size'] <= MAX_IMAGE_SIZE) {
                    $avatarFilename = uniqid() . '.' . $avatarExtension;
                    $avatarPath = THUMBNAIL_PATH . $avatarFilename;
                    
                    if (move_uploaded_file($avatar['tmp_name'], $avatarPath)) {
                        $updateData['avatar'] = $avatarFilename;
                    }
                }
            }
            
            // Handle banner upload
            if (isset($_FILES['banner']) && $_FILES['banner']['error'] === UPLOAD_ERR_OK) {
                $banner = $_FILES['banner'];
                $bannerExtension = strtolower(pathinfo($banner['name'], PATHINFO_EXTENSION));
                
                if (in_array($bannerExtension, ALLOWED_IMAGE_TYPES) && $banner['size'] <= MAX_IMAGE_SIZE) {
                    $bannerFilename = uniqid() . '.' . $bannerExtension;
                    $bannerPath = THUMBNAIL_PATH . $bannerFilename;
                    
                    if (move_uploaded_file($banner['tmp_name'], $bannerPath)) {
                        $updateData['banner'] = $bannerFilename;
                    }
                }
            }
            
            if (!empty($updateData)) {
                $this->db->update('users', $updateData, 'id = :id', ['id' => $userId]);
            }
            
            echo json_encode(['success' => true, 'message' => 'Profile updated successfully']);
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
