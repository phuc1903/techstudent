<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Models\Course;

class SingleCourseController extends Controller
{
    public function index(Course $course)
    {
        $courseFull = $course->load(['enrollments', 'categories', 'ratings', "ratings.user", 'instructors.user', 'instructors.ratings', 'tools', 'outcomes', 'requirements', 'comments', 'audiences', 'sections', 'sections.lessons', 'sections.lessons.lectures']);
        return inertia('UserPages/SingleCourse/Index', ['course' => $courseFull]);
    }
}
