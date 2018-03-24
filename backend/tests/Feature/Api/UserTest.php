<?php

namespace Tests\Feature\Api;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class UserTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function it_returns_the_current_user_when_logged_in()
    {
        $response = $this->getJson("/api/{$this->appVersion}/user", $this->headers);

        $response->assertStatus(200)
            ->assertJson([
                'user' => [
                    'id' => $this->loggedInUser->id,
                    'email' => $this->loggedInUser->email,
                ]
            ]);
    }

    /** @test */
    public function it_returns_invalid_token_error_when_using_a_wrong_token()
    {
        $response = $this->getJson("/api/{$this->appVersion}/user", [
            'Authorization' => 'Token InsertWrongTokenHereToTest'
        ]);

        $response->assertStatus(401)
            ->assertJson([
                'errors' => [
                    'message' => 'JWT error: Token is invalid',
                ]
            ]);
    }

    /** @test */
    public function it_returns_an_unauthorized_error_when_not_logged_in()
    {
        $response = $this->getJson("/api/{$this->appVersion}/user");

        $response->assertStatus(401);
    }
}
