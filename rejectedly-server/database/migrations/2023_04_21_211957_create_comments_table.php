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
        Schema::create('comments', function (Blueprint $table) {
        $table->id();
        $table->text('comment_text');
        $table->unsignedBigInteger('user_id');
        $table->unsignedBigInteger('story_id');
        $table->timestamps();

        $table->foreign('user_id')->references('id')->on('users');
        $table->foreign('story_id')->references('id')->on('rejection_stories');
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
