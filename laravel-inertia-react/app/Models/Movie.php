<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    protected $table = 'movies'; // Nama tabel di database

    public function genres()
    {
        return $this->belongsToMany(Genre::class, 'movie_genres', 'id_movies', 'id_genre');
    }

    public function actors()
    {
        return $this->belongsToMany(Actor::class, 'movie_actors', 'id_movies', 'id_actor');
    }

    public function country()
    {
        return $this->belongsTo(Country::class, 'id_country');
    }
}

