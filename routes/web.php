<?php

use App\Http\Controllers\BusinessRegisterController;
use App\Http\Controllers\CustomerRegisterController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia('Home');
})->name('home');

Route::middleware('guest')->group(function () {
    Route::get('login', function () {
        return Inertia::render('Login');
    })->name('login');
    Route::post('login', [AuthController::class, 'login'])->name('post-login');
    Route::post('logout', [AuthController::class, 'logout'])->name('post-logout');
    Route::get('register/business', function () {
        return Inertia::render('register/BusinessRegister');
    })->name('show-register-business');
    Route::post('register', [BusinessRegisterController::class, 'register'])->name('post-register');

    Route::get('forgot-pass', function () {
        return Inertia::render('Login');
    })->name('forgot-pass');

    Route::get('register/customer', [CustomerRegisterController::class, 'show'])->name('show-register-customer');
    Route::post('register/customer', [CustomerRegisterController::class, 'register'])->name('post-register-customer');
    Route::post('validate-personal', [BusinessRegisterController::class, 'validatePersonalDetails'])->name('validate-personal');
    Route::post('validate-business', [BusinessRegisterController::class, 'validateBusinessDetails'])->name('validate-business');


});

Route::middleware('auth')->group(function () {
    Route::get('dashboard', [DashboardController::class, 'show'])->name('show-dashboard');
});
