<?php

use App\Http\Middleware\RoleMiddleware;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\SignUpController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
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

Route::post('comment', [CommentController::class, 'store'])->name('insert-comment');
Route::post('/login', [SignUpController::class, 'check'])->name('login');
Route::post('/login/check', [SignUpController::class, 'check']);

Route::get('/admin', [AdminController::class, 'index'])->name('admin.dashboard');

// Route::get('/', [UserController::class, 'index'])->name('user.dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
