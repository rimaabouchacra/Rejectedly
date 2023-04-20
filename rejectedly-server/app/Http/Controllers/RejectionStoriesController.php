<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RejectionStory;

class RejectionStoriesController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'story_type' => 'required',
            'story_text' => 'required',
            'users_id' => 'required',
        ]);

        $rejectionStory = new RejectionStory();
        $rejectionStory->story_type = $validatedData['story_type'];
        $rejectionStory->story_text = $validatedData['story_text'];
        $rejectionStory->story_text_improved = $request->input('story_text_improved');
        $rejectionStory->users_id = $validatedData['users_id'];
        $rejectionStory->save();

        return response()->json(['message' => 'Rejection story saved successfully'], 201);
    }
}

