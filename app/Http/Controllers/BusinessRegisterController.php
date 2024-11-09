<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterBusinessRequest;
use App\Http\Requests\RegisterCustomerRequest;
use App\Models\Business;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class BusinessRegisterController extends Controller
{

    public function validatePersonalDetails(RegisterCustomerRequest $request)
    {
        $data = $request->validated();
        session()->flash('success', 'Your personal details have been successfully validated.');
    }

    public function validateBusinessDetails(RegisterBusinessRequest $request)
    {
        $data = $request->validated();
        session()->flash('success', 'Your personal details have been successfully validated.');
    }

    public function register(Request $request)
    {
        $personalData = $request['personal'];
        $businessData = $request['business'];

        if (!empty($personalData['full_name'])) {
            $nameParts = explode(' ', trim($personalData['full_name']), 2);
            $firstName = $nameParts[0];
            $lastName = $nameParts[1] ?? '';
        } else {
            $firstName = '';
            $lastName = '';
        }

        try {
            $user = User::create([
                'first_name' => $firstName,
                'last_name' => $lastName,
                'email' => $personalData['email'],
                'password' => $personalData['password'],
                'phone' => $personalData['phone'],
                'role' => config('constants.accountType.business')
            ]);

            $business = Business::create([
                'user_id' => $user->id,
                'business_name' => $businessData['business_name'],
                'location' => $businessData['location'],
                'work_category' => $businessData['work_category'],
            ]);

        } catch (\Exception $e) {
            Log::error('Error creating business', [$e->getMessage()]);
        }

    }
}
