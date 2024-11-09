<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Service extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['name', 'work_category_id'];

    public function workCategory(): BelongsTo
    {
        return $this->belongsTo(WorkCategory::class);
    }
}
