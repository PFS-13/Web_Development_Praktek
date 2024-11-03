<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class SignUpController extends Controller
{
    public function index() {
        return Inertia::render('Login', [
            'title' => 'Login'
        ]);
    }

    public function signup() {
        return Inertia::render('SignUp', [
            'title' => 'Sign Up'
        ]);
    }

    public function check(Request $request) {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:8'
        ]);

        // Cari user berdasarkan email
        $user = DB::table('user_account')->where('email', $request->email)->first();

        if ($user && Hash::check($request->password, $user->password)) {
            // Login menggunakan ID user
            Auth::loginUsingId($user->id);

            // Redirect berdasarkan role user
            if ($user->role === 'admin') {
                return redirect('/admin'); // Arahkan admin ke halaman CMS
            }

            return redirect('/user'); // Arahkan user biasa ke halaman utama
        } else {
            // Jika gagal, kembalikan ke halaman login dengan pesan error
            return redirect()->back()->withErrors(['email' => 'Email atau password salah']);
        }
    }
}
