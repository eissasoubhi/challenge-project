<?php

namespace App\HfShopsApp\Filters;

use App\User;

class ShopBuilderFilter extends BuilderFilter
{
    /**
     * Filter by favorited username.
     * Get all the shops favorited by the user with given username.
     *
     * @param $username
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function favorited($username)
    {
        $user = User::whereUsername($username)->first();

        $shopIds = $user ? $user->favorites()->pluck('id')->toArray() : [];

        return $this->builder->whereIn('id', $shopIds);
    }

    /**
     * Exclude favorited by username.
     * Exclude all the shops favorited by the user with given username.
     *
     * @param $username
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function exceptfavorited($username)
    {
        $user = User::whereUsername($username)->first();

        $shopIds = $user ? $user->favorites()->pluck('id')->toArray() : [];

        return $this->builder->whereNotIn('id', $shopIds);
    }

    /**
     * Exclude favorited by username.
     * Exclude all the shops favorited by the user with given username.
     *
     * @param $username
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function exceptdisliked($username)
    {
        $user = User::whereUsername($username)->first();

        $undisplayable_shops = $user->dislikes->filter(function ($shop) {
            return !$shop->isDisplayable();
        });

        $shopIds = $user ? $undisplayable_shops->pluck('id')->toArray() : [];

        return $this->builder->whereNotIn('id', $shopIds);
    }
}