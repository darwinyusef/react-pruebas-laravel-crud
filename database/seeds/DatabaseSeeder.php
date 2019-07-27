<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Widgets;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 48)->create();
        factory(Widgets::class, 8000)->create();
    }
}
