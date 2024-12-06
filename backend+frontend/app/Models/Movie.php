<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    
    protected $primaryKey = 'id_movies';     
    public $incrementing = true; 
    protected $keyType = 'int'; 

    protected $table = 'movies'; // Nama tabel di database

    protected $fillable = [
        'id_country', 'title', 'alternative_title', 'year', 'synopsis', 
        'link_trailers', 'link_posters', 'availability', 'created_at', 'updated_at'
    ];
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

