<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SingleCourseController extends Controller
{
    public function index()
    {
        return inertia('UserPages/SingleCourse/Index');
    }
}
