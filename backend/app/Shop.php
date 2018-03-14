<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\HfShopsApp\Favorite\Favoritable;

class Shop extends Model
{
    use Favoritable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];
}
