<?php

namespace App\Http\Controllers;

use App\Http\Resources\MovieCollection;
use Inertia\Inertia;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;


class MovieController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', 
        [
            'title' => 'Movie Hub',
        ]);
    }

    public function japan(){
        $input = '';
        $movies = new MovieCollection(Movie::join('countries', 'movies.id_country', '=', 'countries.id_country')
        ->select([
            'movies.*',
            'countries.name_country as country'
        ])
        ->where('countries.name_country', 'Japan')
        ->paginate(10));
        return Inertia::render('Search', [
            'title' => 'Japan Movie Hub',
            'movies' => $movies,
            'input' => $input
        ]);
    }

    public function us(){
        $input = '';
        $movies = new MovieCollection(Movie::join('countries', 'movies.id_country', '=', 'countries.id_country')
        ->select([
            'movies.*',
            'countries.name_country as country'
        ])
        ->where('countries.name_country', 'United States')
        ->paginate(10));
        
        return Inertia::render('Search', [
            'title' => 'Japan Movie Hub',
            'movies' => $movies,
            'input' => $input
        ]);
    }
    public function korea(){
        $input = '';
        $movies = new MovieCollection(Movie::join('countries', 'movies.id_country', '=', 'countries.id_country')
        ->select([
            'movies.*',
            'countries.name_country as country'
        ])
        ->where('countries.name_country', 'South Korea')
        ->paginate(10));
        
        return Inertia::render('Search', [
            'title' => 'Japan Movie Hub',
            'movies' => $movies,
            'input' => $input
        ]);
    }

    public function detail(Request $request)
    {
        if (!Auth::check()) {
            $user = "";    
        }else {
            $user = Auth::user();
        }
        $id = $request->id;
        $movie = DB::table('movies')
                    ->leftJoin('countries', 'movies.id_country', '=', 'countries.id_country')
                    ->leftJoin('movie_genres', 'movies.id_movies', '=', 'movie_genres.id_movies')
                    ->leftJoin('genres', 'movie_genres.id_genre', '=', 'genres.id_genre')
                    ->leftJoin('movie_actors', 'movies.id_movies', '=', 'movie_actors.id_movies')
                    ->leftJoin('actors', 'movie_actors.id_actor', '=', 'actors.id_actor')
                    ->where('movies.id_movies', $id)
                    ->select(
                        'movies.*',
                        'countries.name_country',
                        DB::raw('STRING_AGG(DISTINCT genres.genre, \', \') as genres'),
                    )
                    ->groupBy('movies.id_movies', 'countries.name_country')
                    ->first();

        $actor = DB::table('movie_actors')->leftJoin('actors', 'actors.id_actor', '=', 'movie_actors.id_actor')->
        where('movie_actors.id_movies', $id)->select('actors.*')->get();

        $comment = DB::table('comments') 
                ->join('movies', 'comments.id_movie', '=', 'movies.id_movies')  
                ->join('users', 'comments.id_user', '=','users.id')
                ->select('comments.*', 'users.name as name')->where('movies.id_movies', $id)->get();
        // Pastikan data ditemukan
        if (!$movie) {
            return response()->json(['message' => 'Movie not found'], 404);
        }

        return Inertia::render('Detail', [
            'myMovie' => $movie,
            'actors' => $actor,
            'comments' => $comment,
            'user' => $user
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         $request->validate([
            'filmName' => 'required|string|max:255',
            'alternateTitle' => 'nullable|string|max:255',
            'year' => 'required|integer',
            'country' => 'required',
            'synopsis' => 'string',
            'availabilitys' => 'array',
            'trailer' => 'string',
            'awards' => 'array',
            'genres' => 'array',
            'actors' => 'array',
        ]);
        $availabilitys = $request->input('availabilitys', []);
        $availabilityString = implode(', ', $availabilitys);
       
        $movie = Movie::create([
            'id_country' => $request->country,
            'title' => $request->filmName,
            'alternative_title' => $request->alternateTitle,
            'year' => $request->year,
            'synopsis' => $request->synopsis,
            'link_trailers' => $request->trailer,
            'link_posters' => $request->linkPoster,
            'availability' => $availabilityString,
            'approved' => 0,
            'created_at' =>date('Y-m-d H:i:s'),
            'updated_at' =>date('Y-m-d H:i:s')
        ]);

        $id = $movie->id_movies;
        $genres = $request->input('genres'); 
        foreach ($genres as $genreId) {
            DB::table('movie_genres')->insert([
                'id_movies' => $id,
                'id_genre' => $genreId,
            ]);
        }
        $actors = $request->input('actors');
        foreach ($actors as $actorId) {
            DB::table('movie_actors')->insert([
                'id_movies' => $id,
                'id_actor' => $actorId,
            ]);
        }
        $awards = $request->input('awards');
        foreach ($awards as $awardId) {
            DB::table('movie_awards')->insert([
                'id_movies' => $id,
                'id_award' => $awardId,
            ]);
        }
        return redirect()->route('admin-movies')->with('message', 'Data movie "' .   $request->filmName  .  '" berhasil dibuat');
    }

    /**
     * Display the specified resource.
     */
    public function show(Movie $movie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Movie $movie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Movie $movie)
    {
        $request->validate([
            'filmName' => 'required|string|max:255',
            'alternateTitle' => 'nullable|string|max:255',
            'year' => 'required|integer',
            'country' => 'required',
            'synopsis' => 'string',
            'availabilitys' => 'array',
            'trailer' => 'string'
        ]);
        $id = $request->id_movies;
        $movie = Movie::where('id_movies', $id)->update([
            'title' => $request->filmName,
            'alternative_title' => $request->alternateTitle,
            'year' => $request->year,
            'synopsis' => $request->synopsis,
            'link_trailers' => $request->trailer,
            'link_posters' => $request->linkPoster,
            'updated_at' => date('Y-m-d H:i:s') 
        ]);
        return redirect()->route('admin-movies')->with('message', 'Data movie "' .   $request->filmName  .  '" berhasil diupdate');

        

}

    public function destroy(Request $request)
    {
        $id =  $request->idMovies;
        $request->validate([
            'idMovies' => 'required','title' => 'required'    ]);
        DB::table('movie_genres')->where('id_movies', $id)->delete();
        DB::table('movie_actors')->where('id_movies', $id)->delete();
        DB::table('movies')->where('id_movies', $id)->delete();
        return redirect()->back()->with('message', 'Data movie "' .   $request->title  .  '" berhasil dihapus');
    }
}
