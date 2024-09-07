<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('instructors', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned();
            $table->text('bio')->nullable();
            $table->string('expertise')->nullable();
            $table->json('social_links')->nullable();
            $table->string('slug')->unique();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->integer('rating')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('instructor');
    }
};
