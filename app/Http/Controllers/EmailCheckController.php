<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class EmailCheckController extends Controller
{
    public function checkEmail(Request $request)
    {
        $request->validate([
            'email' => 'required|email'
        ]);

        $emailExists = User::where('email', $request->email)->exists();

        if ($emailExists) {
            return response()->json([
                'errors' => [
                    'email' => 'This email is already registered'
                ]
            ], 422);
        }
        return response()->json([
            'message' => 'Email is available'
        ]);
    }
}
