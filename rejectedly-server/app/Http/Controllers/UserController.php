<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\RejectionStory;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Url;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

    public function getUser(Request $request)
    {

        $user = Auth::user();
        return response()->json($user);

    }
    public function store(Request $request, RejectionStory $story)
    {
        try {
            $validatedData = $request->validate([
                'comment_text' => 'required|string|max:255',
            ]);

            if (!$story) {
                throw new \Exception('Story not found');
            }

            logger()->debug('Story ID: ' . $story->id);

            $comment = new Comment();
            $comment->comment_text = $validatedData['comment_text'];
            $comment->user_id = auth()->user()->id;
            $comment->story_id = $story->id;

            $comment->save();

            return response()->json(['message' => 'Comment added successfully']);
        } catch (\Exception $e) {
            logger()->error($e->getMessage());
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getComments(RejectionStory $story)
    {
       $comments = Comment::where('story_id', $story->id)->with('user')->get(['comment_text', 'user_id']);

       $commentsWithUser = $comments->map(function ($comment) {
          $userName = $comment->user->name;
          return [
              'comment_text' => $comment->comment_text,
              'user_name' => $userName,
          ];
       });

       return response()->json([
            'comments' => $commentsWithUser,
        ]);
    }

// public function profile(Request $request)
// {

// $user_id = Auth::id();
// $user_updated = User::find($user_id);
// if (!$user_updated) {
//     return response()->json(['message' => 'User not found'], 404);
// }
// $user_updated->username = $request->username;
// $user_updated->image_url = $request->image_url;
// $user_updated->phone_number = $request->phone_number;
// $user_updated->biography = $request->biography;
// $user_updated->linkedin_url = $request->linkedin_url;
// $user_updated->save();
// return response()->json([
//     "status" => "success",
//     "updated_user" => $user_updated
// ], 200);


// }

public function profile(Request $request)
{
    $user_id = Auth::id();
    $user_updated = User::find($user_id);
    if (!$user_updated) {
        return response()->json(['message' => 'User not found'], 404);
    }

    $user_updated->username = $request->username;
    $user_updated->phone_number = $request->phone_number;
    $user_updated->biography = $request->biography;
    $user_updated->linkedin_url = $request->linkedin_url;

    if ($request->has('profile_image')) {
        // Decode the base64 string and save the image file to the server
        $base64_image = $request->input('profile_image');
        $image_data = base64_decode($base64_image);
        $image_name = time() . '_' . uniqid() . '.png'; // Generate a unique image name
        $path = public_path('/images/' . $image_name);
        file_put_contents($path, $image_data);

        // Save the image URL to the database
        $user_updated->image_url = url('/images/' . $image_name);
    }

    $user_updated->save();
    return response()->json([
        "status" => "success",
        "updated_user" => $user_updated
    ], 200);
}





}
