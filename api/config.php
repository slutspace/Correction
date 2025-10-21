<?php
// Database configuration
define('DB_HOST', 'localhost');
define('DB_NAME', 'flith_farm');
define('DB_USER', 'root');
define('DB_PASS', '');

// Application configuration
define('APP_URL', 'http://localhost:3000');
define('API_URL', 'http://localhost:8000/api');
define('UPLOAD_PATH', __DIR__ . '/uploads/');
define('THUMBNAIL_PATH', __DIR__ . '/thumbnails/');

// Create upload directories if they don't exist
if (!file_exists(UPLOAD_PATH)) {
    mkdir(UPLOAD_PATH, 0777, true);
}

if (!file_exists(THUMBNAIL_PATH)) {
    mkdir(THUMBNAIL_PATH, 0777, true);
}

// Allowed file types
define('ALLOWED_VIDEO_TYPES', ['mp4', 'avi', 'mov', 'wmv', 'flv', 'webm']);
define('ALLOWED_IMAGE_TYPES', ['jpg', 'jpeg', 'png', 'gif', 'webp']);

// File size limits (in bytes)
define('MAX_VIDEO_SIZE', 500 * 1024 * 1024); // 500MB
define('MAX_IMAGE_SIZE', 10 * 1024 * 1024); // 10MB

// JWT Secret (in production, use a secure random string)
define('JWT_SECRET', 'your-secret-key-change-in-production');

// Pagination
define('DEFAULT_PAGE_SIZE', 20);
define('MAX_PAGE_SIZE', 100);
?>

