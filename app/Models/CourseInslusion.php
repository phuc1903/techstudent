<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseInslusion extends Model
{
    use HasFactory;

    protected $fillable = [
        'inslusion'
    ];


    public function courses()
    {
        // return $this->hasMany(Course)
    }
}
