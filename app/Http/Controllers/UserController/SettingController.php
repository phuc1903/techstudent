<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function index()
    {
        // $user = User::findOrFail($user);
        // dd($user);
        return inertia('UserPages/Settings/Index');
    }

    public function update(Request $request)
    {
        dd($request);
    }
}
