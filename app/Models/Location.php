<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'town',
        'state',
        'longitude',
        'latitude',
        'post_code'
    ];

    public function jobPosts()
    {
        return $this->hasMany(JobPost::class);
    }

}
