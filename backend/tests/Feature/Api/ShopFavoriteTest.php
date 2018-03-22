<?php

namespace Tests\Feature\Api;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ShopFavoriteTest extends TestCase
{
    use DatabaseMigrations;

    protected $shop;

    public function setUp()
    {
        parent::setUp();

        $this->shop = factory(\App\Shop::class)->create();
    }

    /** @test */
    public function it_returns_the_shop_favorite_properties_accordingly_when_favorited_and_unfavorited()
    {
        $response = $this->postJson("/api/shops/{$this->shop->id}/favorite", [], $this->headers);

        $response->assertStatus(200)
            ->assertJson([
                'shop' => [
                    "id"        => $this->shop->id,
                    'favorited' => true
                ]
            ]);

        $response = $this->deleteJson("/api/shops/{$this->shop->id}/favorite", [], $this->headers);

        $response->assertStatus(200)
            ->assertJson([
                'shop' => [
                    "id"        => $this->shop->id,
                    'favorited' => false
                ]
            ]);
    }

    /** @test */
    public function it_returns_an_unauthorized_error_when_trying_to_favorite_or_unfavorite_without_logging_in()
    {
        $response = $this->postJson("/api/shops/{$this->shop->id}/favorite");

        $response->assertStatus(401);

        $response = $this->deleteJson("/api/shops/{$this->shop->id}/favorite");

        $response->assertStatus(401);
    }
}
