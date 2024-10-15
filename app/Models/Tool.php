<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tool extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'logo',
        'slug'
    ];

    public function courses()
    {
        return $this->belongsToMany(Course::class, 'course_tools');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_tools');
    }
}
