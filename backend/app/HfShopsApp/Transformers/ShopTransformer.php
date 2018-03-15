<?php

namespace App\HfShopsApp\Transformers;

class ShopTransformer extends Transformer
{
    protected $resourceName = 'shop';

    public function transform($data)
    {
        $coordinates = explode(',', $data['location_coordinates']);

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
                'coordinates' => [
                    'lat'       => count($coordinates) > 0 ? $coordinates[0] : null,
                    'long'      => count($coordinates) > 1 ? $coordinates[1] : null
                ]
            ]
        ];
    }
}