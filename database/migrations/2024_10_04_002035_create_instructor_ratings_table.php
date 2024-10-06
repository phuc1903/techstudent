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
        Schema::create('instructor_ratings', function (Blueprint $table) {
            $table->id();
            $table->integer("value")->nullable();
            $table->string('feedback')->nullable();
            $table->bigInteger('instructor_id')->unsigned();
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('instructor_id')->references('id')->on('instructors')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('instructor__ratings');
    }
};
