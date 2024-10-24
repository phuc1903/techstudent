<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Enrollment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    protected function renderDashboardPage($page, $data = [])
    {
        return inertia("UserPages/Dashboard/{$page}", $data);
    }

    public function index()
    {
        if(Auth::check()) {
            $enrollments = Enrollment::with('user', 'course')->where('user_id', Auth::user())->get();
            return $this->renderDashboardPage('Dashboard', ['enrollments' => $enrollments]);
        }
        return redirect()->back()->with('notifications', [
            [
                'type' => 'error',
                'message' => 'Vui lòng đăng nhập để truy cập'
            ]
        ]);
    }

    public function courses()
    {
        return $this->renderDashboardPage('Courses');
    }

    public function instructors()
    {
        return $this->renderDashboardPage('Instructors');
    }

    public function wishlists()
    {
        return $this->renderDashboardPage('Wishlists');
    }

    public function purchaseHistories()
    {
        return $this->renderDashboardPage('PurchaseHistories');
    }

    public function settings()
    {
        return $this->renderDashboardPage('Settings');
    }

    public function settingUpdate(Request $request)
    {
        dd($request);
    }
}
