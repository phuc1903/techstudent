<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    use HasFactory;

    protected $fillable = [
        'module_id',
        'title',
        'description',
        'order',
        'content_type',
        'content_url',
        'duration',
        'slug'
    ];

    public function module()
    {
        return $this->belongsTo(Module::class);
    }

    public function videos()
    {
        return $this->hasMany(Video::class);
    }

}
