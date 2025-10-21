<?php
// Simple PHP development server configuration
// Run with: php -S localhost:8000 api/server.php

// Set CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Route API requests
$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);

if (strpos($path, '/api') === 0) {
    // Remove /api prefix and route to index.php
    $_SERVER['REQUEST_URI'] = str_replace('/api', '', $request_uri);
    include 'index.php';
} else {
    // Serve static files or return 404
    $file = __DIR__ . $path;
    if (file_exists($file) && is_file($file)) {
        return false; // Let PHP serve the file
    } else {
        http_response_code(404);
        echo 'Not Found';
    }
}
?>
