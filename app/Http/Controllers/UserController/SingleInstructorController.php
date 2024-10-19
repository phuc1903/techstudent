<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Models\Instructor;
use Illuminate\Http\Request;

class SingleInstructorController extends Controller
{
    public function index(Instructor $instructor)
    {
        return inertia('UserPages/SingleInstructor/Index', ['instructor' => $instructor]);
    }
}
