<?php

use App\Http\Controllers\BusinessRegisterController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CustomerRegisterController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EmailCheckController;
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

    Route::get('register/customer', [CustomerRegisterController::class, 'show'])->name('show-register-customer');
    Route::post('register/customer', [CustomerRegisterController::class, 'register'])->name('post-register-customer');
    Route::post('check-email', [EmailCheckController::class, 'checkEmail'])->name('check-email');
    Route::post('validate-personal', [BusinessRegisterController::class, 'validatePersonalDetails'])->name('validate-personal');


});

Route::middleware('auth')->group(function () {
    Route::get('dashboard', [DashboardController::class, 'show'])->name('show-dashboard');
});
