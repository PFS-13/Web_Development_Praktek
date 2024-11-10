<?php

namespace App\Http\Controllers;

use App\Models\Actor;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;



class ActorController extends Controller
{
 
    public function store(Request $request):RedirectResponse
    {
        $request->validate([
            'country' => 'required',
            'name' => 'required',
            'link' => 'required'        ]);
        DB::table('actors')->insert([
            'id_country' => $request->country,
            'actor_name' => $request->name,
            'link_photo' => $request->link,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);
        return redirect()->back()->with('message', 'Data actor <b>' .  $request->name . '</b> berhasil ditambah');
    }


    public function show(Actor $actor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Actor $actor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Actor $actor)
    {
        $request->validate([
            'idActor' => 'required',
            'country' => 'required',
            'name' => 'required',
            'link' => 'required'
        ]);

        DB::table('actors')
    ->where('id_actor', $request->idActor) // Ganti 'id' dengan kolom yang sesuai untuk mencari aktor, dan '$actorId' dengan ID aktor yang ingin di-update
    ->update([
        'id_country' => $request->country,
        'actor_name' => $request->name,
        'link_photo' => $request->link,
        'updated_at' => date('Y-m-d H:i:s')
    ]);
    return redirect()->back()->with('message', 'Data actor <b>' .   $request->name  .  '</b> berhasil diupdate');

        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $id =  $request->idActor;
        echo $request->nameActor;

        $request->validate([
            'idActor' => 'required','nameActor' => 'required'    ]);
        DB::table('actors')->where('id_actor', $id)->delete();
        return redirect()->back()->with('message', 'Data actor <b>' .   $request->nameActor  .  '</b> berhasil dihapus');
    }
}
