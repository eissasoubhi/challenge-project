<?php

namespace Tests\Feature\Api;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ShopFilterTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function it_returns_an_empty_array_of_shops_when_no_favorited_shops_exist_for_a_user_or_invalid_user()
    {
        $response = $this->getJson("/api/shops?favorited={$this->user->username}");

        $response->assertStatus(200)
            ->assertJson([
                'shops' => [],
                'shopsCount' => 0
            ]);

        $response = $this->getJson('/api/shops?favorited=somerandomuser');

        $response->assertStatus(200)
            ->assertJson([
                'shops' => [],
                'shopsCount' => 0
            ]);
    }

    /** @test */
    public function it_returns_the_shops_favorited_by_the_user_along_with_correct_total_shop_count()
    {
        $shops = factory(\App\Shop::class)->times(5)->create();
        $this->user->favorite($shops[0]);
        $this->user->favorite($shops[2]);
        $this->user->favorite($shops[4]);

        $response = $this->getJson("/api/shops?favorited={$this->user->username}");

        $response->assertStatus(200)
            ->assertJson([
                'shops' => [
                    [
                        'id' => $shops[0]['id'],
                        'picture' => $shops[0]['picture'],
                        'name' => $shops[0]['name'],
                        'email' => $shops[0]['email'],
                        'city' => $shops[0]['city'],
                        'createdAt' => $shops[0]['created_at']->toAtomString(),
                        'updatedAt' => $shops[0]['updated_at']->toAtomString(),
                        'favorited' => $shops[0]['favorited'],
                        'location' => [
                            'type' => $shops[0]['location_type'],
                            'coordinates' => [
                                'lat'   => explode(',', $shops[0]['location_coordinates'])[0],
                                'long'  => explode(',', $shops[0]['location_coordinates'])[1]
                            ]
                        ],
                    ],
                    [
                        'id' => $shops[2]['id'],
                        'picture' => $shops[2]['picture'],
                        'name' => $shops[2]['name'],
                        'email' => $shops[2]['email'],
                        'city' => $shops[2]['city'],
                        'createdAt' => $shops[2]['created_at']->toAtomString(),
                        'updatedAt' => $shops[2]['updated_at']->toAtomString(),
                        'favorited' => $shops[2]['favorited'],
                        'location' => [
                            'type' => $shops[2]['location_type'],
                            'coordinates' => [
                                'lat'   => explode(',', $shops[2]['location_coordinates'])[0],
                                'long'  => explode(',', $shops[2]['location_coordinates'])[1]
                            ]
                        ],
                    ],
                    [
                        'id' => $shops[4]['id'],
                        'picture' => $shops[4]['picture'],
                        'name' => $shops[4]['name'],
                        'email' => $shops[4]['email'],
                        'city' => $shops[4]['city'],
                        'createdAt' => $shops[4]['created_at']->toAtomString(),
                        'updatedAt' => $shops[4]['updated_at']->toAtomString(),
                        'favorited' => $shops[4]['favorited'],
                        'location' => [
                            'type' => $shops[4]['location_type'],
                            'coordinates' => [
                                'lat'   => explode(',', $shops[4]['location_coordinates'])[0],
                                'long'  => explode(',', $shops[4]['location_coordinates'])[1]
                            ]
                        ],
                    ],
                ],
                'shopsCount' => 3
            ]);
    }

    /** @test */
    public function it_returns_the_shops_sorted_by_distance_in_ascending_order()
    {
        $shops = factory(\App\Shop::class)->times(15)->create();

        $response = $this->getJson('/api/shops?nearby=65.758453,-148.316502');

        $json = $response->json();

        $distances = collect($json['shops'])->pluck('distance');

        $distances_array = $distances->map(function ($distance) {
            return intval($distance);
        })->all();

        $response->assertStatus(200);
        $this->assertNotEquals($distances->sum(), 0);
        $this->assertTrue($this->arraySorted($distances_array));

    }

    public function arraySorted($array) {
        $a = $array;
        $b = $array;
        sort($b);
        if ($a == $b){
            return true;
        } else {
            return false;
        }
    }
}
