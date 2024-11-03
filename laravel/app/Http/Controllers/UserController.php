<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function index()
    {
        // Cek apakah user adalah admin
        if (Auth::user()->role !== 'admin') {
            return redirect('/'); // Redirect jika bukan admin
        }

        return Inertia::render('CMS/CMS_Pages/Home', [
            'title' => 'CMS Admin'
        ]);
    }
}
