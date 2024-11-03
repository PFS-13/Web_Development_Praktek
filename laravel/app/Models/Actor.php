<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actor extends Model
{
    use HasFactory;

    protected $table = 'actors';
    protected $primaryKey = 'id_actor';
    
    protected $fillable = [
        'actor_name',
        'link_photo',
        'id_country'
    ];

    // Relasi Many-to-One dengan Country
    public function country()
    {
        return $this->belongsTo(Country::class, 'id_country', 'id_country');
    }

    // Relasi Many-to-Many dengan Movie
    public function movies()
    {
        return $this->belongsToMany(Movie::class, 'movie_actor', 'id_actor', 'id_movies');
    }
}
