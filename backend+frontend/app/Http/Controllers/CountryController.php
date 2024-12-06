<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CountryController extends Controller
{


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
            'id_country' => 'required', 
            'name_country' => 'required'
        ]);

        $country = Country::findOrFail($request->id_country); 
        $country->update([
            'name_country' => $request->name_country
        ]);

        return redirect()->back()->with('message', 'Data country berhasil diupdate');
    }

    public function destroy(Request $request)
    {
        $request->validate([
            'id_country' => 'required' 
        ]);

        Country::destroy($request->id_country); 
        return redirect()->back()->with('message', 'Data country berhasil dihapus');
    }
}
