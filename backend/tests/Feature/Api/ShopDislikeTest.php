<?php

namespace Tests\Feature\Api;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ShopDislikeTest extends TestCase
{
    use DatabaseMigrations;

    protected $shop;

    public function setUp()
    {
        parent::setUp();

        $this->shop = factory(\App\Shop::class)->create();
    }

    /** @test */
    public function it_returns_the_shop_dislike_properties_when_dislike()
    {
        $response = $this->postJson("/api/shops/{$this->shop->id}/dislike", [], $this->headers);

        $response->assertStatus(200)
            ->assertJson([
                'shop' => [
                    "id"        => $this->shop->id,
                    'disliked' => true
                ]
            ]);
    }

    /** @test */
    public function it_returns_an_unauthorized_error_when_trying_to_dislike_without_logging_in()
    {
        $response = $this->postJson("/api/shops/{$this->shop->id}/dislike");

        $response->assertStatus(401);
    }
}
