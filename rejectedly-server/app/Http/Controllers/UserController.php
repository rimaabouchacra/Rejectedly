<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\RejectionStory;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
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
    // public function getComments(RejectionStory $story)
    // {
    //     $comments = Comment::where('story_id', $story->id)->get();

    //     return response()->json($comments);
    // }
    public function getComments(Request $request, RejectionStory $story)
{
    $comments = Comment::with('user')
                        ->where('story_id', $story->id)
                        ->get();

    return response()->json(['comments' => $comments]);
}



}
