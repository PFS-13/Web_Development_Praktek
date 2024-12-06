<?php

use App\Http\Controllers\ActorController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AwardsController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\SignUpController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\ProfileController;
use App\Models\Country;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [MovieController::class, 'index'])->name('home');
Route::get('/japan', [MovieController::class, 'japan'])->name('japan');
Route::get('/korea', [MovieController::class, 'korea'])->name('korea');
Route::get('/us', [MovieController::class, 'us'])->name('us');

Route::get('/search', [SearchController::class, 'index']);

Route::get('/login', [SignUpController::class, 'index']);
Route::get('/signup', [SignUpController::class, 'signup'])->name('login.signup');
Route::get('/movie/detail', [MovieController::class, 'detail'])->name('movie.detail');

Route::post('/insert/comment', [CommentController::class, 'store'])->name('insert-comment');
Route::post('/login', [SignUpController::class, 'check'])->name('login');

Route::post('/login/check', [SignUpController::class, 'check']);
Route::get('/admin', [AdminController::class, 'index'])->name('admin.dashboard');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


// Front End Pages CMS 
Route::get('/admin', [AdminController::class, 'country'])->name('admin');
Route::get('/admin/countries', [AdminController::class, 'country'])->name('admin-countries');
Route::get('/admin/genres', [AdminController::class, 'genre'])->name('admin-genres');
Route::get('/admin/actors', [AdminController::class, 'actor'])->name('admin-actors');
Route::get('/admin/movies', [AdminController::class, 'movies'])->name('admin-movies');
Route::get('/admin/awards', [AdminController::class, 'awards'])->name('admin-awards');
Route::get('/admin/input_movie', [AdminController::class, 'input_movie'])->name('admin-input_movie');
Route::get('/admin/update_movie', [AdminController::class, 'update_movie'])->name('admin-update_movie');
Route::get('/admin/comments', [AdminController::class, 'comments'])->name('admin-comments');
Route::get('/admin/users', [AdminController::class, 'users'])->name('admin-users');

Route::get('/admin/availability', [AdminController::class, 'availability'])->name('admin-availability');


Route::post('/insert/awards', [AwardsController::class, 'store'])->name('insert-award');
Route::post('/delete/awards', [AwardsController::class, 'destroy'])->name('delete-award');
Route::post('/update/awards', [AwardsController::class, 'update'])->name('update-award');

Route::post('/insert/actors', [ActorController::class, 'store'])->name('insert-actor');
Route::post('/update/actors', [ActorController::class, 'update'])->name('update-actor');


// Delete
Route::post('actors', [ActorController::class, 'destroy'])->name('delete-actor');


Route::post('/insert/movie', [MovieController::class, 'store'])->name('insert-movie');
Route::post('/delete/movie', [MovieController::class, 'destroy'])->name('delete-movie');
Route::post('/update/movie', [MovieController::class, 'update'])->name('update-movie');


Route::post('/insert/countries', [CountryController::class, 'store'])->name('insert-country');
Route::post('/update/countries', [CountryController::class, 'update'])->name('update-country');
Route::post('/delete/countries', [CountryController::class, 'destroy'])->name('delete-country');

Route::post('/insert/genres', [GenreController::class, 'store'])->name('insert-genre');
Route::post('/update/genres', [GenreController::class, 'update'])->name('update-genre');
Route::post('/delete/genres', [GenreController::class, 'destroy'])->name('delete-genre');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
