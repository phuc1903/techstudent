<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    protected $fillable = [
        'lesson_id',
        'title',
        'description',
        'url',
        'order',
        'slug'
    ];

    public function lecture()
    {
        return $this->belongsTo(Lecture::class);
    }
}
