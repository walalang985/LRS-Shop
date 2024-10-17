<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::create('inventory',function(Blueprint $blueprint){
            $blueprint->id();
            $blueprint->string('item');
            $blueprint->string('category');
            $blueprint->float('price');
            $blueprint->integer('stock');
            $blueprint->string('image_link');
            $blueprint->timestamps();
        });
        Schema::create('transactions',function(Blueprint $blueprint){
            $blueprint->id();
            $blueprint->string('username');
            $blueprint->string('transaction_record');
            $blueprint->timestamps();
            
        });
        Schema::create('cart',function(Blueprint $blueprint){
            $blueprint->id();
            $blueprint->string('item');
            $blueprint->float('price');
            $blueprint->timestamps();
            $blueprint->integer('quantity');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
