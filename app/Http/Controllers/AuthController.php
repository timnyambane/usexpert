<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
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

        $request->session()->regenerate();

        // Set flash message and redirect
        session()->flash('success', 'You have successfully logged in!');
        return redirect()->route('show-dashboard');
    }


    public function logout(Request $request)
    {
        Auth::logout();

        // Invalidate the session and regenerate the CSRF token
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        // Set flash message and redirect
        session()->flash('success', 'You have successfully logged out!');
        return redirect()->route('show-dashboard');
    }
}
