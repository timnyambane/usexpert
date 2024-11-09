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

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function workCategory()
    {
        return $this->belongsTo(WorkCategory::class);
    }
    public function location()
    {
        return $this->belongsTo(Location::class);
    }

}
