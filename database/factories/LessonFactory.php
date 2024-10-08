<?php

namespace Database\Factories;

use App\Models\Lesson;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Lesson>
 */
class LessonFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'module_id' => Lesson::factory(),
            'title' => $this->faker->sentence(),
            'description' => $this->faker->paragraph(),
            'order' => $this->faker->numberBetween(1, 10),
            'content_type' => $this->faker->randomElement(['video', 'article', 'quiz']),
            'content_url' => $this->faker->url(),
            'duration' => $this->faker->numberBetween(5, 120), // Thời gian tính bằng phút
            'slug' => $this->faker->unique()->slug(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
