<?php

namespace App\HfShopsApp\Favorite;

use App\User;

trait Favoritable
{

    /**
     * Get the users that favorited the shop.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function favorited()
    {
        return $this->belongsToMany(User::class, 'favorites', 'shop_id', 'user_id')->withTimestamps();
    }

    /**
     * Filter by favorited username.
     * Get all the shops favorited by the user with given username.
     *
     * @param $username
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFavoritedByUser($query, $username)
    {
        if (!$username) {
            return $query;
        }

        $user = User::whereUsername($username)->first();

        $shopIds = $user ? $user->favorites()->pluck('id')->toArray() : [];

        return $query->whereIn('id', $shopIds);
    }
}