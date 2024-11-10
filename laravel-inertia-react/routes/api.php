<?php

use App\Http\Controllers\SearchController;
use App\Models\Actor;
use App\Models\Awards;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Country;
use App\Models\Genre;
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
    return Genre::all(); // Mengembalikan semua data genre
});

Route::get('/awards', function () {
    return Awards::all(); // Mengembalikan semua data awards
});

Route::get('/movies', [SearchController::class, 'index']);
