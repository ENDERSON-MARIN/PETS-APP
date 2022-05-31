<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\Tag;
use App\Models\Statu;

class Pet extends Model
{
    use HasFactory;

    protected $table='pets';
    protected $guarded = [''];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function tags()
    {
        return $this->belongsTo(Tag::class);
    }

    public function status()
    {
        return $this->belongsTo(Statu::class);
    }

}
