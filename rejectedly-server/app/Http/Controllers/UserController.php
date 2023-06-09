<?php

namespace App\Http\Controllers;


use App\Models\RejectionStory;
use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Url;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

public function GetUser(Request $request)
{
    $user = Auth::user();
    return response()->json($user);

}


public function Profile(Request $request)
{

$user_id = Auth::id();
$user_updated = User::find($user_id);
if (!$user_updated) {
    return response()->json(['message' => 'User not found'], 404);
}
$user_updated->username = $request->username;
$user_updated->image_url = $request->image_url;
$user_updated->phone_number = $request->phone_number;
$user_updated->biography = $request->biography;
$user_updated->linkedin_url = $request->linkedin_url;
$user_updated->save();
return response()->json([
    "status" => "success",
    "updated_user" => $user_updated
], 200);

}

public function GetProfile($user_id)
{
    $user = User::find($user_id);

    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    return response()->json([
        'id' => $user->id,
        'username' => $user->username,
        'email'=>$user->email,
        'image_url' => $user->image_url,
        'phone_number' => $user->phone_number,
        'biography' => $user->biography,
        'linkedin_url' => $user->linkedin_url,
    ], 200);
}


public function GetContacts(Request $request, $id)
{
    $user = User::find($id);

    if (!$user) {
        return response()->json(['error' => 'User not found'], 404);
    }

    $contactInfo = [
        'email' => $user->email,
        'phone_number' => $user->phone_number,
        'linkedin_url' => $user->linkedin_url,
        'biography' => $user->biography,
    ];
    return response()->json([
            'contactInfo' => $contactInfo,
    ]);

}

 public function Count()
{
    $count = User::count();

    return response()->json(['count' => $count]);
}

}
