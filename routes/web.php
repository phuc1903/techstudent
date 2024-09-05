<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController\ContactController;
use App\Http\Controllers\UserController\CoursesController;
use App\Http\Controllers\UserController\HomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/courses', [CoursesController::class, 'index'])->name('courses');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::get('/about', function() {
    return Inertia::render('UserPages/About/Index');
})->name("about");
Route::get('/instructor', function() {
    return Inertia::render('UserPages/About/Index');
})->name("instructor");

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
