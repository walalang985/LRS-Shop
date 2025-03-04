<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class inventory extends Model
{
    use HasFactory;

    protected $table = "inventory";
    protected $fillable = ['item', 'category','price','stock','image_link'];
}
