<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\CssSelector\Node\FunctionNode;

class AdminController extends Controller
{
    public function index(){
        return Inertia::render('CMS/Home', 
        [
            'title' => 'CMS Admin'
        ]);
    }

    public function actor(){
        $actor = DB::table('actors')->join('countries', 'actors.id_country', '=', 'countries.id_country')
        ->select('actors.*', 'countries.name_country as country')
        ->orderBy('actors.updated_at', 'desc')
        ->get();
        return Inertia::render('CMS/Actor', 
        [
            'title' => 'CMS Actor',
            'actors' => $actor
        ]);
    }

    public function country()
    {
        // Mengambil data negara dari tabel 'countries'
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

    public Function awards()
    {
        $awards = DB::table('awards')
        ->select('awards.*')
        ->orderBy('awards.created_at', 'asc')
        ->get();
        return Inertia::render('CMS/Awards', 
        [
            'title' => 'CMS Awards',
            'awards' => $awards
        ]);
    }
}