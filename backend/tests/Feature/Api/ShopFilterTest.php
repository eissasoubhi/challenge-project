<?php

namespace Tests\Feature\Api;

use App\User;
use Carbon\Carbon;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ShopFilterTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function it_returns_an_empty_array_of_shops_when_no_favorited_shops_exist_for_a_user_or_invalid_user()
    {
        $response = $this->getJson("/api/{$this->appVersion}/shops?favorited={$this->user->email}", $this->headers);

        $response->assertStatus(200)
            ->assertJson([
                'shops' => [],
                'shopsCount' => 0
            ]);

        $response = $this->getJson("/api/{$this->appVersion}/shops?favorited=somerandomuser", $this->headers);

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

        $response = $this->getJson("/api/{$this->appVersion}/shops?favorited={$this->user->email}", $this->headers);

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
    public function it_returns_the_shops_sorted_by_distance_in_ascending_order_all_along_pagination_pages()
    {
        $shops = factory(\App\Shop::class)->times(20)->create();

        $page1 = $this->getJson("/api/{$this->appVersion}/shops?offset=0&limit=10&nearby=65.758453,-148.316502", $this->headers);
        $page2 = $this->getJson("/api/{$this->appVersion}/shops?offset=10&limit=10&nearby=65.758453,-148.316502", $this->headers);

        $page1_json = $page1->json();
        $page2_json = $page2->json();

        $distances1 = collect($page1_json['shops'])->pluck('distance');
        $distances2 = collect($page2_json['shops'])->pluck('distance');
        $distances = $distances1->merge($distances2);

        $distances_array = $distances->map(function ($distance) {
            return intval($distance);
        })->all();

        $page1->assertStatus(200);
        $page2->assertStatus(200);
        $this->assertNotEquals($distances->sum(), 0);
        $this->assertTrue($this->arraySorted($distances_array), 'shops are not sorted by distance correctly');
    }

    /** @test */
    public function it_returns_the_shops_except_the_favorited_by_the_user_along_with_correct_total_shop_count()
    {
        $shops = factory(\App\Shop::class)->times(15)->create();
        $this->user->favorite($shops[0]);
        $this->user->favorite($shops[2]);
        $this->user->favorite($shops[4]);

        $response = $this->getJson("/api/{$this->appVersion}/shops?exceptfavorited={$this->user->email}&limit=15", $this->headers);

        $json = $response->json();

        $shops_IDs = collect($json['shops'])->pluck('id');

        $are_favorited_shops_missing = $shops_IDs->every(function ($id) use ($shops) {
            return !in_array($id, [$shops[0]->id, $shops[2]->id, $shops[4]->id]);
        });

        $response->assertStatus(200);
        $this->assertEquals($json['shopsCount'], 15 - 3);
        $this->assertTrue($are_favorited_shops_missing);
    }


    /** @test */
    public function it_undislike_the_disliked_shops_afte_the_next_2_hours()
    {
        $shops = factory(\App\Shop::class)->times(15)->create();
        $this->user->dislike($shops[0]);
        $this->user->dislike($shops[2]);
        $this->user->dislike($shops[4]);

        $this->assertTrue($this->user->hasDisliked($shops[0]));
        $this->assertTrue($this->user->hasDisliked($shops[2]));
        $this->assertTrue($this->user->hasDisliked($shops[4]));

        Carbon::setTestNow(Carbon::now()->addHours(2));

        // trigger the exceptdisliked function
        $response = $this->getJson("/api/{$this->appVersion}/shops?exceptdisliked={$this->user->email}&limit=15", $this->headers);

        $response->assertStatus(200);
        $this->assertFalse($this->user->hasDisliked($shops[0]));
        $this->assertFalse($this->user->hasDisliked($shops[2]));
        $this->assertFalse($this->user->hasDisliked($shops[4]));

        Carbon::setTestNow();
    }

    /** @test */
    public function it_hides_the_disliked_shops_within_the_list_during_the_next_2_hours()
    {
        $shops = factory(\App\Shop::class)->times(15)->create();
        $this->user->dislike($shops[0]);
        $this->user->dislike($shops[2]);
        $this->user->dislike($shops[4]);

        $response1 = $this->getJson("/api/{$this->appVersion}/shops?exceptdisliked={$this->user->email}&limit=15", $this->headers);

        $json1 = $response1->json();

        $shops_IDs1 = collect($json1['shops'])->pluck('id');

        $are_disliked_shops_missing_before_2hours = $shops_IDs1->every(function ($id) use ($shops) {
            return !in_array($id, [$shops[0]->id, $shops[2]->id, $shops[4]->id]);
        });

        Carbon::setTestNow(Carbon::now()->addHours(2));

        $response2 = $this->getJson("/api/{$this->appVersion}/shops?exceptdisliked={$this->user->email}&limit=15", $this->headers);

        $json2 = $response2->json();

        $shops_IDs2 = collect($json2['shops'])->pluck('id');

        $are_disliked_shops_missing_after_2hours = $shops_IDs2->every(function ($id) use ($shops) {
            return !in_array($id, [$shops[0]->id, $shops[2]->id, $shops[4]->id]);
        });

        $response1->assertStatus(200);
        $response2->assertStatus(200);
        $this->assertTrue($are_disliked_shops_missing_before_2hours, "the disliked shops exist before 2hours");
        $this->assertFalse($are_disliked_shops_missing_after_2hours, "the disliked shops are missing after 2hours");

        Carbon::setTestNow();
    }

    protected function arraySorted($array) {
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
