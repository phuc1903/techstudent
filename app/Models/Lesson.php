<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'desscription',
        'order',
        'content_url',
        'duration',
        'slug',
        'section_id',
        'type_id'
    ];

    public function section()
    {
        return $this->belongsTo(Section::class);
    }

    public function type()
    {
        return $this->belongsTo(Type::class);
    }

    public function lectures()
    {
        return $this->hasMany(Lecture::class, 'lesson_id');
    }

    public function resouces()
    {
        return $this->hasMany(Resource::class);
    }

}
