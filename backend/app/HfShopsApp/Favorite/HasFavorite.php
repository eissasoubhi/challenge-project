<?php

namespace App\HfShopsApp\Favorite;

use App\Shop;

trait HasFavorite
{
    /**
     * Favorite the given shop.
     *
     * @param Shop $shop
     * @return mixed
     */
    public function favorite(Shop $shop)
    {
        if (! $this->hasFavorited($shop))
        {
            return $this->favorites()->attach($shop);
        }
    }

    /**
     * Unfavorite the given shop.
     *
     * @param Shop $shop
     * @return mixed
     */
    public function unFavorite(Shop $shop)
    {
        return $this->favorites()->detach($shop);
    }

    /**
     * Get the shops favorited by the user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function favorites()
    {
        return $this->belongsToMany(Shop::class, 'favorites', 'user_id', 'shop_id')->withTimestamps();
    }

    /**
     * Check if the user has favorited the given shop.
     *
     * @param Shop $shop
     * @return bool
     */
    public function hasFavorited(Shop $shop)
    {
        return !! $this->favorites()->where('shop_id', $shop->id)->count();
    }
}