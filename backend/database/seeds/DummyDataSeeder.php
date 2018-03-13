<?php

use Illuminate\Database\Seeder;

class DummyDataSeeder extends Seeder
{
    /**
     * Total number of users.
     *
     * @var int
     */
    protected $totalUsers = 5;

    /**
     * Total number of shops.
     *
     * @var int
     */
    protected $totalShops = 87;

    /**
     * Percentage of users with favorites.
     *
     * @var float Value should be between 0 - 1.0
     */
    protected $usersWithFavoritesRatio = 0.75;

    /**
     * Percentage of users with following.
     *
     * @var float Value should be between 0 - 1.0
     */
    protected $usersWithDislikingRatio = 0.75;

    /**
     * Populate the database with dummy data for testing.
     * Complete dummy data generation including relationships.
     * Set the property values as required before running database seeder.
     *
     * @param \Faker\Generator $faker
     */
    public function run(\Faker\Generator $faker)
    {
        $users = factory(\App\User::class)->times($this->totalUsers)->create();
        $shops = factory(\App\Shop::class)->times($this->totalShops)->create();

        $users->random((int) $users->count() * $this->usersWithFavoritesRatio)
            ->each(function ($user) use($faker, $shops) {
                $shops->random($faker->numberBetween(1, (int) $shops->count() * 0.5))
                    ->each(function ($shop) use ($user) {
                        $user->favorite($shop);
                    });
            });

        $users->random((int) $users->count() * $this->usersWithDislikingRatio)
            ->each(function ($user) use($faker, $shops) {
                $shops->random($faker->numberBetween(1, (int) $shops->count() * 0.5))
                    ->each(function ($shop) use ($user) {
                        $user->dislike($shop);
                    });
            });

    }
}
