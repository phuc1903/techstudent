<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{

    public function index()
    {
        return inertia('Auth/Login');
    }

    public function store(Request $request)
    {
        dd($request);
    }
}
