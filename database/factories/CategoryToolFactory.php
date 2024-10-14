<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Tool;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CategoryTool>
 */
class CategoryToolFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'category_id' => Category::factory(),
            'tool_id' => Tool::factory(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
