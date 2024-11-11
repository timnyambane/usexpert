<?php

namespace App\Http\Controllers;


use App\Models\Business;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function show()
    {
        $user = Auth::user();

        return Inertia::render('dashboard/Dashboard', compact('user'));
    }
}
