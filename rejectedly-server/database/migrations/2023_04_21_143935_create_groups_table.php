<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   
    public function up()
    {
       Schema::create('groups', function (Blueprint $table) {
           $table->id();
           $table->string('grp_name');
           $table->text('grp_description');
           $table->timestamps();
        });

        Schema::create('group_user', function (Blueprint $table) {
           $table->unsignedBigInteger('group_id');
           $table->unsignedBigInteger('user_id');
           $table->timestamps();

           $table->foreign('group_id')->references('id')->on('groups')->onDelete('cascade');
           $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
           $table->primary(['group_id', 'user_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('group_user');
        Schema::dropIfExists('groups');
    }
};
