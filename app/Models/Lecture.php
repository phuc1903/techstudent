<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lecture extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'type',
        'lesson_id',
        'slug'
    ];

    public function lesson()
    {
        return $this->belongsTo(Lesson::class);
    }

    public function posts()
    {
        return $this->hasMany(LecturePost::class, 'lecture_id');
    } 
}
