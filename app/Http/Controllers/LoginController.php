<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (!Auth::attempt($request->only('email', 'password'), $request->remember)) {
            throw ValidationException::withMessages([
                'email' => __('The provided credentials are incorrect')
            ]);
        }

        // return redirect()->intended('/dashboard');
        return Inertia::location(route('show-dashboard'));

    }
}
