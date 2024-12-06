<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{

    public function index(){
        if (!Auth::check()) {
            return redirect('/')->with('error', 'Access denied. Only admins are allowed.');
        }else {
            $user = Auth::user();
            if ($user->role !== "admin") {
                return redirect('/')->with('error', 'Access denied. Only admins are allowed.');
            }
        }
        return Inertia::render('CMS/Home', 
        [
            'title' => 'CMS Home'
        ]);
    }

    public function input_movie(){
        if (!Auth::check()) {
            return redirect('/')->with('error', 'Access denied. Only admins are allowed.');
        }
        return Inertia::render('CMS/InputMovie', 
        [
            'title' => 'CMS Input Movie'
        ]);
    }
    public function update_movie(Request $request){
        if (!Auth::check()) {
            return redirect('/')->with('error', 'Access denied. Only admins are allowed.');
        }else {
            $user = Auth::user();
            if ($user->role !== "admin") {
                return redirect('/')->with('error', 'Access denied. Only admins are allowed.');
            }
        }
        $id = $request->id_movies;
        $movie = DB::table('movies')
        ->where('id_movies', $id)
        ->get();

        $genres = DB::table('movie_genres')
        ->where('id_movies', $id)
        ->pluck('id_genre')
        ->toArray();
        $actors = DB::table('movie_actors')
        ->where('id_movies', $id)
        ->pluck('id_actor')
        ->toArray();
        $awards = DB::table('movie_awards')
        ->where('id_movies', $id)
        ->pluck('id_award')
        ->toArray();


        return Inertia::render('CMS/UpdateMovie', 
        [
            'title' => 'CMS Update Movie',
            'movie' => $movie,
            'genres' => $genres,
            'actors' => $actors,
            'awards' => $awards,
        ]);
    }

    public function awards(){
        if (!Auth::check()) {
            return redirect('/')->with('error', 'Access denied. Only admins are allowed.');
        }else {
            $user = Auth::user();   
            if ($user->role !== "admin") {
                return redirect('/')->with('error', 'Access denied. Only admins are allowed.');
            }
        }

        return Inertia::render('CMS/Awards', 
        [
            'title' => 'CMS Awards'
        ]);
    }
       
    public function movies(Request $request){
        if (!Auth::check()) {
            return redirect('/')->with('error', 'Access denied. Only admins are allowed.');
        }else {
            $user = Auth::user();
            if ($user->role !== "admin") {
                return redirect('/')->with('error', 'Access denied. Only admins are allowed.');
            }
        }
        $search = $request->input('query');
        $reset = false;
        if($search) {
            $movies = DB::table('movies')
    ->select(
        'movies.*',
        'countries.name_country',
        DB::raw('STRING_AGG(DISTINCT genres.genre, \', \') AS genres'),
            DB::raw('STRING_AGG(DISTINCT actors.actor_name, \', \') AS actors')
    )
    ->whereRaw('LOWER(movies.title) LIKE ?',['%' . strtolower($search) . '%'])
    ->leftJoin(DB::raw('countries'), 'movies.id_country', '=', 'countries.id_country')
        ->leftJoin(DB::raw('movie_genres'), 'movies.id_movies', '=', 'movie_genres.id_movies')
        ->leftJoin(DB::raw('genres'), 'movie_genres.id_genre', '=', 'genres.id_genre')
        ->leftJoin(DB::raw('movie_actors'), 'movies.id_movies', '=', 'movie_actors.id_movies')
        ->leftJoin(DB::raw('actors'), 'movie_actors.id_actor', '=', 'actors.id_actor')
    ->groupBy('movies.id_movies', 'movies.title', 'movies.synopsis', 'countries.name_country')
    ->get();
        
        $reset = true;
        } else {
        $movies = DB::table('movies')
        ->select(
            'movies.*',
            'countries.name_country as country',
            DB::raw('STRING_AGG(DISTINCT genres.genre, \', \') AS genres'),
            DB::raw('STRING_AGG(DISTINCT actors.actor_name, \', \') AS actors')
        )->leftJoin(DB::raw('countries'), 'movies.id_country', '=', 'countries.id_country')
        ->leftJoin(DB::raw('movie_genres'), 'movies.id_movies', '=', 'movie_genres.id_movies')
        ->leftJoin(DB::raw('genres'), 'movie_genres.id_genre', '=', 'genres.id_genre')
        ->leftJoin(DB::raw('movie_actors'), 'movies.id_movies', '=', 'movie_actors.id_movies')
        ->leftJoin(DB::raw('actors'), 'movie_actors.id_actor', '=', 'actors.id_actor')
        ->groupBy('movies.id_movies', 'movies.title', 'movies.synopsis', 'countries.name_country')
        ->orderBy('movies.updated_at', 'desc')
        ->get();

        }
        return Inertia::render('CMS/Movies', 
        [
            'title' => 'CMS Movies',
            'movies' => $movies,
            'reset' => $reset
        ]);
    }


    public function actor(Request $request){
        // if (!Auth::check()) {
        //     return redirect('/')->with('error', 'Access denied. Only admins are allowed.');
        // }else {
        //     $user = Auth::user();
        //     if ($user->role !== "admin") {
        //         return redirect('/')->with('error', 'Access denied. Only admins are allowed.');
        //     }
        // }
        $search = $request->input('query');
        $reset = false;
        if($search) {
            $actor = DB::table('actors')->leftJoin(DB::raw('countries'), 'actors.id_country', '=', 'countries.id_country')
        ->select('actors.*', 'countries.name_country as country')->
        whereRaw('LOWER(actors.actor_name) LIKE ?',['%' . strtolower($search) . '%'])
        ->orderBy('actors.updated_at', 'desc')
        ->get();
        $reset = true;
        } else {
            $actor = DB::table('actors')->leftJoin(DB::raw('countries'), 'actors.id_country', '=', 'countries.id_country')
        ->select('actors.*', 'countries.name_country as country')
        ->orderBy('actors.updated_at', 'desc')
        ->get();
        }
        
        return Inertia::render('CMS/Actor', 
        [
            'title' => 'CMS Actor',
            'actors' => $actor,
            'reset' => $reset
        ]);
    }

    public function country()
    {
        if (!Auth::check()) {
            return redirect('/')->with('error', 'Access denied. Only admins are allowed.');
        }else {
            $user = Auth::user();
            if ($user->role !== "admin") {
                return redirect('/')->with('error', 'Access denied. Only admins are allowed.');
            }
        }
        $countries = DB::table('countries')
            ->select('countries.*')
            ->orderBy('countries.updated_at', 'asc')
            ->get();

        return Inertia::render('CMS/Countries', 
        [
            'title' => 'CMS Country',
            'countries' => $countries
        ]);
    }
 

    public Function genre()
    {
        if (!Auth::check()) {
            return redirect('/')->with('error', 'Access denied. Only admins are allowed.');
        }else {
            $user = Auth::user();
            if ($user->role !== "admin") {
                return redirect('/')->with('error', 'Access denied. Only admins are allowed.');
            }
        }
        $genre = DB::table('genres')
        ->select('genres.*')
        ->orderBy('genres.created_at', 'asc')
        ->get();
        return Inertia::render('CMS/Genre', 
        [
            'title' => 'CMS Genre',
            'genres' => $genre
        ]);
}

public Function comments()
    {
        if (!Auth::check()) {
            return redirect('/')->with('error', 'Access denied. Only admins are allowed.');
        }else {
            $user = Auth::user();
            if ($user->role !== "admin") {
                return redirect('/')->with('error', 'Access denied. Only admins are allowed.');
            }
        }
        $comments = DB::table('comments')
        ->select('comments.*')
        ->orderBy('comments.created_at', 'asc')
        ->get();
        return Inertia::render('CMS/Comment', 
        [
            'title' => 'CMS Comments',
            'comments' => $comments
        ]);

        
}

public Function users()
    {
        if (!Auth::check()) {
            return redirect('/')->with('error', 'Access denied. Only admins are allowed.');
        }else {
            $user = Auth::user();
            if ($user->role !== "admin") {
                return redirect('/')->with('error', 'Access denied. Only admins are allowed.');
            }
        }
        $comments = DB::table('users')
        ->select('users.*')
        ->orderBy('users.created_at', 'asc')
        ->get();
        return Inertia::render('CMS/User', 
        [
            'title' => 'CMS User',
            'user' => $user
        ]);
}

}