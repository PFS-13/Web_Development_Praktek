<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Stmt\Echo_;

class CommentController extends Controller
{
    public function store(Request $request):RedirectResponse
    
    {
        $request->validate([
            'rating' => 'required|max:255',
            'comment' => 'required|max:150',
            'id_movie' => 'required',
            'id_user'=> 'required'
        ]);

        DB::table('comments')->insert([
            'rating' => $request->rating,
            'comment' => $request->comment,
            'id_movie' => $request->id_movie,
            'id_user' => $request->id_user
        ]);
        return redirect()->back();
    }

}
