<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    protected $fillable = [
        'user_id',
        'business_name',
        'work_category',
        'services',
        'location'
    ];
}
