<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class GoogleLoginController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function redirect()
    {
        // return Socialite::driver('google')->redirect();
           $redirectUrl = Socialite::driver('google');


    return  $redirectUrl->redirect();
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function callback()
    {
        try {

            $user = Socialite::driver('google')->user();

            $finduser = User::where('google_id', $user->id)->first();

            if ( $finduser ) {

                Auth::login($finduser);

                // return redirect()->intended('http://localhost:3000/saved');

            } else {
                $newUser = User::create([
                    'name' => $user->name,
                    'email' => $user->email,
                    'google_id'=> $user->id,
                    'password' => 'dummypass'// you can change auto generate password here and send it via email but you need to add checking that the user need to change the password for security reasons
                ]);

                Auth::login($newUser);

                // return redirect()->intended('/');
                // return redirect()->intended('http://localhost:3000/saved');
            }

            $token = Auth::attempt(['email' => $user->email, 'password' => 'dummypass']);

        // Redirect the user with the generated token
        return redirect()->intended('http://localhost:3000/saved')->with('token', $token);

        } catch (Exception $e) {
            dd($e->getMessage());
        }
    }
}
