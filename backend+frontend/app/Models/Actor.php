<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actor extends Model
{
    protected $table = 'actors'; // Nama tabel di database

    public function movies()
    {
        return $this->belongsToMany(Movie::class, 'movie_actors', 'id_actor', 'id_movies');
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }
}