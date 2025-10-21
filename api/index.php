<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'config.php';
require_once 'Database.php';
require_once 'VideoController.php';
require_once 'UserController.php';
require_once 'AuthController.php';

$database = new Database();
$videoController = new VideoController($database);
$userController = new UserController($database);
$authController = new AuthController($database);

$request_method = $_SERVER['REQUEST_METHOD'];
$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);
$path = str_replace('/api', '', $path);

// Route the request
switch ($path) {
    case '/videos':
        if ($request_method === 'GET') {
            $videoController->getVideos();
        } elseif ($request_method === 'POST') {
            $videoController->uploadVideo();
        }
        break;
        
    case '/videos/search':
        if ($request_method === 'GET') {
            $videoController->searchVideos();
        }
        break;
        
    case '/video':
        if ($request_method === 'GET') {
            $videoController->getVideo();
        } elseif ($request_method === 'PUT') {
            $videoController->updateVideo();
        } elseif ($request_method === 'DELETE') {
            $videoController->deleteVideo();
        }
        break;
        
    case '/users':
        if ($request_method === 'GET') {
            $userController->getUsers();
        } elseif ($request_method === 'POST') {
            $userController->createUser();
        }
        break;
        
    case '/user':
        if ($request_method === 'GET') {
            $userController->getUser();
        } elseif ($request_method === 'PUT') {
            $userController->updateUser();
        }
        break;
        
    case '/auth/login':
        if ($request_method === 'POST') {
            $authController->login();
        }
        break;
        
    case '/auth/register':
        if ($request_method === 'POST') {
            $authController->register();
        }
        break;
        
    case '/auth/logout':
        if ($request_method === 'POST') {
            $authController->logout();
        }
        break;
        
    default:
        http_response_code(404);
        echo json_encode(['error' => 'Endpoint not found']);
        break;
}
?>

