<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word(),
            'description' => $this->faker->paragraph(),
            'slug' => $this->faker->unique()->slug(),
            'parent_id' => null, 
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }

    public function withParent($parentId)
    {
        return $this->state([
            'parent_id' => $parentId,
        ]);
    }
}
