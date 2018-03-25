<?php

namespace App\HfShopsApp\Filters;

use App\User;

class ShopBuilderFilter extends BuilderFilter
{
    /**
     * Filter by favorited email.
     * Get all the shops favorited by the user with given email.
     *
     * @param $email
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function favorited($email)
    {
        $user = User::whereEmail($email)->first();

        $shopIds = $user ? $user->favorites()->pluck('id')->toArray() : [];

        return $this->builder->whereIn('id', $shopIds);
    }

    /**
     * Exclude favorited by email.
     * Exclude all the shops favorited by the user with given email.
     *
     * @param $email
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function exceptfavorited($email)
    {
        $user = User::whereEmail($email)->first();

        $shopIds = $user ? $user->favorites()->pluck('id')->toArray() : [];

        return $this->builder->whereNotIn('id', $shopIds);
    }

    /**
     * Exclude favorited by email.
     * Exclude all the shops favorited by the user with given email.
     *
     * @param $email
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function exceptdisliked($email)
    {
        $user = User::whereEmail($email)->first();

        $disliked_shops = $user->dislikes;

        $undisplayable_shops = $disliked_shops->filter(function ($shop) {
            return !$shop->isDisplayable();
        });

        $displayable_shops = $disliked_shops->filter(function ($shop) {
            return $shop->isDisplayable();
        });

        $displayable_shops->each(function ($shop) use ($user) {
            $user->undislike($shop);
        });

        $shopIds = $user ? $undisplayable_shops->pluck('id')->toArray() : [];

        return $this->builder->whereNotIn('id', $shopIds);
    }

    /**
     * Sort by distance.
     * Get the list of shops sorted by distance
     *
     * @param String $coordinates coordinates sparated by comma
     * @return \Illuminate\Support\Collection
     * @link https://stackoverflow.com/questions/4687312/querying-within-longitude-and-latitude-in-mysql
     */
    protected function nearby($user_coordinates)
    {
        $user_place = explode(',', $user_coordinates);

        if (count($user_place) < 2)
            return;

        $lat = $user_place[0];
        $lng = $user_place[1];

        // extract the latitude and the longitude of the current row from the location_coordinates field
        $shop_lat = 'SUBSTRING_INDEX(location_coordinates, ",", 1)';
        $shop_lng = 'SUBSTRING_INDEX(location_coordinates, ",", -1)';

        // calculate distance in miles.
        // To calculate by kilometers instead of miles, replace 3959 with 6371.
        return $this->builder
        ->select(\DB::raw('*, (
                3959 *
                ACOS(COS(RADIANS('.$lat.')) *
                COS(RADIANS('.$shop_lat.')) *
                COS(RADIANS('.$shop_lng.') -
                RADIANS('.$lng.')) + SIN(RADIANS('.$lat.')) *
                SIN(RADIANS('.$shop_lat.')))
            ) AS distance')
        )
        ->orderBy('distance');
    }
}