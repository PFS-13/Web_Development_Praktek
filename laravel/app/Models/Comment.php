<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $table = 'comments';
    protected $primaryKey = 'id_comment';
    
    protected $fillable = [
        'comment',
        'rating',
        'id_movies',
        'id_user'
    ];

    // Relasi Many-to-One dengan Movie
    public function movie()
    {
        return $this->belongsTo(Movie::class, 'id_movies', 'id_movies');
    }

    // Relasi Many-to-One dengan User
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user', 'id');
    }
}
