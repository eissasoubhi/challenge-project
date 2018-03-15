<?php

namespace App;

use App\HfShopsApp\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;
use App\HfShopsApp\Favorite\Favoritable;

class Shop extends Model
{
    use Favoritable, Filterable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];
}
