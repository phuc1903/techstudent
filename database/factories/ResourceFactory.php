<?php

namespace Database\Factories;

use App\Models\Lesson;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Resource>
 */
class ResourceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'file' => $this->faker->url(),
            'lesson_id' => Lesson::factory(),
            // 'type' => $this->faker->randomElement(['pdf', 'video', 'document']),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
