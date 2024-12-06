<?php

namespace App\Http\Controllers;

use App\Models\Awards;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;



class AwardsController extends Controller
{

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'country' => 'required',
            'award' => 'required',
            'year' => 'required'        ]);
        DB::table('awards')->insert([
            'id_country' => $request->country,
            'awards' => $request->award,
            'year' => $request->year,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);
        return redirect()->back()->with('message', 'Data award "' .  $request->award . '" berhasil ditambah');
    }

    /**
     * Display the specified resource.
     */
    public function update(Request $request)
    {
        $request->validate([
            'idAward' => 'required',
            'country' => 'required',
            'year' => 'required',
            'award' => 'required'
        ]);

    DB::table('awards')
    ->where('id_award', $request->idAward)->update([
        'id_country' => $request->country,
        'awards' => $request->award,
        'year' => $request->year,
        'updated_at' => date('Y-m-d H:i:s')
    ]);
    return redirect()->back()->with('message', 'Data award "' .   $request->award  .  '" berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $id =  $request->idAward;
        $request->validate([
            'idAward' => 'required','nameAward' => 'required'    ]);
        DB::table('awards')->where('id_award', $id)->delete();
        return redirect()->back()->with('message', 'Data award "' .   $request->nameAward  .  '" berhasil dihapus');
    }
}
