<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
class SignUpController extends Controller
{
    public function index(){
        return Inertia::render('Login', [
            'title' => 'Login'
        ]);
    }

    public function signin() {
        return Inertia::render('SignIn', [
            'title' => 'Sign In'
        ]);
    }
}
