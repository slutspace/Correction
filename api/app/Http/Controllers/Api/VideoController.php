<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Aws\S3\S3Client;
use Aws\Exception\AwsException;

class VideoController extends Controller
{
    private $s3Client;

    public function __construct()
    {
        $this->s3Client = new S3Client([
            'version' => 'latest',
            'region' => config('filesystems.disks.s3.region'),
            'credentials' => [
                'key' => config('filesystems.disks.s3.key'),
                'secret' => config('filesystems.disks.s3.secret'),
            ],
            'endpoint' => config('filesystems.disks.s3.endpoint'),
            'use_path_style_endpoint' => config('filesystems.disks.s3.use_path_style_endpoint'),
        ]);
    }

    /**
     * Upload a new video
     */
    public function upload(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'video' => 'required|file|mimes:mp4,avi,mov,wmv,webm|max:102400', // 100GB max
            'title' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
            'tags' => 'nullable|string|max:500',
            'duration' => 'nullable|integer|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $file = $request->file('video');
            $filename = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
            $path = 'videos/' . $filename;

            // Upload to Wasabi S3
            $result = $this->s3Client->putObject([
                'Bucket' => config('filesystems.disks.s3.bucket'),
                'Key' => $path,
                'SourceFile' => $file->getPathname(),
                'ACL' => 'public-read',
                'ContentType' => $file->getMimeType(),
            ]);

            $videoUrl = $result['ObjectURL'];

            // Create video record
            $video = Video::create([
                'title' => $request->title,
                'description' => $request->description,
                'video_url' => $videoUrl,
                'thumbnail_url' => $this->generateThumbnail($videoUrl),
                'duration' => $request->duration ?? $this->getVideoDuration($file),
                'tags' => $request->tags,
                'file_size' => $file->getSize(),
                'mime_type' => $file->getMimeType(),
                'uploaded_by' => auth()->id(),
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Video uploaded successfully',
                'data' => $video
            ], 201);

        } catch (AwsException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to upload video to storage',
                'error' => $e->getMessage()
            ], 500);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred during upload',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get all videos with pagination
     */
    public function index(Request $request): JsonResponse
    {
        $perPage = $request->get('per_page', 15);
        $search = $request->get('search');
        $sortBy = $request->get('sort_by', 'created_at');
        $sortOrder = $request->get('sort_order', 'desc');

        $query = Video::with('user');

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%")
                  ->orWhere('tags', 'like', "%{$search}%");
            });
        }

        $videos = $query->orderBy($sortBy, $sortOrder)
                       ->paginate($perPage);

        return response()->json([
            'success' => true,
            'data' => $videos
        ]);
    }

    /**
     * Get a single video
     */
    public function show($id): JsonResponse
    {
        $video = Video::with('user')->find($id);

        if (!$video) {
            return response()->json([
                'success' => false,
                'message' => 'Video not found'
            ], 404);
        }

        // Increment view count
        $video->increment('views');

        return response()->json([
            'success' => true,
            'data' => $video
        ]);
    }

    /**
     * Update video metadata (admin only)
     */
    public function update(Request $request, $id): JsonResponse
    {
        $video = Video::find($id);

        if (!$video) {
            return response()->json([
                'success' => false,
                'message' => 'Video not found'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string|max:1000',
            'tags' => 'sometimes|string|max:500',
            'is_featured' => 'sometimes|boolean',
            'is_public' => 'sometimes|boolean',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $video->update($request->only([
            'title', 'description', 'tags', 'is_featured', 'is_public'
        ]));

        return response()->json([
            'success' => true,
            'message' => 'Video updated successfully',
            'data' => $video
        ]);
    }

    /**
     * Delete a video (admin only)
     */
    public function destroy($id): JsonResponse
    {
        $video = Video::find($id);

        if (!$video) {
            return response()->json([
                'success' => false,
                'message' => 'Video not found'
            ], 404);
        }

        try {
            // Delete from S3
            $key = parse_url($video->video_url, PHP_URL_PATH);
            $key = ltrim($key, '/');
            
            $this->s3Client->deleteObject([
                'Bucket' => config('filesystems.disks.s3.bucket'),
                'Key' => $key,
            ]);

            // Delete thumbnail if exists
            if ($video->thumbnail_url) {
                $thumbKey = parse_url($video->thumbnail_url, PHP_URL_PATH);
                $thumbKey = ltrim($thumbKey, '/');
                
                $this->s3Client->deleteObject([
                    'Bucket' => config('filesystems.disks.s3.bucket'),
                    'Key' => $thumbKey,
                ]);
            }

            $video->delete();

            return response()->json([
                'success' => true,
                'message' => 'Video deleted successfully'
            ]);

        } catch (AwsException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete video from storage',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Generate thumbnail for video
     */
    private function generateThumbnail($videoUrl): ?string
    {
        // This would typically use FFmpeg to generate a thumbnail
        // For now, return null - you can implement this later
        return null;
    }

    /**
     * Get video duration
     */
    private function getVideoDuration($file): ?int
    {
        // This would typically use FFmpeg to get duration
        // For now, return null - you can implement this later
        return null;
    }
}
