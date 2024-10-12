<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(),
            'thumbnail' => $this->faker->imageUrl(),
            'subtitle' => $this->faker->sentence(),
            'description' => $this->faker->paragraph(),
            'price' => $this->faker->randomNumber(4),
            'is_free' => $this->faker->boolean(),
            'trailer' => $this->faker->url(),
            'level' => $this->faker->randomElement(['beginner', 'intermediate', 'expert']),
            'slug' => Str::slug($this->faker->sentence()),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
