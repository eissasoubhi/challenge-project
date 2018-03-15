<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected $loggedInUser;

    protected $user;

    protected $headers;

    public function setUp()
    {
        parent::setUp();

        $users = factory(\App\User::class)->times(2)->create();

        $this->user = $users[0];

    }
}
