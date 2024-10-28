<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia('Home');
})->name('home');

Route::middleware('guest')->group(function () {
    Route::get('login', function () {
        return Inertia::render('Login');
    })->name('login');

    Route::post('login', [LoginController::class, 'login'])->name('post-login');

    Route::get('register/business', function () {
        return Inertia::render('register/BusinessRegister');
    })->name('show-register-business');

    Route::get('forgot-pass', function () {
        return Inertia::render('Login');
    })->name('forgot-pass');

    Route::get('register/customer', [CustomerController::class, 'show'])->name('show-register-customer');
    Route::post('register/customer', [CustomerController::class, 'register'])->name('post-register-customer');
});

Route::middleware('auth')->group(function () {
    Route::get('dashboard', [DashboardController::class, 'show'])->name('show-dashboard');
});
