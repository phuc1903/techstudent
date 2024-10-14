<?php

namespace Database\Seeders;

use App\Models\CourseAudience;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CourseAudienceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CourseAudience::factory(6)->create();
    }
}
