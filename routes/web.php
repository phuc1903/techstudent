<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController\ContactController;
use App\Http\Controllers\UserController\CoursesController;
use App\Http\Controllers\UserController\HomeController;
use App\Http\Controllers\AdminController\UserController;
use App\Http\Controllers\InstructorController\CourseController;
use App\Http\Controllers\InstructorController\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// Page Home
Route::get('/', [HomeController::class, 'index'])->name('home');

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

Route::prefix('instructor')->name('instructor.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('user', UserController::class);
    Route::resource('course', CourseController::class);
    Route::get('/users', [UserController::class, 'index'])->name('users');
    Route::get('/products', [UserController::class, 'index'])->name('products');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
