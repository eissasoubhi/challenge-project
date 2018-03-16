<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected $user;

    protected $headers;

    public function setUp()
    {
        parent::setUp();

        $users = factory(\App\User::class)->times(1)->create();

        $this->user = $users[0];

    }
}
