<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'subtitle',
        'description',
        'price',
        'is_free',
        'slug',
        'thumbnail',
        'trailer',
        'level'
    ];

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'course_categories');
    }

    public function tools()
    {
        return $this->belongsToMany(Tool::class, 'course_tools');
    }

    public function sections()
    {
        return $this->hasMany(Section::class);
    }

    public function ratings()
    {
        return $this->hasMany(CourseRating::class);
    }

    public function instructors()
    {
        return $this->belongsToMany(Instructor::class, 'course_instructors');
    }

    public function outcomes()
    {
        return $this->hasMany(CourseOutcome::class);
    }

    public function requirements()
    {
        return $this->hasMany(CourseRequirement::class);
    }

    public function audiences()
    {
        return $this->hasMany(CourseAudience::class);
    }

    public function comments()
    {
        return $this->hasMany(CourseComment::class);
    }

    public function enrollments()
    {
        return $this->hasMany(Enrollment::class);
    }

    public function orders()
    {
        return $this->hasMany(OrderDetail::class, 'course_id');
    }

    public function inclusionSections()
    {
        return $this->hasMany(CourseInslusionSection::class);
    }

    public function quizzes()
    {
        return $this->hasMany(Quiz::class);
    }
}
