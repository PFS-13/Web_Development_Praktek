<?php

namespace App\Http\Controllers;

use App\Models\Awards;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\RedirectResponse;

class AwardsController extends Controller
{
    public function index()
    {
        // Mengambil data awards beserta data country terkait
        $awards = Awards::with('country')->get();
        return response()->json($awards); // Mengembalikan data dengan country yang sudah dimuat
    }

    public function store(Request $request)
    {
        $request->validate([
            'awards' => 'required|string|max:255',
            'year' => 'required|integer',
            'id_country' => 'required|exists:countries,id_country'
        ]);

        Awards::create([
            'awards' => $request->awards,
            'year' => $request->year,
            'id_country' => $request->id_country
        ]);

        return redirect()->back()->with('message', 'Award successfully added.');
    }

    public function update(Request $request)
    {
        $request->validate([
            'id_awards' => 'required|exists:awards,id_awards',
            'awards' => 'required|string|max:255',
            'year' => 'required|integer',
            'id_country' => 'required|exists:countries,id_country'
        ]);

        $award = Awards::findOrFail($request->id_awards);
        $award->update([
            'awards' => $request->awards,
            'year' => $request->year,
            'id_country' => $request->id_country
        ]);

        return redirect()->back()->with('message', 'Award successfully updated.');
    }

    public function destroy(Request $request)
    {
        $request->validate([
            'id_awards' => 'required|exists:awards,id_awards'
        ]);

        Awards::destroy($request->id_awards);

        return redirect()->back()->with('message', 'Award successfully deleted.');
    }
}
