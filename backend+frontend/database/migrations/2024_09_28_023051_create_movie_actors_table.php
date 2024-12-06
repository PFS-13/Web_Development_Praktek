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
        Schema::create('movie_actors', function (Blueprint $table) {
            $table->unsignedBigInteger('id_movie');
            $table->unsignedBigInteger('id_actor');
            $table->foreign('id_movie')->references('id_movies')->on('movies')->onDelete('cascade');
            $table->foreign('id_actor')->references('id_actor')->on('actors')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movie_actors');
    }
};
