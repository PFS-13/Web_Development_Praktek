<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;

    protected $table = 'countries'; // Nama tabel di database
    protected $primaryKey = 'id_country';
    protected $fillable = ['name_country']; // Menambahkan atribut yang bisa diisi

    // Relasi ke movies (satu ke banyak)
    public function movies()
    {
        return $this->hasMany(Movie::class, 'id_country', 'id_country');
    }

    // Relasi ke actors (satu ke banyak)
    public function actors()
    {
        return $this->hasMany(Actor::class, 'id_country', 'id_country');
    }

    // Relasi ke awards (satu ke banyak)
    public function awards()
    {
        return $this->hasMany(Awards::class, 'id_country', 'id_country');
    }
}
