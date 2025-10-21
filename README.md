# Flith Farm - Creator Platform Video Website

A modern, dark-themed creator platform video website built with TypeScript (React) frontend and PHP backend, inspired by YouTube.

## Features

- 🎥 **Video Upload & Management** - Upload, edit, and manage video content
- 👤 **User Profiles** - Customizable user profiles with avatars and banners
- 🔍 **Search & Discovery** - Advanced search functionality with filters
- 💬 **Comments & Engagement** - Like, dislike, comment, and subscribe features
- 📱 **Responsive Design** - Modern dark UI that works on all devices
- 🎨 **Custom Thumbnails** - Upload custom thumbnails or auto-generate from videos
- 🔒 **Privacy Controls** - Public, unlisted, and private video settings

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **React Router** for navigation
- **Lucide React** for icons
- **Tailwind CSS** for styling (custom dark theme)

### Backend
- **PHP 8+** with PDO for database operations
- **MySQL** database
- **JWT** for authentication
- **RESTful API** design

## Getting Started

### Prerequisites
- Node.js 16+ and npm
- PHP 8+ with MySQL extension
- MySQL 8+ database

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ScatFarm
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   ```bash
   # Create database and import schema
   mysql -u root -p < database/schema.sql
   ```

4. **Configure the backend**
   - Update `api/config.php` with your database credentials
   - Adjust file upload paths and limits as needed

5. **Start the development servers**

   **Frontend (Terminal 1):**
   ```bash
   npm run dev
   ```
   Frontend will be available at `http://localhost:3000`

   **Backend (Terminal 2):**
   ```bash
   cd api
   php -S localhost:8000 server.php
   ```
   Backend API will be available at `http://localhost:8000/api`

## Project Structure

```
ScatFarm/
├── src/                    # React TypeScript frontend
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page components
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── api/                  # PHP backend
│   ├── index.php         # Main API router
│   ├── config.php        # Configuration
│   ├── Database.php      # Database wrapper
│   ├── VideoController.php
│   ├── UserController.php
│   └── AuthController.php
├── database/
│   └── schema.sql        # Database schema
├── public/               # Static assets
└── package.json          # Frontend dependencies
```

## API Endpoints

### Videos
- `GET /api/videos` - Get list of videos
- `GET /api/video?id={id}` - Get specific video
- `POST /api/videos` - Upload new video
- `PUT /api/video` - Update video
- `DELETE /api/video` - Delete video
- `GET /api/videos/search?q={query}` - Search videos

### Users
- `GET /api/users` - Get list of users
- `GET /api/user?username={username}` - Get user profile
- `POST /api/users` - Create new user
- `PUT /api/user` - Update user profile

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout

## Features in Detail

### Video Management
- Upload videos with drag & drop interface
- Custom thumbnails or auto-generated
- Privacy settings (public, unlisted, private)
- Video metadata (title, description, duration)
- View count and engagement metrics

### User System
- User registration and authentication
- Profile customization (avatar, banner, bio)
- Subscription system
- User statistics (subscribers, total views)

### Search & Discovery
- Full-text search across video titles and descriptions
- Filter by content type (videos, channels, playlists)
- Sort by relevance, date, views, or rating
- Pagination for large result sets

### Modern UI/UX
- Dark theme with red accent colors
- Responsive design for all screen sizes
- Smooth animations and transitions
- Intuitive navigation and user flows

## Development

### Frontend Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Backend Development
The PHP backend uses a simple MVC pattern with:
- Controllers handle HTTP requests
- Database class provides PDO wrapper
- JWT tokens for authentication
- File upload handling for videos and images

### Database Schema
The database includes tables for:
- Users and authentication
- Videos and metadata
- Comments and replies
- Subscriptions and likes
- Playlists and categories

## Production Deployment

### Frontend
1. Build the production bundle:
   ```bash
   npm run build
   ```
2. Deploy the `dist/` folder to your web server

### Backend
1. Configure production database settings in `api/config.php`
2. Set up proper file permissions for upload directories
3. Configure web server (Apache/Nginx) to serve PHP files
4. Set up SSL certificates for HTTPS

### Environment Variables
For production, consider using environment variables for:
- Database credentials
- JWT secret keys
- File upload paths
- API endpoints

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.
