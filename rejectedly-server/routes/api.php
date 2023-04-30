<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RejectionStoriesController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostsController;


Route::group(['prefix' => 'v1'], function(){
    Route::group(['prefix' => 'auth'], function () {
        Route::post('/login', [AuthController::class, "login"]);
        Route::post('/signup', [AuthController::class, "register"]);
        Route::post('/refresh', [AuthController::class, "refresh"]);
        Route::get('/logout', [AuthController::class, "logout"]);
        Route::post('/profile',  [UserController::class, 'profile']);
        Route::post('/rejection-stories', [RejectionStoriesController::class, "storeStory"]);
        Route::post('/posts', [PostsController::class, "storePost"]);
        Route::get('/All-posts', [PostsController::class, "GetAllPosts"]);
        Route::get('/My-posts', [PostsController::class, 'GetMyPosts']);
        Route::post('/rejection-stories/improved', [RejectionStoriesController::class, "storeStoryWithImprovement"]);
        Route::get('/rejection-stories/improved', [RejectionStoriesController::class, 'GetImproved']);
        Route::get('/rejection-stories', [RejectionStoriesController::class, 'GetNotImproved']);
        Route::get('/rejection-stories-user', [RejectionStoriesController::class, 'GetNotImprovedUser']);
        // Route::get('/latest-rejection-stories', [RejectionStoriesController::class, 'GetLatestNotImproved']);

        Route::post('/createGroup', [GroupController::class, 'createGroup']);
        Route::post('/groups/users', [GroupController::class, 'addUsersToGroup']);
        Route::get('/user', [UserController::class, 'getUser']);
        Route::post('/comments/{post}', [PostsController::class, 'StoreComment']);
        Route::get('/stories/{story}/comments', [PostController::class, 'GetComments']);
        Route::post('/chatgpt-interpret', [RejectionStoriesController::class, "ChatgptResponse"]);

    });



    Route::group(['middleware' => ['auth:api', 'admin']], function() {
    Route::get('/users', [AuthController::class, "getUsers"]);

    });

    Route::group(['middleware' => 'auth:api'], function(){
    Route::post('/logout', [AuthController::class, "logout"]);

    });
});


