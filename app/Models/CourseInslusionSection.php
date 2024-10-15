<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseInslusionSection extends Model
{
    use HasFactory;

    protected $fillable = [
        'is_selected',
        'course_id',
        'inslusion_id'
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function couseInslusion()
    {
        return $this->belongsTo(CourseInslusion::class);
    }
}
