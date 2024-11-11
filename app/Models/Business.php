<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Business extends Model
{
    protected $fillable = [
        'user_id',
        'business_name',
        'work_category_id',
        'location_id'
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

    public function services()
    {
        return $this->belongsToMany(Service::class);
    }

}
