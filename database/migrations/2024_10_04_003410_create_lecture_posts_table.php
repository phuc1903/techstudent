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
        Schema::create('lecture_posts', function (Blueprint $table) {
            $table->id();
            $table->text('content');
            $table->string('description')->nullable();
            $table->bigInteger('lecture_id')->unsigned();
            $table->foreign('lecture_id')->references('id')->on('lectures')->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lecture__posts');
    }
};
