<?php

namespace App\HfShopsApp\Filters;

use App\User;
use Illuminate\Http\Request;

class ShopCollectionFilter extends CollectionFilter
{
    /**
     * Filter by favorited username.
     * Get all the shops favorited by the user with given username.
     *
     * @param $username
     * @return \Illuminate\Support\Collection
     */
    protected function nearby($coordinates)
    {
        $coordinates_array = explode(',', $coordinates);

        if (count($coordinates_array) < 2)
            return;

        $this->collection->transform(function ($shop) use ($coordinates_array) {
            $shop->distance = geo_distance(
                $coordinates_array[0],
                $coordinates_array[1],
                $shop->coordinates[0],
                $shop->coordinates[1]
            );

            return $shop;
        });

        $this->collection = $this->collection->sortBy(function ($shop) {
            return $shop->distance;
        })
        // reset keys
        ->values();

        return $this->collection;
    }
}