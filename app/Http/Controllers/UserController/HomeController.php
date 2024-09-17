<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $courses = Course::all();
        return inertia('UserPages/Home/Index', ['courses' => $courses, 'translations' => __('messages'),]);
    }
}
