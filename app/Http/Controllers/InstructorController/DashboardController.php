<?php

namespace App\Http\Controllers\InstructorController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        return inertia('InstructorPages/Dashboard/Index');
    }
}
