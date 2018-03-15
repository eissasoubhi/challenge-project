<?php

namespace App\HfShopsApp\Filters;

use App\User;

class ShopFilter extends Filter
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
}