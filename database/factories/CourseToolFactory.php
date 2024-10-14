<?php

namespace Database\Factories;

use App\Models\Course;
use App\Models\Tool;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CourseTool>
 */
class CourseToolFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'course_id' => Course::factory(),
            'tool_id' => Tool::factory(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
