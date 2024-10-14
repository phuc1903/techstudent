<?php

namespace Database\Factories;

use App\Models\Lecture;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\LecturePost>
 */
class LecturePostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'content' => $this->faker->paragraph(),
            'description' => $this->faker->sentence(),
            'lecture_id' => Lecture::factory(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
