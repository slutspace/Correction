<?php
class AuthController {
    private $db;
    
    public function __construct($database) {
        $this->db = $database;
    }
    
    public function login() {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            
            $username = $input['username'] ?? '';
            $password = $input['password'] ?? '';
            
            if (empty($username) || empty($password)) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Username and password are required']);
                return;
            }
            
            // Find user by username or email
            $user = $this->db->fetchOne(
                'SELECT * FROM users WHERE username = :username OR email = :username',
                ['username' => $username]
            );
            
            if (!$user || !password_verify($password, $user['password'])) {
                http_response_code(401);
                echo json_encode(['success' => false, 'error' => 'Invalid credentials']);
                return;
            }
            
            // Generate JWT token (simplified version)
            $token = $this->generateJWT($user['id'], $user['username']);
            
            echo json_encode([
                'success' => true,
                'data' => [
                    'token' => $token,
                    'user' => [
                        'id' => $user['id'],
                        'username' => $user['username'],
                        'display_name' => $user['display_name'],
                        'avatar' => $user['avatar']
                    ]
                ]
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => $e->getMessage()]);
        }
    }
    
    public function register() {
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
            
            // Validate email format
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Invalid email format']);
                return;
            }
            
            // Validate password strength
            if (strlen($password) < 6) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Password must be at least 6 characters long']);
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
            
            // Generate JWT token
            $token = $this->generateJWT($userId, $username);
            
            echo json_encode([
                'success' => true,
                'data' => [
                    'token' => $token,
                    'user' => [
                        'id' => $userId,
                        'username' => $username,
                        'display_name' => $displayName ?: $username,
                        'avatar' => null
                    ]
                ]
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => $e->getMessage()]);
        }
    }
    
    public function logout() {
        try {
            // In a real implementation, you would invalidate the JWT token
            // For now, we'll just return success
            echo json_encode(['success' => true, 'message' => 'Logged out successfully']);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => $e->getMessage()]);
        }
    }
    
    private function generateJWT($userId, $username) {
        // Simple JWT implementation (in production, use a proper JWT library)
        $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
        $payload = json_encode([
            'user_id' => $userId,
            'username' => $username,
            'exp' => time() + (24 * 60 * 60) // 24 hours
        ]);
        
        $headerEncoded = $this->base64UrlEncode($header);
        $payloadEncoded = $this->base64UrlEncode($payload);
        
        $signature = hash_hmac('sha256', $headerEncoded . "." . $payloadEncoded, JWT_SECRET, true);
        $signatureEncoded = $this->base64UrlEncode($signature);
        
        return $headerEncoded . "." . $payloadEncoded . "." . $signatureEncoded;
    }
    
    private function base64UrlEncode($data) {
        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
    }
    
    public function verifyToken($token) {
        try {
            $parts = explode('.', $token);
            if (count($parts) !== 3) {
                return false;
            }
            
            $header = json_decode($this->base64UrlDecode($parts[0]), true);
            $payload = json_decode($this->base64UrlDecode($parts[1]), true);
            $signature = $this->base64UrlDecode($parts[2]);
            
            // Verify signature
            $expectedSignature = hash_hmac('sha256', $parts[0] . "." . $parts[1], JWT_SECRET, true);
            $expectedSignatureEncoded = $this->base64UrlEncode($expectedSignature);
            
            if (!hash_equals($expectedSignatureEncoded, $parts[2])) {
                return false;
            }
            
            // Check expiration
            if (isset($payload['exp']) && $payload['exp'] < time()) {
                return false;
            }
            
            return $payload;
        } catch (Exception $e) {
            return false;
        }
    }
    
    private function base64UrlDecode($data) {
        return base64_decode(str_pad(strtr($data, '-_', '+/'), strlen($data) % 4, '=', STR_PAD_RIGHT));
    }
}
?>
