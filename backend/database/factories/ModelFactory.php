<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (\Faker\Generator $faker) {

    return [
        'username' => str_replace('.', '', $faker->unique()->userName),
        'email' => $faker->unique()->safeEmail,
        'password' => \Hash::make('secret'),
    ];
});

$factory->define(App\Shop::class, function (\Faker\Generator $faker) {

    static $reduce = 999;

    return [
        'picture' => 'http://placehold.it/150x150',
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'city' => $faker->city(),
        'location_type' => 'Point',
        'location_coordinates' => $faker->unique()->latitude(). ',' .$faker->unique()->longitude(),
        'created_at' => \Carbon\Carbon::now()->subSeconds($reduce--),
    ];
});
