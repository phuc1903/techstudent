<?php

namespace Database\Seeders;


use App\Models\CourseInslusionSection;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CourseInslusionSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CourseInslusionSection::factory(10)->create();
    }
}
