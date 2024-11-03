<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Award extends Model
{
    use HasFactory;

    protected $table = 'awards';
    protected $primaryKey = 'id_awards';
    
    protected $fillable = [
        'awards',
        'year',
        'id_movies'
    ];

    // Relasi Many-to-One dengan Movie
    public function movie()
    {
        return $this->belongsTo(Movie::class, 'id_movies', 'id_movies');
    }
}
