<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobPost extends Model
{
    protected $fillable = [
        'user_id',
        'location_id',
        'work_category_id',
        'service_id',
        'property_type',
        'urgency',
        'title',
        'desc',
        'type',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function location()
    {
        return $this->belongsTo(Location::class);
    }

    public function workCategory()
    {
        return $this->belongsTo(WorkCategory::class);
    }

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

}
