<?php

namespace App\HfShopsApp\Distance;

use App\Shop;

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
     * Set ditance in meters and in miles units.
     * Calculates the the distance from the given coordinates and the shop coordinates
     * and set it in distance_in_meters, distance_in_miles and distance attributes
     *
     * @param Array $coordinates
     * @return void
     */
    public function setDistanceFrom(array $coordinates)
    {
        $this->distance_in_meters = geo_distance(
            $coordinates[0], $coordinates[1],
            $this->coordinates[0], $this->coordinates[1]
        );

        $this->distance_in_miles = $this->distance_in_meters *  0.000621371;

        $this->distance = round($this->distance_in_miles, 2). ' mi';
    }
}