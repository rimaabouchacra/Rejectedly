<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RejectionStoriesController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\Auth\LoginController;


// Route::group(['prefix' => 'v1', 'middleware' => ['web']], function(){
//     Route::get('/login/google', [LoginController::class, 'redirectToGoogle']);
//     Route::get('/login/google/callback', [LoginController::class, 'handleGoogleCallback']);
// });

Route::group(['prefix' => 'v1'], function(){

    Route::group(['prefix' => 'auth'], function () {


        Route::controller(ForgotPasswordController::class)->group(function () {
           Route::get('/password/reset/{token}', 'showResetForm')->name('password.reset');
           Route::post('/password/email', 'sendResetLinkEmail');
           Route::post('/reset', 'reset')->name('password.update');
        });

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
           Route::get('/users/count', 'Count');

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
            Route::delete('/comments/{id}', 'Delete');

        });

    });


    Route::group(['middleware' => ['auth:api', 'admin']], function() {
       Route::get('/users', [AuthController::class, "getUsers"]);
    });

// Route::get('/login/google', [LoginController::class, 'redirectToGoogle']);

// Route::group(['middleware' => ['web']], function() {

// });




});


