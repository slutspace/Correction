<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

class HealthController extends Controller
{
    /**
     * Health check endpoint
     */
    public function check(): JsonResponse
    {
        $status = 'healthy';
        $checks = [];

        // Check database connection
        try {
            DB::connection()->getPdo();
            $checks['database'] = [
                'status' => 'ok',
                'message' => 'Database connection successful'
            ];
        } catch (\Exception $e) {
            $status = 'unhealthy';
            $checks['database'] = [
                'status' => 'error',
                'message' => 'Database connection failed: ' . $e->getMessage()
            ];
        }

        // Check cache
        try {
            Cache::put('health_check', 'ok', 60);
            $cacheStatus = Cache::get('health_check');
            $checks['cache'] = [
                'status' => $cacheStatus === 'ok' ? 'ok' : 'error',
                'message' => $cacheStatus === 'ok' ? 'Cache is working' : 'Cache test failed'
            ];
        } catch (\Exception $e) {
            $status = 'unhealthy';
            $checks['cache'] = [
                'status' => 'error',
                'message' => 'Cache failed: ' . $e->getMessage()
            ];
        }

        // Check S3 connection
        try {
            $s3Client = app('aws')->createClient('s3');
            $s3Client->headBucket(['Bucket' => config('filesystems.disks.s3.bucket')]);
            $checks['storage'] = [
                'status' => 'ok',
                'message' => 'S3 storage connection successful'
            ];
        } catch (\Exception $e) {
            $status = 'unhealthy';
            $checks['storage'] = [
                'status' => 'error',
                'message' => 'S3 storage connection failed: ' . $e->getMessage()
            ];
        }

        $response = [
            'status' => $status,
            'timestamp' => now()->toISOString(),
            'version' => '1.0.0',
            'checks' => $checks
        ];

        $httpStatus = $status === 'healthy' ? 200 : 503;

        return response()->json($response, $httpStatus);
    }
}
