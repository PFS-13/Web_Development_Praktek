<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class SignUpController extends Controller
{
    public function index(){
        return Inertia::render('Login', [
            'title' => 'Login'
        ]);
    }

    public function signup() {
        return Inertia::render('SignUp', [
            'title' => 'Sign Up'
        ]);
    }

    public function check(Request $request){
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:3'
        ]);
        
        $user = DB::table('user_account')->where('email', $request->email_user)->first();
        if ($user) {
            // Verifikasi password
            if ($user->password === $request->password) {
                return response()->json([
                    'status' => 'success',
                    'message' => 'Login successful',
                    'user' => $user,
                ]);
            } else {
                return response()->json([
                    'status' => 'gagal',
                    'message' => 'Login successful',
                    'user' => $user,
                ]);
            }
        } else {
            return response()->json(['message' => 'Email tidak ditemukan!']);
        }
    }
}
