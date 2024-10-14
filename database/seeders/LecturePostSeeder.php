<?php

namespace Database\Seeders;

use App\Models\LecturePost;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LecturePostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        LecturePost::factory(10)->create();
    }
}
