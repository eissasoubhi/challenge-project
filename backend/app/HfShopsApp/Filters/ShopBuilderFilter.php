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

        $undisplayable_shops = $user->dislikes->filter(function ($shop) {
            return !$shop->isDisplayable();
        });

        $shopIds = $user ? $undisplayable_shops->pluck('id')->toArray() : [];

        return $this->builder->whereNotIn('id', $shopIds);
    }
}