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
        User::factory()->create([
            'fullname' => "Đinh Trọng Phúc",
            'username' => "phuc1903",
            'email' => "dinhtrongphuc19@gmail.com",
            'role' => 'admin',
            'bio' => "Tôi là Đinh Trọng Phúc và cũng là người tạo ra dự án TechStudent này",
            'phone' => "0377461482",
            'slug' => "dinh-trong-phuc-19-03",
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // $this->call([
        //     UserSeeder::class,
        //     CategorySeeder::class,
        //     CourseSeeder::class,
        //     CourseCategorySeeder::class,
        //     SectionSeeder::class,
        //     TypeSeeder::class,
        //     LessonSeeder::class,
        //     LectureSeeder::class,
        //     VideoSeeder::class,
        //     EnrollmentSeeder::class,
        //     InstructorSeeder::class,
        //     CertificateSeeder::class,
        //     SocialSeeder::class,
        //     InstructorRatingSeeder::class,
        //     CourseInstructorSeeder::class,
        //     LecturePostSeeder::class,
        //     QuizSeeder::class,
        //     QuestionSeeder::class,
        //     AnswerSeeder::class,
        //     CourseOutcomeSeeder::class,
        //     CourseRequirementSeeder::class,
        //     CourseAudienceSeeder::class,
        //     BannerSeeder::class,
        //     CourseRatingSeeder::class,
        //     CourseCommentSeeder::class,
        //     FavoriteSeeder::class,
        //     ToolSeeder::class,
        //     CourseToolSeeder::class,
        //     CategoryToolSeeder::class,
        //     ResourceSeeder::class,
        //     ConversationSeeder::class,
        //     MessageSeeder::class,
        //     ConversationUserSeeder::class,
        //     CourseInslusionSeeder::class,
        //     CourseInslusionSectionSeeder::class,
        //     OrderStatusSeeder::class,
        //     OrderSeeder::class,
        //     OrderDetailSeeder::class,
        //     UserVideoProgressSeeder::class,
        //     UserQuizSeeder::class,
        //     UserLessonsSeeder::class,
        // ]);
        
        
    }
}
