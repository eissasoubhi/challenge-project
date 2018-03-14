<?php

namespace App\Http\Controllers\Api;

use App\Shop;
use App\HfShopsApp\Paginate\Paginate;

class ShopController extends ApiController
{
    /**
     * Get all the shops.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $username = request()->get('favorited', false);

        $shops = new Paginate(Shop::favoritedByUser($username));

        return $this->respondWithPagination($shops);
    }

    public function transform($data)
    {
        return [
            'id'                => $data['id'],
            'picture'           => $data['picture'],
            'name'              => $data['name'],
            'email'             => $data['email'],
            'city'              => $data['city'],
            'createdAt'         => $data['created_at']->toAtomString(),
            'updatedAt'         => $data['updated_at']->toAtomString(),
            'favorited'         => $data['favorited'],
            'location' => [
                'type'          => $data['location_type'],
                'coordinates'   => $data['location_coordinates']
            ]
        ];
    }
}
