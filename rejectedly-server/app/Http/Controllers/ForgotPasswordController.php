<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Password;

class ForgotPasswordController extends Controller
{

public function showResetForm(Request $request, $token)
{
    return view('emails.reset-password', ['token' => $token, 'email' => $request->email]);
}

public function sendResetLinkEmail(Request $request)
{
    $request->validate([
        'email' => 'required|email'
    ]);

    $status = Password::sendResetLink(
        $request->only('email')
    );

    if ($status === Password::RESET_LINK_SENT) {
        return response()->json([
            'message' => 'Reset password link sent to your email'
        ], 200);

    } else {
         return response()->json([
            'error' => 'We can\'t find a user with that email address.'
        ], 422);
    }
}

public function reset(Request $request)
{
    $request->validate([
        'email' => 'required|email',
        'password' => 'required|confirmed|min:8',
        'token' => 'required'
    ]);

    $status = Password::reset(
        $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user = User::where('email', $user->email)->first();
                $user->password = Hash::make($password);
                $user->save();
                event(new PasswordReset($user));
            }
    );

    if ($status === Password::PASSWORD_RESET) {
            return redirect('http://localhost:3000/login')->with('status', 'Password reset successfully');
    } else {
            return redirect()->back()->with('error', 'Invalid reset token');
    }
}





}

