<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pet;


class Statu extends Model
{
    use HasFactory;

    protected $table='status';
    protected $guarded = [''];

    public function pets()
    {
        return $this->hasMany(Pet::class);
    }
}
