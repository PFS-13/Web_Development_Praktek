<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

class GenreController extends Controller
{
    public function index()
    {
        $genres = Genre::all();
        return response()->json($genres);
    }

    public function store(Request $request)
    {
        $request->validate([
            'genre' => 'required|string|max:50'
        ]);

        Genre::create(['genre' => $request->genre]);

        return redirect()->back()->with('message', 'Genre berhasil ditambahkan');
    }

    public function update(Request $request)
    {
        $request->validate([
            'id_genre' => 'required',
            'genre' => 'required|string|max:50'
        ]);

        $genre = Genre::findOrFail($request->id_genre);
        $genre->update(['genre' => $request->genre]);

        return redirect()->back()->with('message', 'Genre berhasil diupdate');
    }

    public function destroy(Request $request)
    {
        $request->validate([
            'id_genre' => 'required'
        ]);

        Genre::destroy($request->id_genre);

        return redirect()->back()->with('message', 'Genre berhasil dihapus');
    }
}
