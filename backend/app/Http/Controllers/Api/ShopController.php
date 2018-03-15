<?php

namespace App\Http\Controllers\Api;

use App\Shop;
use App\HfShopsApp\Paginate\Paginate;
use App\HfShopsApp\Filters\ShopFilter;
use App\HfShopsApp\Transformers\ShopTransformer;

class ShopController extends ApiController
{
    /**
     * ShopController constructor.
     *
     * @param ShopTransformer $transformer
     */
    public function __construct(ShopTransformer $transformer)
    {
        $this->transformer = $transformer;
    }

    /**
     * Get all the shops.
     *
     * @param ShopFilter $filter
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(ShopFilter $filter)
    {
        $shops = new Paginate(Shop::filter($filter));

        return $this->respondWithPagination($shops);
    }
}
