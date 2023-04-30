<?php

namespace App\Http\Controllers;
use App\Models\Post;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function GetLatestNotImproved(Request $request)
    {

    $userId = $request->user()->id;

    $posts = Post::where('user_id', $userId)
                 ->with('user')
                 ->get();

    $postStories = $posts->filter(function($post) {
       return empty($post->story_text_improved);
    });

    $postStoriesWithUser = [];

    $postStories->map(function ($post) use (&$postStoriesWithUser) {
        $postStoriesWithUser[] = [
           'name' => $post->user->name,
           'email' => $post->user->email,
           'image_url' => $post->user->image_url,
           'story_type' => $post->story_type,
           'story_text' => $post->story_text,
        ];
    });

    return response()->json(['postStories' => $postStoriesWithUser], 200);

    }


    public function storePost(Request $request)
    {
        $post = new Post;
        $post->story_type = $request->story_type;
        $post->story_text = $request->story_text;
        $post->user_id = auth()->user()->id;

       if (!$post->save()) {
           return response()->json(['message' => 'Failed to save story'], 500);
       }

       return response()->json(['message' => 'Post created successfully', 'post' => $post], 201);
    }
}