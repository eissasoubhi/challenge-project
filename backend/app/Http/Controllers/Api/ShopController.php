<?php

namespace App\Http\Controllers\Api;

use App\Shop;
use App\HfShopsApp\Paginate\Paginate;
use App\HfShopsApp\Filters\ShopBuilderFilter;
use App\HfShopsApp\Filters\ShopCollectionFilter;
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

        $this->middleware('auth.api');
    }

    /**
     * Get all the shops.
     *
     * @param ShopBuilderFilter $builder_filter
     * @param ShopCollectionFilter $collection_filter
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(ShopBuilderFilter $builder_filter, ShopCollectionFilter $collection_filter)
    {
        $shops = new Paginate(Shop::filter($builder_filter), $collection_filter);

        return $this->respondWithPagination($shops);
    }
}
