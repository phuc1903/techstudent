<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Video>
 */
class VideoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'lesson_id' => \App\Models\Lesson::factory(),
            'title' => $this->faker->sentence(),
            'description' => $this->faker->paragraph(),
            'url' => $this->faker->url(),
            'order' => $this->faker->numberBetween(1, 10),
            'slug' => $this->faker->unique()->slug(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
