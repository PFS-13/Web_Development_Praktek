<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;

    protected $table = 'countries';
    protected $primaryKey = 'id_country';
    
    protected $fillable = [
        'name_country'
    ];

    // Relasi One-to-Many dengan Actor
    public function actors()
    {
        return $this->hasMany(Actor::class, 'id_country', 'id_country');
    }

    // Relasi One-to-Many dengan Movie
    public function movies()
    {
        return $this->hasMany(Movie::class, 'id_country', 'id_country');
    }
}
