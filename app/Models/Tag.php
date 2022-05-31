<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pet;


class Tag extends Model
{
    use HasFactory;

    protected $table='tags';
    protected $guarded = [''];

    public function pets()
    {
        return $this->hasMany(Pet::class);
    }
}
