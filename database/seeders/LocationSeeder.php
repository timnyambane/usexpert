<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Location;
use Faker\Factory as Faker;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        foreach (range(1, 200) as $index) {
            Location::create([
                'town' => $faker->city,
                'state' => $faker->state,
                'latitude' => $faker->latitude(-4.9, 4.9),
                'longitude' => $faker->longitude(33.5, 41.9),
                'post_code' => $faker->postcode,
            ]);
        }
    }
}
