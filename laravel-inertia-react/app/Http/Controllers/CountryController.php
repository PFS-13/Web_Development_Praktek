<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\RedirectResponse;

class CountryController extends Controller
{
    public function index()
    {
        $countries = Country::all(); // Mengambil semua data dari tabel countries
        return response()->json($countries);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name_country' => 'required'
        ]);

        Country::create([
            'name_country' => $request->name_country
        ]);

        return redirect()->back()->with('message', 'Data country berhasil ditambahkan');
    }

    public function update(Request $request)
    {
        $request->validate([
            'id_country' => 'required', // Gunakan id_country sesuai primary key di tabel
            'name_country' => 'required'
        ]);

        $country = Country::findOrFail($request->id_country); // Cari berdasarkan id_country
        $country->update([
            'name_country' => $request->name_country
        ]);

        return redirect()->back()->with('message', 'Data country berhasil diupdate');
    }

    public function destroy(Request $request)
    {
        $request->validate([
            'id_country' => 'required' // Pastikan menggunakan id_country
        ]);

        Country::destroy($request->id_country); // Hapus data berdasarkan id_country
        return redirect()->back()->with('message', 'Data country berhasil dihapus');
    }
}
