<?php

namespace Database\Factories;

use App\Models\Lesson;
use App\Models\Section;
use App\Models\Type;
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
            'title' => $this->faker->sentence(),
            'description' => $this->faker->paragraph(),
            'content_url' => $this->faker->url(),
            'duration' => $this->faker->numberBetween(5, 120),
            'slug' => $this->faker->slug(),
            'section_id' => Section::factory(),
            'type_id' => Type::factory(),
            'order' => $this->faker->numberBetween(1, 10),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
