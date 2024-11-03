<?php

use App\Http\Controllers\SearchController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Country;
use App\Models\Genre;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// Route untuk mendapatkan semua negara
Route::get('/countries', function () {
    return Country::all(); // Mengembalikan semua data negara
});

// Route untuk mendapatkan semua genre
Route::get('/genres', function () {
    return Genre::orderBy('genre', 'asc')->get(); // Mengembalikan semua data genre
});

Route::get('/movies', [SearchController::class, 'index']);
