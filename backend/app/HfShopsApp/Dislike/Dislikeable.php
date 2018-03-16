<?php

namespace App\HfShopsApp\Dislike;

use \Carbon\Carbon;

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
    }
}
