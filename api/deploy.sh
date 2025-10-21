#!/bin/bash

# Flith Farm API Deployment Script for VPS
# Run this script on your Ubuntu/Debian VPS

set -e

echo "🚀 Starting Flith Farm API deployment..."

# Update system
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install PHP 8.1 and required extensions
echo "🐘 Installing PHP 8.1 and extensions..."
sudo apt install -y software-properties-common
sudo add-apt-repository ppa:ondrej/php -y
sudo apt update
sudo apt install -y php8.1 php8.1-cli php8.1-fpm php8.1-mysql php8.1-xml php8.1-curl php8.1-mbstring php8.1-zip php8.1-gd php8.1-bcmath php8.1-intl php8.1-readline

# Install Composer
echo "🎼 Installing Composer..."
cd /tmp
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
sudo chmod +x /usr/local/bin/composer

# Install Node.js and NPM
echo "📦 Installing Node.js and NPM..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install MySQL
echo "🗄️ Installing MySQL..."
sudo apt install -y mysql-server
sudo mysql_secure_installation

# Install Nginx
echo "🌐 Installing Nginx..."
sudo apt install -y nginx

# Install FFmpeg (for video processing)
echo "🎬 Installing FFmpeg..."
sudo apt install -y ffmpeg

# Create application directory
echo "📁 Creating application directory..."
sudo mkdir -p /var/www/flithfarm-api
sudo chown -R $USER:$USER /var/www/flithfarm-api

# Copy application files (assuming you've uploaded them)
echo "📋 Setting up application files..."
cd /var/www/flithfarm-api

# Install dependencies
echo "📦 Installing PHP dependencies..."
composer install --no-dev --optimize-autoloader

# Set up environment
echo "⚙️ Setting up environment..."
cp env.example .env
php artisan key:generate
php artisan jwt:secret

# Configure database
echo "🗄️ Setting up database..."
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS flithfarm;"
mysql -u root -p -e "CREATE USER IF NOT EXISTS 'flithfarm'@'localhost' IDENTIFIED BY 'your_secure_password';"
mysql -u root -p -e "GRANT ALL PRIVILEGES ON flithfarm.* TO 'flithfarm'@'localhost';"
mysql -u root -p -e "FLUSH PRIVILEGES;"

# Run migrations
echo "🔄 Running database migrations..."
php artisan migrate --force
php artisan db:seed --force

# Set up storage
echo "💾 Setting up storage..."
php artisan storage:link
sudo chown -R www-data:www-data storage
sudo chown -R www-data:www-data bootstrap/cache
sudo chmod -R 775 storage
sudo chmod -R 775 bootstrap/cache

# Configure Nginx
echo "🌐 Configuring Nginx..."
sudo tee /etc/nginx/sites-available/flithfarm-api << EOF
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/flithfarm-api/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    location / {
        try_files \$uri \$uri/ /index.php?\$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME \$realpath_root\$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
EOF

# Enable site
sudo ln -sf /etc/nginx/sites-available/flithfarm-api /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# Restart services
echo "🔄 Restarting services..."
sudo systemctl restart nginx
sudo systemctl restart php8.1-fpm
sudo systemctl enable nginx
sudo systemctl enable php8.1-fpm

# Set up SSL with Let's Encrypt (optional)
echo "🔒 Setting up SSL (optional)..."
read -p "Do you want to set up SSL with Let's Encrypt? (y/n): " setup_ssl
if [[ $setup_ssl == "y" || $setup_ssl == "Y" ]]; then
    sudo apt install -y certbot python3-certbot-nginx
    sudo certbot --nginx -d your-domain.com
fi

# Set up firewall
echo "🔥 Configuring firewall..."
sudo ufw allow 'Nginx Full'
sudo ufw allow ssh
sudo ufw --force enable

# Create systemd service for Laravel queue worker (optional)
echo "⚙️ Setting up queue worker service..."
sudo tee /etc/systemd/system/flithfarm-worker.service << EOF
[Unit]
Description=Flith Farm Queue Worker
After=network.target

[Service]
User=www-data
Group=www-data
Restart=always
ExecStart=/usr/bin/php /var/www/flithfarm-api/artisan queue:work --sleep=3 --tries=3 --max-time=3600
WorkingDirectory=/var/www/flithfarm-api

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl enable flithfarm-worker
sudo systemctl start flithfarm-worker

echo "✅ Deployment completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Update your .env file with correct database credentials"
echo "2. Update your .env file with Wasabi S3 credentials"
echo "3. Update your .env file with your domain name"
echo "4. Test the API endpoints"
echo ""
echo "🔗 API Health Check: http://your-domain.com/api/health"
echo "📚 API Documentation: Check the routes/api.php file"
echo ""
echo "🚀 Your Flith Farm API is now running!"
