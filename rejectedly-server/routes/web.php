<?php

use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\ForgotPasswordController;


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
Route::get('/send-mail', function () {
    $data = array(
        'name' => 'Rima',
        'body' => 'This is a test email from Laravel.'
    );

    Mail::mailer('smtp')->send('emails.mail', $data, function($message) {
        $message->to('rima.abouchakra.gms@gmail.com', 'Rima')
                ->subject('Test Email');
        $message->from('rima.abouchakra.gms@gmail.com', 'Rima');
    });

    return "Email sent successfully!";
});

Route::post('password/email', [ForgotPasswordController::class, 'sendResetLinkEmail'])->name('password.email');


 Route::get('/', function () {
    return view('welcome');
});
