<?php

namespace Database\Factories;

use App\Models\Conversation;
use App\Models\ConversationUser;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Message>
 */
class MessageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $conversation = Conversation::factory()->create();
        $user = ConversationUser::where('conversation_id', $conversation->id)->inRandomOrder()->first();

        return [
            'message' => $this->faker->paragraph(),
            'sender_id' => $user ? $user->user_id : User::factory(),
            'conversation_id' => $conversation->id, 
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
