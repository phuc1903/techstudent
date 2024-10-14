<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OrderStatus>
 */
class OrderStatusFactory extends Factory
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
            'description' => $this->faker->randomElement(['Đã đặt hàng', 'Đang kiểm duyệt', 'Đang đóng gói', 'Đang giao hàng', 'Giao hàng thành công', 'Đã thanh toán', 'Hoàn thành đơn hàng']),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
