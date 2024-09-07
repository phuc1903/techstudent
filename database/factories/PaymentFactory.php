<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Payment>
 */
class PaymentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => \App\Models\User::factory(),
            'course_id' => \App\Models\Course::factory(),
            'amount' => $this->faker->randomFloat(2, 10, 300),
            'status' => $this->faker->randomElement(['pending', 'completed', 'failed']),
            'payment_method' => $this->faker->randomElement(['momo', 'paypal', 'zalopay', 'atm']),
            'slug' => $this->faker->unique()->slug(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
