<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function store(Request $request, RejectionStory $story)
    {
        $validatedData = $request->validate([
            'comment_text' => 'required|string|max:255',
        ]);

        $comment = new Comment();
        $comment->comment_text = $validatedData['comment_text'];
        $comment->user_id = auth()->user()->id;
        $comment->story_id = $story->id;

        $comment->save();

        return redirect()->back();
    }
}
