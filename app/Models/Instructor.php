<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Instructor extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'bio',
        'expertise',
        'social_links',
        'slug',
        'rating'
    ];

    public function courses()
    {
        return $this->belongsToMany(Course::class, 'course_instructors');
    }

    public function ratings()
    {
        return $this->hasMany(InstructorRating::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
