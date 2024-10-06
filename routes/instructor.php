<?php

use App\Http\Controllers\AdminController\UserController;
use App\Http\Controllers\InstructorController\CourseController;
use App\Http\Controllers\InstructorController\DashboardController;
use Illuminate\Support\Facades\Route;

Route::prefix('instructor')->name('instructor.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('user', UserController::class);
    Route::resource('course', CourseController::class);
    Route::get('/users', [UserController::class, 'index'])->name('users');
    Route::get('/products', [UserController::class, 'index'])->name('products');
});