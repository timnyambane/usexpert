<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterBusinessRequest;
use App\Http\Requests\RegisterCustomerRequest;
use Inertia\Inertia;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

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
}
