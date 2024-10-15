<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'parent_id',
        'slug'
    ];

    public function courses()
    {
        return $this->belongsToMany(Course::class, 'course_categories');
    }

    public function tools()
    {
        return $this->belongsToMany(Tool::class, 'category_tools');
    }

    public function parentCategory()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    public function childCategories()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }
}
