<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'first_name' => 'Admin',
        //     'last_name' => 'Admin',
        //     'email' => 'admin@gmail.com',
        //     'password' => 'Qwerty1!',
        //     'role' => config('constants.accountType.admin'),
        //     'phone' => '+254 706-783-789'

        // ]);

        $this->call(LocationSeeder::class);
        $this->call(WorkCategorySeeder::class);
    }
}
