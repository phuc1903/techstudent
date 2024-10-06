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
        Schema::create('lesson_resources', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('resouce_id')->unsigned();
            $table->bigInteger('lesson_id')->unsigned();
            $table->foreign('resouce_id')->references('id')->on('resources')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreign('lesson_id')->references('id')->on('lessons')->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lesson__resources');
    }
};
