<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@flithfarm.com',
            'password' => Hash::make('admin123'),
            'is_admin' => true,
            'bio' => 'System Administrator',
        ]);

        // Create regular user
        User::create([
            'name' => 'Test User',
            'email' => 'user@flithfarm.com',
            'password' => Hash::make('user123'),
            'is_admin' => false,
            'bio' => 'Test user account',
        ]);
    }
}
