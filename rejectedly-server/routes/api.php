<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RejectionStoriesController;
use App\Http\Controllers\GroupController;


Route::group(['prefix' => 'v1'], function(){
    Route::group(['prefix' => 'auth'], function () {
        Route::post('/login', [AuthController::class, "login"]);
        Route::post('/signup', [AuthController::class, "register"]);
        Route::post('/refresh', [AuthController::class, "refresh"]);
        Route::post('/rejection-stories', [RejectionStoriesController::class, "storeStory"]);
        Route::post('/rejection-stories/improved', [RejectionStoriesController::class, "storeStoryWithImprovement"]);
        Route::post('/createGroup', [GroupController::class, 'createGroup']);
        Route::post('/groups/users', [GroupController::class, 'addUsersToGroup']);

    });



    Route::group(['middleware' => ['auth:api', 'admin']], function() {
    Route::get('/users', [AuthController::class, "getUsers"]);

    });

    Route::group(['middleware' => 'auth:api'], function(){
        Route::post('/logout', [AuthController::class, "logout"]);

    });
});


