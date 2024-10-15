<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Course;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $courses = Course::with("categories")->with("instructors")->limit(10)->get();
        // dd($courses);
        $categories = Category::limit(12)->get();
        return inertia('UserPages/Home/Index', ['courses' => $courses, 'translations' => __('messages'), 'categories' => $categories]);
    }
}
