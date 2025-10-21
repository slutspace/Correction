-- Flith Farm Database Schema
CREATE DATABASE IF NOT EXISTS flith_farm;
USE flith_farm;

-- Users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    display_name VARCHAR(100) NOT NULL,
    avatar VARCHAR(255) NULL,
    banner VARCHAR(255) NULL,
    bio TEXT NULL,
    website VARCHAR(255) NULL,
    subscribers INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Videos table
CREATE TABLE videos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NULL,
    video_path VARCHAR(255) NOT NULL,
    thumbnail_path VARCHAR(255) NULL,
    duration INT NULL, -- in seconds
    privacy ENUM('public', 'unlisted', 'private') DEFAULT 'public',
    views INT DEFAULT 0,
    likes INT DEFAULT 0,
    dislikes INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_created_at (created_at),
    INDEX idx_views (views),
    INDEX idx_privacy (privacy)
);

-- Comments table
CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    video_id INT NOT NULL,
    user_id INT NOT NULL,
    parent_id INT NULL, -- for replies
    content TEXT NOT NULL,
    likes INT DEFAULT 0,
    dislikes INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (video_id) REFERENCES videos(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (parent_id) REFERENCES comments(id) ON DELETE CASCADE,
    INDEX idx_video_id (video_id),
    INDEX idx_user_id (user_id),
    INDEX idx_parent_id (parent_id)
);

-- Subscriptions table
CREATE TABLE subscriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    subscriber_id INT NOT NULL,
    channel_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (subscriber_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (channel_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY unique_subscription (subscriber_id, channel_id),
    INDEX idx_subscriber_id (subscriber_id),
    INDEX idx_channel_id (channel_id)
);

-- Likes table (for videos and comments)
CREATE TABLE likes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    video_id INT NULL,
    comment_id INT NULL,
    type ENUM('like', 'dislike') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (video_id) REFERENCES videos(id) ON DELETE CASCADE,
    FOREIGN KEY (comment_id) REFERENCES comments(id) ON DELETE CASCADE,
    UNIQUE KEY unique_like (user_id, video_id, comment_id),
    INDEX idx_user_id (user_id),
    INDEX idx_video_id (video_id),
    INDEX idx_comment_id (comment_id)
);

-- Playlists table
CREATE TABLE playlists (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NULL,
    privacy ENUM('public', 'unlisted', 'private') DEFAULT 'public',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id)
);

-- Playlist videos table
CREATE TABLE playlist_videos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    playlist_id INT NOT NULL,
    video_id INT NOT NULL,
    position INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (playlist_id) REFERENCES playlists(id) ON DELETE CASCADE,
    FOREIGN KEY (video_id) REFERENCES videos(id) ON DELETE CASCADE,
    UNIQUE KEY unique_playlist_video (playlist_id, video_id),
    INDEX idx_playlist_id (playlist_id),
    INDEX idx_video_id (video_id)
);

-- Categories table
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Video categories table
CREATE TABLE video_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    video_id INT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (video_id) REFERENCES videos(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    UNIQUE KEY unique_video_category (video_id, category_id)
);

-- Insert default categories
INSERT INTO categories (name, description) VALUES
('Technology', 'Tech reviews, tutorials, and news'),
('Gaming', 'Gaming content, reviews, and gameplay'),
('Education', 'Educational content and tutorials'),
('Entertainment', 'Fun and entertaining videos'),
('Music', 'Music videos and covers'),
('Sports', 'Sports content and highlights'),
('Travel', 'Travel vlogs and guides'),
('Food', 'Cooking and food reviews'),
('Fitness', 'Workout and fitness content'),
('Art', 'Art tutorials and showcases');

-- Insert sample users
INSERT INTO users (username, email, password, display_name, bio) VALUES
('techreviewer', 'tech@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Tech Reviewer', 'Passionate about technology and gadgets'),
('gamerpro', 'gamer@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Gamer Pro', 'Professional gamer and content creator'),
('chefmaster', 'chef@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Chef Master', 'Cooking enthusiast and food lover'),
('traveler', 'travel@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'World Traveler', 'Exploring the world one video at a time');

-- Insert sample videos
INSERT INTO videos (user_id, title, description, video_path, thumbnail_path, duration, views, likes) VALUES
(1, 'Amazing Tech Review - Latest Smartphone 2024', 'In this comprehensive review, we dive deep into the latest smartphone technology, testing all the key features and performance metrics.', 'sample_video_1.mp4', 'thumbnail_1.jpg', 754, 1250000, 45000),
(1, 'Laptop Review - Best Gaming Laptop 2024', 'Reviewing the top gaming laptops of 2024, comparing performance, build quality, and value for money.', 'sample_video_2.mp4', 'thumbnail_2.jpg', 892, 890000, 32000),
(2, 'Epic Gaming Moments - Compilation', 'The best gaming highlights and epic moments from various games.', 'sample_video_3.mp4', 'thumbnail_3.jpg', 922, 2100000, 78000),
(3, 'Perfect Pasta Recipe - Italian Style', 'Learn how to make authentic Italian pasta from scratch with this step-by-step tutorial.', 'sample_video_4.mp4', 'thumbnail_4.jpg', 535, 650000, 28000),
(4, 'Hidden Gems in Japan - Travel Guide', 'Discover the most beautiful and lesser-known places in Japan that tourists often miss.', 'sample_video_5.mp4', 'thumbnail_5.jpg', 1136, 420000, 19000);

-- Insert sample subscriptions
INSERT INTO subscriptions (subscriber_id, channel_id) VALUES
(2, 1),
(3, 1),
(4, 1),
(1, 2),
(3, 2),
(4, 2);

-- Update subscriber counts
UPDATE users SET subscribers = (
    SELECT COUNT(*) FROM subscriptions WHERE channel_id = users.id
) WHERE id IN (1, 2, 3, 4);
