<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RejectionStoriesController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\ForgotPasswordController;


Route::group(['prefix' => 'v1'], function(){

    Route::group(['prefix' => 'auth'], function () {

        Route::controller(AuthController::class)->group(function () {
           Route::post('/login', "login");
           Route::post('/signup', "register");
           Route::post('/refresh', "refresh");
           Route::get('/logout', "logout");
        });
        
        Route::controller(UserController::class)->group(function () {
           Route::post('/profile',  'profile');
           Route::get('/user', 'getUser');
           Route::get('/contacts/{id}', 'getContacts');
        });

        Route::controller(RejectionStoriesController::class)->group(function () {
            Route::post('/rejection-stories', 'storeStory');
            Route::get('/rejection-stories', 'GetNotImproved');
            Route::delete('delete-story/{id}', 'DeleteStory');
            Route::get('/rejection-stories-user/{id}', 'GetAllStorieId');
            Route::get('/rejection-stories-user', 'GetAllStories');
            Route::post('/chatgpt-interpret', "ChatgptResponse");

        });

        Route::controller(PostsController::class)->group(function(){
            Route::post('/posts',  "storePost");
            Route::get('/All-posts', "GetAllPosts");
            Route::get('/My-posts', 'GetMyPosts');
            Route::post('/rejection-stories/improved', "storeStoryWithImprovement");
            Route::get('/rejection-stories/improved', 'GetImproved');
            Route::post('/comments', 'StoreComment');
            Route::get('/comments/{story}', 'GetComments');
        });

    });

    Route::group(['middleware' => ['auth:api', 'admin']], function() {
       Route::get('/users', [AuthController::class, "getUsers"]);
    });

});


