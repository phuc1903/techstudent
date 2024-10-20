<?php

namespace App\Http\Controllers\InstructorController;

use App\Http\Controllers\Controller;
use App\Models\Instructor;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        return inertia('InstructorPages/Dashboard/Index');
    }
}
