<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RejectionStoriesController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\UserController;


Route::group(['prefix' => 'v1'], function(){
    Route::group(['prefix' => 'auth'], function () {
        Route::post('/login', [AuthController::class, "login"]);
        Route::post('/signup', [AuthController::class, "register"]);
        Route::post('/refresh', [AuthController::class, "refresh"]);
        Route::post('/rejection-stories', [RejectionStoriesController::class, "storeStory"]);
        Route::post('/rejection-stories/improved', [RejectionStoriesController::class, "storeStoryWithImprovement"]);
        Route::get('/stories', [RejectionStoriesController::class, 'getAllStories']);
        Route::post('/createGroup', [GroupController::class, 'createGroup']);
        Route::post('/groups/users', [GroupController::class, 'addUsersToGroup']);
        Route::post('/stories/{story}/comments', [UserController::class, 'store']);
        Route::get('/stories/{story}/comments', [UserController::class, 'getComments']);


    });



    Route::group(['middleware' => ['auth:api', 'admin']], function() {
    Route::get('/users', [AuthController::class, "getUsers"]);

    });

    Route::group(['middleware' => 'auth:api'], function(){
    Route::post('/logout', [AuthController::class, "logout"]);

    });
});


