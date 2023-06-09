<?php

namespace App\Http\Controllers;
use App\Models\Post;
use App\Models\Comment;
use Illuminate\Http\Request;

class PostsController extends Controller
{


public function GetMyPosts(Request $request)
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
           'id' => $post->id,
           'name' => $post->user->name,
           'email' => $post->user->email,
           'image_url' => $post->user->image_url,
           'story_type' => $post->story_type,
           'story_text' => $post->story_text,
        ];
    });

    return response()->json(['postStories' => $postStoriesWithUser], 200);

}

public function GetAllPosts(Request $request)
{
    $posts = Post::with('user')->get();

    $postStoriesWithUser = [];

    $posts->map(function ($post) use (&$postStoriesWithUser) {
        $postStoriesWithUser[] = [
           'id' => $post->id,
           'user_id' => $post->user->id,
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


public function StoreComment(Request $request)
{
    try {
        $validatedData = $request->validate([
            'story_id' => 'required|integer',
            'comment_text' => 'required|string|max:255',
        ]);

        $post = Post::find($validatedData['story_id']);
        if (!$post) {
            throw new \Exception('Post not found');
        }

        logger()->debug('Post ID: ' . $post->id);

        $comment = new Comment();
        $comment->comment_text = $validatedData['comment_text'];
        $comment->user_id = auth()->user()->id;
        $comment->story_id = $post->id;
        $comment->save();

        return response()->json(['message' => 'Comment added successfully']);
        }
        catch (\Exception $e) {
           logger()->error($e->getMessage());
           return response()->json(['error' => $e->getMessage()], 500);
        }
}

public function GetComments(Post $story)
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

public function StoreStoryWithImprovement(Request $request)
{
    $validatedData = $request->validate([
        'story_type' => 'required',
        'story_text' => 'required',
        'story_text_improved' => 'required',
    ]);

    $user_id = $request->user()->id;

    $rejectionStory = new Post();
    $rejectionStory->story_type = $validatedData['story_type'];
    $rejectionStory->story_text = $validatedData['story_text'];
    $rejectionStory->story_text_improved = $validatedData['story_text_improved'];
    $rejectionStory->user_id = auth()->id();
    $rejectionStory->save();

    return response()->json(['message' => 'Rejection story added successfully']);
}

public function GetImproved()
{
    $posts = Post::where('story_text_improved', '!=', '')->with('user')->get();

    $postStoriesWithUser = [];

    $posts->map(function ($post) use (&$postStoriesWithUser) {
        $postStoriesWithUser[] = [
           'id' => $post->id,
           'name' => $post->user->name,
           'user_id' => $post->user->id,
           'email' => $post->user->email,
           'image_url' => $post->user->image_url,
           'story_type' => $post->story_type,
           'story_text' => $post->story_text,
           'story_text_improved' => $post->story_text_improved,
        ];
    });

    return response()->json(['postStories' => $postStoriesWithUser], 200);
}


}
