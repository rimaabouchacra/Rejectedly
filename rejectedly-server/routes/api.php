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
           Route::post('/login', 'login');
           Route::post('/signup', 'register');
           Route::post('/refresh', 'refresh');
           Route::get('/logout', 'logout');
        });

        Route::controller(UserController::class)->group(function () {
           Route::post('/profile',  'Profile');
           Route::get('/profile/{id}', 'GetProfile');
           Route::get('/user', 'GetUser');
           Route::get('/contacts/{id}', 'GetContacts');
        });

        Route::controller(RejectionStoriesController::class)->group(function () {
            Route::post('/chatgpt-interpret', "ChatgptResponse");
            Route::get('/rejection-stories', 'GetNotImproved');
            Route::delete('delete-story/{id}', 'DeleteStory');
            Route::get('/rejection-stories-user/{id}', 'GetStoryById');
            Route::get('/rejection-stories-user', 'GetAllStories');
        });

        Route::controller(PostsController::class)->group(function(){
            Route::post('/posts',  'storePost');
            Route::get('/All-posts', 'GetAllPosts');
            Route::get('/My-posts', 'GetMyPosts');
            Route::post('/rejection-stories/improved', 'StoreStoryWithImprovement');
            Route::get('/rejection-stories/improved', 'GetImproved');
            Route::post('/comments', 'StoreComment');
            Route::get('/comments/{story}', 'GetComments');
        });

    });
    
    Route::post('/password/email', [ForgotPasswordController::class, 'SendResetLinkEmail']);

    Route::group(['middleware' => ['auth:api', 'admin']], function() {
       Route::get('/users', [AuthController::class, "getUsers"]);
    });

});


