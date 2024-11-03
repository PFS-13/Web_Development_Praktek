<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    public function handle($request, Closure $next, $role)
    {
        if (!Auth::check()) {
            return redirect('/login'); // Redirect jika belum login
        }

        if (Auth::user()->role !== $role) {
            return redirect('/'); // Redirect jika role tidak sesuai
        }

        return $next($request);
    }
}
