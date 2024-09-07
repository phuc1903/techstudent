<?php

namespace Database\Factories;

use App\Models\Course;
use App\Models\Student;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Enrollment>
 */
class EnrollmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'student_id' => Student::factory(), 
            'course_id' => Course::factory(),
            'progress' => $this->faker->numberBetween(0, 100),
            'completed' => $this->faker->boolean(),
            'slug' => $this->faker->unique()->slug(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
