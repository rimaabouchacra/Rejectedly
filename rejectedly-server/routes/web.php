<?php

use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\GoogleLoginController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('/login/google', [GoogleLoginController::class, 'redirect'])->name('login.google-redirect');
Route::get('/login/google/callback', [GoogleLoginController::class, 'callback'])->name('login.google-callback');

 Route::get('/', function () {
    return view('welcome');
});
