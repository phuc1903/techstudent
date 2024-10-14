<?php

namespace Database\Factories;

use App\Models\Course;
use App\Models\CourseInslusion;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CourseInslusionSection>
 */
class CourseInslusionSectionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'is_selected' => $this->faker->boolean(),
            'inslusion_id' => CourseInslusion::factory(),
            'course_id' => Course::factory(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
