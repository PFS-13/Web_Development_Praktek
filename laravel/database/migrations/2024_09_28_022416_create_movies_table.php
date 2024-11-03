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
        Schema::create('movies', function (Blueprint $table) {
            $table->id('id_movies');
            $table->string('title', 30);
            $table->string('alternative_title', 30)->nullable();
            $table->string('link_posters', 150);
            $table->char('year', 4);
            $table->string('country', 15);
            $table->string('synopsis', 300);
            $table->string('availability', 20);
            $table->integer('views');
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
        Schema::dropIfExists('movies');
    }
};
