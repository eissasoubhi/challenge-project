<?php

namespace App\HfShopsApp\Dislike;

use \Carbon\Carbon;
use App\User;

trait Dislikeable
{
    /**
     * The time the shop will not be displayed at after being disliked
     *
     * @var array
     */
    protected $hiding_time_span = 2;

    /**
     * Whether or not the shop can be displayed
     *
     * Hide the shop for [hiding_time_span] after being disliked
     *
     * @return Bool
     */
    public function isDisplayable()
    {
        return $this
                ->pivot
                ->created_at
                ->addHours($this->hiding_time_span)
                ->lt(
                    Carbon::now()
                );
    }    /**
     * Check if the authenticated user has disliked the shop.
     * We make use of lazy loading if the relationship is not already loaded.
     *
     * @return bool
     */
    public function getDislikedAttribute()
    {
        if (! auth()->check()) {
            return false;
        }

        if (! $this->relationLoaded('disliked')) {
            $this->load(['disliked' => function ($query) {
                $query->where('user_id', auth()->id());
            }]);
        }

        $disliked = $this->getRelation('disliked');

        if (! empty($disliked) && $disliked->contains('id', auth()->id())) {
            return true;
        }

        return false;
    }

    /**
     * Get the users that disliked the shop.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function disliked()
    {
        return $this->belongsToMany(User::class, 'dislikes', 'shop_id', 'user_id')->withTimestamps();
    }
}
