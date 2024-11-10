<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Awards extends Model
{
    use HasFactory;

    protected $table = 'awards';
    protected $primaryKey = 'id_awards';
    
    protected $fillable = [
        'awards',
        'year',
        'id_country',
        'id_movies'
    ];

    // Relasi Many-to-One dengan Movie
    public function movie()
    {
        return $this->belongsTo(Movie::class, 'id_movies', 'id_movies');
    }

    // Relasi Many-to-One dengan Country
    public function country()
    {
        return $this->belongsTo(Country::class, 'id_country', 'id_country');
    }
}
