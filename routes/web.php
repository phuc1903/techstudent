<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController\ContactController;
use App\Http\Controllers\UserController\CoursesController;
use App\Http\Controllers\UserController\HomeController;

use App\Http\Controllers\UserController\MessageController;
use App\Http\Controllers\UserController\SettingController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// Page Home
Route::get('/', [HomeController::class, 'index'])->name('home');

// Page Settings

Route::get('/settings/{user}', [SettingController::class, 'index'])->name('setting');
Route::put('/settings', [SettingController::class, 'update'])->name('setting.update');

// Change Language
Route::get('/change-language/{locale}', function($locale) {
    if (in_array($locale, ['en', 'vi'])) {
        session(['locale' => $locale]); // Lưu ngôn ngữ vào session
    }
    return redirect()->back(); // Quay lại trang trước đó
})->name('change.language');

// List Courses
Route::get('/courses', [CoursesController::class, 'index'])->name('courses');

//Page Contact
Route::get('/contact', [ContactController::class, 'index'])->name('contact');

// Page About
Route::get('/about', function() {
    return Inertia::render('UserPages/About/Index');
})->name("about");
Route::get('/instructor', function() {
    return Inertia::render('UserPages/About/Index');
})->name("instructor");

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::get('/message', [MessageController::class, 'index'])->name('message');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/instructor.php';
require __DIR__.'/auth.php';
