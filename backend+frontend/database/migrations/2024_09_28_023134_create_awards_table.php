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
        Schema::create('awards', function (Blueprint $table) {
            $table->id('id_awards');
            $table->string('awards', 30);
            $table->integer('year');
            $table->unsignedBigInteger('id_country');
            $table->unsignedBigInteger('id_movie');
            $table->foreign('id_country')->references('id_country')->on('countries');
            $table->foreign('id_movie')->references('id_movies')->on('movies');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('awards');
    }
};
