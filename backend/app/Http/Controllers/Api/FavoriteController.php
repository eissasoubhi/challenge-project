<?php

namespace App\Http\Controllers\Api;

use App\Shop;
use App\HfShopsApp\Transformers\ShopTransformer;

class FavoriteController extends ApiController
{
    /**
     * FavoriteController constructor.
     *
     * @param ShopTransformer $transformer
     */
    public function __construct(ShopTransformer $transformer)
    {
        $this->transformer = $transformer;
        $this->middleware('auth.api');
    }

    /**
     * Favorite the shop given by its id and return the shop if successful.
     *
     * @param Shop $shop
     * @return \Illuminate\Http\JsonResponse
     */
    public function add(Shop $shop)
    {
        $user = auth()->user();

        $user->favorite($shop);

        return $this->respondWithTransformer($shop);
    }

    /**
     * Unfavorite the shop given by its id and return the shop if successful.
     *
     * @param Shop $shop
     * @return \Illuminate\Http\JsonResponse
     */
    public function remove(Shop $shop)
    {
        $user = auth()->user();

        $user->unFavorite($shop);

        return $this->respondWithTransformer($shop);
    }
}
