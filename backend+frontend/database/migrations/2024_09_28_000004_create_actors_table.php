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
        Schema::create('actors', function (Blueprint $table) {
            $table->id('id_actor');
            $table->string('actor_name', 30);
            $table->integer('actor_age');
            $table->string('link_photo', 150)->nullable();
            $table->unsignedBigInteger('id_country');
            $table->foreign('id_country')->references('id_country')->on('countries');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('actors');
    }
};
