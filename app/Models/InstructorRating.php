<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InstructorRating extends Model
{
    use HasFactory;

    protected $fillable = [
        'value',
        'feedback',
        'instructor_id',
        'user_id'
    ];

    public function instructor()
    {
        return $this->belongsTo(Instructor::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
