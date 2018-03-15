<?php

namespace App\HfShopsApp\Favorite;

use App\User;

trait Favoritable
{
    /**
     * Check if the authenticated user has favorited the shop.
     * We make use of lazy loading if the relationship is not already loaded.
     *
     * @return bool
     */
    public function getFavoritedAttribute()
    {
        if (! auth()->check()) {
            return false;
        }

        if (! $this->relationLoaded('favorited')) {
            $this->load(['favorited' => function ($query) {
                $query->where('user_id', auth()->id());
            }]);
        }

        $favorited = $this->getRelation('favorited');

        if (! empty($favorited) && $favorited->contains('id', auth()->id())) {
            return true;
        }

        return false;
    }

    /**
     * Get the users that favorited the shop.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function favorited()
    {
        return $this->belongsToMany(User::class, 'favorites', 'shop_id', 'user_id')->withTimestamps();
    }
}