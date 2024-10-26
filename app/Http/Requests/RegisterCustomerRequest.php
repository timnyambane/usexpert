<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterCustomerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string',
            'full_name' => [
                'required',
                'string',
                'regex:/^\S+ \S+$/',
            ],
            'email' => 'required|email|unique:users,email',
            'phone' => 'required|unique:users,phone',
            'password' => [
                'required',
                'same:confirmPassword',
            ],
            'confirmPassword' => [
                'required',
            ],
        ];
    }

    public function messages()
    {
        return [
            'full_name.required' => 'Full name required',
            'full_name.regex' => 'Full name must be in first and last name order',
        ];
    }
}
