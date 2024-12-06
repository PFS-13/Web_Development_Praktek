<?php

namespace App\Http\Controllers;

use App\Models\Actor;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;

class ActorController extends Controller
{
    public function __construct()
    {
        if (Auth::user()->role !== 'admin') {
            return redirect('/')->with('error', 'Access denied. Only admins are allowed.');
        }
    }
 
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
            'birth_date' => $request->birth,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);
        return redirect()->route('admin-actors')->with('message', 'Data actor "' .  $request->name . '" berhasil ditambah');
    }
    public function update(Request $request)
    {
        $request->validate([
            'idActor' => 'required',
            'country' => 'required',
            'name' => 'required',
            'link' => 'required'
        ]);
        DB::table('actors')
    ->where('id_actor', $request->idActor)->update([
        'id_country' => $request->country,
        'actor_name' => $request->name,
        'link_photo' => $request->link,
        'birth_date' => $request->birth,
        'updated_at' => date('Y-m-d H:i:s')
    ]);
    return redirect()->route('admin-actors')->with('message', 'Data actor "' .   $request->name  .  '" berhasil diupdate');        
    }

    public function destroy(Request $request)
    {
        $id =  $request->idActor;
        echo $request->nameActor;

        $request->validate([
            'idActor' => 'required','nameActor' => 'required'    ]);
        DB::table('actors')->where('id_actor', $id)->delete();
        return redirect()->route('admin-actors')->with('message', 'Data actor "' .   $request->nameActor  .  '" berhasil dihapus');
    }
    
}
