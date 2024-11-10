<?php

namespace App\Http\Controllers;

use App\Http\Resources\MovieCollection;
use Inertia\Inertia;
use App\Models\Movie;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;


class SearchController extends Controller
{
    public function index(Request $request){
        $input = '';
        $search =  $request->input('query');
        $country = $request->input('country');
        $genre = $request->input('genre');
        if($genre){
            var_dump($genre);exit();
        }
        if($country){
            $input = $country;
            $movies = new MovieCollection(
            Movie::join('countries', 'movies.id_country', '=', 'countries.id_country')
                    ->select([
                        'movies.*',
                        'countries.name_country as country'
                    ])
                    ->where('countries.name_country', $country)
                    ->paginate(10)
            );
        }

        if ($search ) {
            $input = $search;
            $movies = new MovieCollection(Movie::join('countries', 'movies.id_country', '=', 'countries.id_country')->select('movies.*', 'countries.name_country as country')->whereRaw('LOWER(title) LIKE ?',['%' . strtolower($search) . '%'])->paginate(10));
        }
        if(!$country && !$search) {

        $movies = new MovieCollection(Movie::join('countries', 'movies.id_country', '=', 'countries.id_country')
               ->select('movies.*', 'countries.name_country as country')
               ->paginate(10));
        }
        return Inertia::render('Search', [
            'title' => 'Search Movie Hub',
            'movies' => $movies,
            'input' => $input,
            'country' => $country
        ]);
    }
}
