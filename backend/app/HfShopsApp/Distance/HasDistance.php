<?php

namespace App\HfShopsApp\Distance;

trait HasDistance
{
    /**
     * The latitude and longitude of the shop.
     *
     * @return Array
     */
    public function getCoordinatesAttribute()
    {
        $coordinates = explode(',', $this->attributes['location_coordinates']);

        return [
            count($coordinates) > 0 ? $coordinates[0] : null,
            count($coordinates) > 1 ? $coordinates[1] : null
        ];
    }

    /**
     * round the distance and add the miles unit at the end
     *
     * @return String|null
     */
    public function getDistanceAttribute()
    {
        if (! isset($this->attributes['distance']))
            return null;

        return $this->distance = round($this->attributes['distance'], 2). ' mi';
    }
}