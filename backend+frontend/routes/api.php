<?php

use App\Http\Controllers\SearchController;
use App\Models\Actor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Country;
use App\Models\Genre;
use App\Models\Comment;
use Illuminate\Support\Facades\DB;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// Route untuk mendapatkan semua negara
Route::get('/countries', function () {
    return Country::all(); // Mengembalikan semua data negara
});

Route::get('/actors', function () {
    // return Actor::with('country')->get(); // Mengembalikan semua data actor
    return DB::table('actors')->join('countries', 'actors.id_country', '=', 'countries.id_country')
    ->select('actors.*', 'countries.name_country as country')
    ->orderBy('actors.created_at', 'desc')
    ->get();
});


// Route untuk mendapatkan semua genre
Route::get('/genres', function () {
    return Genre::orderBy('genre', 'asc')->get(); // Mengembalikan semua data genre
});

Route::get('/comments', function () {
    return Comment::join('users', 'comments.id_user', '=', "users.id")
    ->join('movies', 'comments.id_movie','=', 'movies.id_movies')->
    select('comments.*', 'users.name as name', 'movies.title as title')->get(); // Mengembalikan semua data genre
});

Route::get('/actors', function () {
    return Actor::orderBy('actor_name', 'asc')->get(); // Mengembalikan semua data genre
});

Route::get('/availability', function () {
    return DB::table('availability')->get();
});

Route::get('/users', function () {
    return DB::table('users')->get();
});

Route::get('/awards', function () {
    return DB::table('awards')->join('countries', 'awards.id_country', '=', 'countries.id_country')
    ->select('awards.*', 'countries.name_country as country')
    ->orderBy('awards.updated_at', 'desc')
    ->get();
});



Route::get('/movies', [SearchController::class, 'index']);
