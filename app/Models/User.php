<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'bio',
        'avatar',
        'slug'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function enrollments()
    {
        return $this->hasMany(Enrollment::class);
    }

    public function ratings()
    {
        return $this->hasMany(CourseRating::class);
    }

    public function favorites()
    {
        return $this->hasMany(Favorite::class);
    }

    public function conversations()
    {
        return $this->belongsToMany(Conversation::class, 'conversation_users');
    }

    public function lessonsProgress()
    {
        return $this->hasMany(UserLesson::class);
    }

    public function quizzesProgress()
    {
        return $this->hasMany(UserQuiz::class);
    }

    public function videoProgress()
    {
        return $this->hasMany(UserVideoProgress::class);
    }
}
