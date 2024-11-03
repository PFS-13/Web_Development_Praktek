<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    protected $table = 'movies';
    protected $primaryKey = 'id_movies';
    
    protected $fillable = [
        'title',
        'alternative_title',
        'link_posters',
        'link_trailers',
        'year',
        'synopsis',
        'availability',
        'rating',
        'status',
        'id_country'
    ];

    // Relasi Many-to-One dengan Country
    public function country()
    {
        return $this->belongsTo(Country::class, 'id_country', 'id_country');
    }

    // Relasi Many-to-Many dengan Actor
    public function actors()
    {
        return $this->belongsToMany(Actor::class, 'movie_actor', 'id_movies', 'id_actor');
    }

    // Relasi Many-to-Many dengan Genre
    public function genres()
    {
        return $this->belongsToMany(Genre::class, 'movie_genre', 'id_movies', 'id_genre');
    }

    // Relasi One-to-Many dengan Comment
    public function comments()
    {
        return $this->hasMany(Comment::class, 'id_movies', 'id_movies');
    }

    // Relasi One-to-Many dengan Award
    public function awards()
    {
        return $this->hasMany(Award::class, 'id_movies', 'id_movies');
    }

    // Menghitung rata-rata rating dari komentar
    public function averageRating()
    {
        return $this->comments()->avg('rating');
    }
}
