<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class LoginController extends Controller
{
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();

    }

//     public function handleGoogleCallback(Request $request)
// {
//     try {
//         $user = Socialite::driver('google')->stateless()->user();
//     } catch (\Exception $e) {
//         return response()->json(['error' => 'Google login failed.'], 401);
//     }

//     $existingUser = User::where('email', $user->getEmail())->first();

//     if ($existingUser) {
//         Auth::login($existingUser, true);
//     } else {
//         $newUser = new User;
//         $newUser->name = $user->getName();
//         $newUser->email = $user->getEmail();
//         $newUser->google_id = $user->getId();
//         $newUser->save();

//         Auth::login($newUser, true);
//     }

//     $accessToken = Auth::user()->createToken('authToken')->accessToken;

//     return response()->json(['access_token' => $accessToken]);
// }
public function handleGoogleCallback(Request $request)
{
    try {
        $user = Socialite::driver('google')->stateless()->user();
    } catch (\Exception $e) {
        return response()->json(['error' => 'Google login failed: ' . $e->getMessage()], 401);
    }

    $existingUser = User::where('email', $user->getEmail())->first();

    if ($existingUser) {
        Auth::login($existingUser, true);
    } else {
        $newUser = new User;
        $newUser->name = $user->getName();
        $newUser->email = $user->getEmail();
        $newUser->google_id = $user->getId();
        $newUser->save();

        Auth::login($newUser, true);
    }

    $accessToken = Auth::user()->createToken('authToken')->accessToken;

    return response()->json([
        'access_token' => $accessToken,
        'user' => Auth::user(),
        'user_data' => $user,
        'existing_user' => $existingUser,
    ]);
}

}
