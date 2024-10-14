<?php

namespace Database\Seeders;

use App\Models\CourseInslusion;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CourseInslusionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CourseInslusion::factory(10)->create();
    }
}
