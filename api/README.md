# Flith Farm Video Platform API

A secure, fast PHP REST API for uploading and managing videos, integrated with Wasabi storage, that supports admin-level management and public video retrieval.

## Features

- 🎥 Video upload and management
- 🔐 JWT-based admin authentication
- ☁️ Wasabi S3 integration for video storage
- 📊 Video analytics and metadata
- 🔒 Secure CORS configuration
- 🏥 Health check endpoint
- 📱 RESTful API design

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout
- `POST /api/auth/refresh` - Refresh token

### Videos
- `POST /api/videos` - Upload video (admin only)
- `GET /api/videos` - List videos (public)
- `GET /api/videos/{id}` - Get video details (public)
- `PUT /api/videos/{id}` - Update video (admin only)
- `DELETE /api/videos/{id}` - Delete video (admin only)

### Health
- `GET /api/health` - Health check

## Installation

### Prerequisites
- PHP 8.1+
- Composer
- MySQL 8.0+
- Nginx or Apache
- FFmpeg (for video processing)

### Quick Setup

1. **Clone and install dependencies:**
```bash
cd api
composer install
```

2. **Configure environment:**
```bash
cp env.example .env
# Edit .env with your database and Wasabi credentials
```

3. **Generate keys:**
```bash
php artisan key:generate
php artisan jwt:secret
```

4. **Run migrations:**
```bash
php artisan migrate
php artisan db:seed
```

5. **Start development server:**
```bash
php artisan serve
```

## Environment Configuration

### Database
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=flithfarm
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

### Wasabi S3
```env
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=your_bucket_name
AWS_ENDPOINT=https://s3.wasabisys.com
AWS_USE_PATH_STYLE_ENDPOINT=false
```

### JWT
```env
JWT_SECRET=your_jwt_secret
JWT_TTL=60
```

### CORS
```env
CORS_ALLOWED_ORIGINS=http://localhost:3000,https://flithfarm.com
```

## VPS Deployment

### Automated Deployment
Run the provided deployment script on your Ubuntu/Debian VPS:

```bash
chmod +x deploy.sh
./deploy.sh
```

### Manual Deployment

1. **Install PHP 8.1 and extensions:**
```bash
sudo apt update
sudo apt install php8.1 php8.1-cli php8.1-fpm php8.1-mysql php8.1-xml php8.1-curl php8.1-mbstring php8.1-zip php8.1-gd php8.1-bcmath php8.1-intl
```

2. **Install Composer:**
```bash
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

3. **Install MySQL:**
```bash
sudo apt install mysql-server
sudo mysql_secure_installation
```

4. **Install Nginx:**
```bash
sudo apt install nginx
```

5. **Install FFmpeg:**
```bash
sudo apt install ffmpeg
```

6. **Configure your web server:**
See the `deploy.sh` script for Nginx configuration.

## Usage Examples

### Upload Video
```bash
curl -X POST http://your-domain.com/api/videos \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -F "video=@/path/to/video.mp4" \
  -F "title=My Video" \
  -F "description=Video description" \
  -F "tags=tag1,tag2"
```

### Get Videos
```bash
curl -X GET "http://your-domain.com/api/videos?page=1&per_page=10&search=keyword"
```

### Health Check
```bash
curl -X GET http://your-domain.com/api/health
```

## Security Features

- JWT-based authentication
- Admin-only write operations
- CORS protection
- File upload validation
- SQL injection protection
- XSS protection

## Performance Optimizations

- Database indexing
- S3 CDN integration
- Efficient pagination
- Query optimization
- Caching support

## Monitoring

The API includes a health check endpoint that monitors:
- Database connectivity
- Cache functionality
- S3 storage connectivity
- Application status

## Support

For issues and questions:
- Check the health endpoint: `/api/health`
- Review the logs in `storage/logs/`
- Monitor system resources

## License

MIT License - see LICENSE file for details.
