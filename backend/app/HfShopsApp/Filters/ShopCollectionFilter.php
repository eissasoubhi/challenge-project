<?php

namespace App\HfShopsApp\Filters;

use App\User;
use Illuminate\Http\Request;

class ShopCollectionFilter extends CollectionFilter
{
    /**
     * Sort by distance.
     * Get the list of shops sorted by distance
     *
     * @param $coordinates
     * @return \Illuminate\Support\Collection
     */
    protected function nearby($user_coordinates)
    {
        $user_place = explode(',', $user_coordinates);

        if (count($user_place) < 2)
            return;

        $this->collection->transform(function ($shop) use ($user_place) {
            $shop->setDistanceFrom($user_place);

            return $shop;
        });

        $this->collection = $this->collection->sortBy(function ($shop) {
            return $shop->distance_in_meters;
        })
        // reset keys
        ->values();

        return $this->collection;
    }
}