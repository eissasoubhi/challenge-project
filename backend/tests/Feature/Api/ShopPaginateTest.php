<?php

namespace Tests\Feature\Api;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ShopPaginateTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function it_returns_the_correct_shops_with_limit_and_offset()
    {
        factory(\App\Shop::class)->times(25)->create();

        $response = $this->getJson('/api/shops');

        $response->assertStatus(200)
            ->assertJson([
                'shopsCount' => 25
            ]);

        $this->assertCount(20, $response->json()['shops'], 'Expected shops to set default limit to 20');

        $this->assertEquals(
            \App\Shop::take(20)->pluck('id')->toArray(),
            array_column($response->json()['shops'], 'id'),
            'Expected latest 20 shops by default'
        );

        $response = $this->getJson('/api/shops?limit=10&offset=5');

        $response->assertStatus(200)
            ->assertJson([
                'shopsCount' => 25
            ]);

        $this->assertCount(10, $response->json()['shops'], 'Expected shop limit of 10 when set');

        $this->assertEquals(
            \App\Shop::skip(5)->take(10)->pluck('id')->toArray(),
            array_column($response->json()['shops'], 'id'),
            'Expected latest 10 shops with 5 offset'
        );
    }
}
