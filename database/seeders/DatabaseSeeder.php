<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory()->create([
        //     'email' => 'dinhtrongphuc19@gmail.com',
        //     'name' => 'Đinh Trọng Phúc',
        //     'avatar' => fake()->imageUrl(200, 200, 'people'),
        //     'role' => 'admin',
        //     'bio' => fake()->paragraph(),
        //     'slug' => fake()->unique()->slug(),
        //     'email_verified_at' => now(),
        //     'password' => Hash::make('password'), 
        //     'remember_token' => Str::random(10),
        //     'created_at' => now(),
        //     'updated_at' => now(),
        // ]);

        $this->call([
            UserSeeder::class,
            CategorySeeder::class,
            InstructorSeeder::class,
            StudentSeeder::class,
            CourseSeeder::class,
            CourseCategorySeeder::class,
            CertificateSeeder::class,
            EnrollmentSeeder::class,
            PaymentSeeder::class,
            ReviewSeeder::class,
            ModuleSeeder::class,
            LessonSeeder::class,
            VideoSeeder::class
        ]);
    }
}
