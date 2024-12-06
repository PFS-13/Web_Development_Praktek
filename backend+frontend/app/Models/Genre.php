<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    use HasFactory;

    protected $table = 'genres';
    protected $primaryKey = 'id_genre';
    
    protected $fillable = [
        'genre'
    ];

    // Relasi Many-to-Many dengan Movie
    public function movies()
    {
        return $this->belongsToMany(Movie::class, 'movie_genre', 'id_genre', 'id_movies');
    }
}