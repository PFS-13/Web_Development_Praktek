<?php

namespace App\Http\Controllers;

use App\Http\Resources\MovieCollection;
use Inertia\Inertia;
use App\Models\Movie;
use Illuminate\Http\Request;

class DetailMovieController extends Controller
{
    public function index(){
        $movies = new MovieCollection(Movie::paginate(10));
        return Inertia::render('Search', [
            'title' => 'Search Movie Hub',
            'movies' => $movies,
        ]);
    }
}
