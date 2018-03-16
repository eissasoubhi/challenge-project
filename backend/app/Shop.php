<?php

namespace App;

use App\HfShopsApp\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;
use App\HfShopsApp\Favorite\Favoritable;
use App\HfShopsApp\Dislike\Dislikeable;
use App\HfShopsApp\Distance\HasDistance;

class Shop extends Model
{
    use Favoritable, Filterable, HasDistance, Dislikeable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];
}
