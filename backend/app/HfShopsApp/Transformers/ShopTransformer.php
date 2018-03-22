<?php

namespace App\HfShopsApp\Transformers;

class ShopTransformer extends Transformer
{
    protected $resourceName = 'shop';

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
            'disliked'          => $data['disliked'],
            'distance'          => $data->distance,
            'location' => [
                'type'          => $data['location_type'],
                'coordinates' => [
                    'lat'       => $data->coordinates[0],
                    'long'      => $data->coordinates[1],
                ]
            ]
        ];
    }
}