<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController\ContactController;
use App\Http\Controllers\UserController\CoursesController;
use App\Http\Controllers\UserController\DashboardController;
use App\Http\Controllers\UserController\HomeController;

use App\Http\Controllers\UserController\MessageController;
use App\Http\Controllers\UserController\SettingController;
use App\Http\Controllers\UserController\SingleCourseController;
use App\Http\Controllers\UserController\SingleInstructorController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// Page Home
Route::get('/', [HomeController::class, 'index'])->name('home');

// Page Settings

// Single Course

Route::get('/course/{course:slug}', [SingleCourseController::class, 'index'])->name('single.course');

// Single Instructor

Route::get('/instructor/{instructor:slug}', [SingleInstructorController::class, 'index'])->name('single.instructor');

// Change Language
Route::get('/change-language/{locale}', function ($locale) {
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
Route::get('/about', function () {
    return Inertia::render('UserPages/About/Index');
})->name("about");



Route::prefix('user')->name('user.')->middleware('auth')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/courses', [DashboardController::class, 'courses'])->name('courses');
    Route::get('/instructors', [DashboardController::class, 'instructors'])->name('instructors');
    Route::get('/wishlists', [DashboardController::class, 'wishlists'])->name('wishlists');
    Route::get('/purchaseHistories', [DashboardController::class, 'purchaseHistories'])->name('purchaseHistories');
    Route::get('/settings', [DashboardController::class, 'settings'])->name('settings');
    Route::put('/settings', [DashboardController::class, 'settingUpdate'])->name('setting.update');
    Route::get('/message', [MessageController::class, 'index'])->name('message');
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/admin.php';
require __DIR__ . '/instructor.php';
require __DIR__ . '/auth.php';
