<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterCustomerRequest;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class CustomerRegisterController extends Controller
{
    public function show(): Response
    {
        return Inertia::render('register/CustomerRegister');
    }
    public function register(RegisterCustomerRequest $request)
    {
        $data = $request->validated();

        if (isset($data['full_name'])) {
            list($firstName, $lastName) = explode(' ', $data['full_name']);
        } else {
            $firstName = $request->get('firstName');
            $lastName = $request->get('lastName');
            $data['full_name'] = $firstName . ' ' . $lastName;
        }

        try {
            User::create([
                'first_name' => $firstName,
                'last_name' => $lastName,
                'email' => $data['email'],
                'password' => bcrypt($data['password']),
                'phone' => $data['phone'],
                'user_type' => config('constants.accountType.customer')
            ]);

            session()->flash('success', 'Account registered successfully.');

            return redirect()->route('login');

        } catch (Exception $e) {
            Log::error('Registration failed: ' . $e->getMessage());

            return redirect()->route('show-register-customer')
                ->with('error', 'Account creation failed. Please try again.');
        }
    }
}
