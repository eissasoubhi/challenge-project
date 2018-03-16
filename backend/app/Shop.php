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

    public function getCoordinatesAttribute()
    {
        $coordinates = explode(',', $this->attributes['location_coordinates']);

        return [
            count($coordinates) > 0 ? $coordinates[0] : null,
            count($coordinates) > 1 ? $coordinates[1] : null
        ];
    }
}
