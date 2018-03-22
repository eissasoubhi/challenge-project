<?php

namespace App\Http\Controllers\Api;

use App\Shop;
use App\HfShopsApp\Transformers\ShopTransformer;

class DislikeController extends ApiController
{
    /**
     * DislikeController constructor.
     *
     * @param ShopTransformer $transformer
     */
    public function __construct(ShopTransformer $transformer)
    {
        $this->transformer = $transformer;
        $this->middleware('auth.api');
    }

    /**
     * Dislike the shop given by its id and return the shop if successful.
     *
     * @param Shop $shop
     * @return \Illuminate\Http\JsonResponse
     */
    public function add(Shop $shop)
    {
        $user = auth()->user();

        $user->dislike($shop);

        return $this->respondWithTransformer($shop);
    }
}
