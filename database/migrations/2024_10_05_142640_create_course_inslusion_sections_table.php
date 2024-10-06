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
        Schema::create('course_inslusion_sections', function (Blueprint $table) {
            $table->id();
            $table->boolean('is_selected')->default(false);
            $table->bigInteger('inslusion_id')->unsigned();
            $table->bigInteger('course_id')->unsigned();
            $table->foreign('inslusion_id')->references('id')->on('course_inslusions')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreign('course_id')->references('id')->on('courses')->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('course__inslusion__sections');
    }
};
