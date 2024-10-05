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
        Schema::create('course__ratings', function (Blueprint $table) {
            $table->id();
            $table->string('feedback');
            $table->integer("value");
            $table->foreign('course_id')->references('id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreign('user_id')->references('id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('course__ratings');
    }
};
