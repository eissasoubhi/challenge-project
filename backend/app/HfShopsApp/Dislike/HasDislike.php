<?php

namespace App\HfShopsApp\Dislike;

use App\Shop;

trait HasDislike
{
    /**
     * Dislike the given shop.
     *
     * @param Shop $shop
     * @return mixed
     */
    public function dislike(Shop $shop)
    {
        if (! $this->hasDisliked($shop))
        {
            return $this->dislikes()->attach($shop);
        }
    }

    /**
     * Get the shops disliked by the user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function dislikes()
    {
        return $this->belongsToMany(Shop::class, 'dislikes', 'user_id', 'shop_id')->withTimestamps();
    }

    /**
     * Check if the user has disliked the given shop.
     *
     * @param Shop $shop
     * @return bool
     */
    public function hasDisliked(Shop $shop)
    {
        return !! $this->dislikes()->where('shop_id', $shop->id)->count();
    }

    /**
     * Undislike the given shop.
     *
     * @param Shop $shop
     * @return mixed
     */
    public function undislike(Shop $shop)
    {
        if ($this->hasDisliked($shop))
        {
            return $this->dislikes()->detach($shop);
        }
    }
}