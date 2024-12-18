<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class WorkCategory extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['name'];

    public function services(): HasMany
    {
        return $this->hasMany(Service::class);
    }

    public function businesses()
    {
        $this->belongsToMany(Business::class);
    }

    public function jobPosts()
    {
        return $this->hasMany(JobPost::class);
    }

}
