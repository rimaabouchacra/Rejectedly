<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RejectionStory;


class RejectionStoriesController extends Controller
{

    public function storeStory(Request $request)
    {
        $rejectionStory = new RejectionStory;
        $rejectionStory->story_type = $request->story_type;
        $rejectionStory->story_text = $request->story_text;
        $rejectionStory->user_id = auth()->user()->id;

       if (!$rejectionStory->save()) {
           return response()->json(['message' => 'Failed to save story'], 500);
       }

       return response()->json(['message' => 'Story created successfully', 'story' => $rejectionStory], 201);
    }


    public function storeStoryWithImprovement(Request $request)
    {
        $validatedData = $request->validate([
            'story_type' => 'required',
            'story_text' => 'required',
            'story_text_improved' => 'required',

        ]);
        $user_id = $request->user()->id;

        $rejectionStory = new RejectionStory();
        $rejectionStory->story_type = $validatedData['story_type'];
        $rejectionStory->story_text = $validatedData['story_text'];
        $rejectionStory->story_text_improved = $validatedData['story_text_improved'];
        $rejectionStory->user_id = auth()->id();
        $rejectionStory->save();

        return response()->json(['message' => 'Rejection story added successfully']);
    }

    public function GetImproved()
    {

       $improvedStories = RejectionStory::where('story_text_improved', '!=', '')->with('user')->get();
       $improvedStories = $improvedStories->map(function ($story) {

        return [
            // 'user_id' => $story->user_id,
            'name' => $story->user->name,
            'email' => $story->user->email,
            'image_url' => $story->user->image_url,
            'story_type' => $story->story_type,
            'story_text' => $story->story_text,
            'story_text_improved' => $story->story_text_improved,
        ];
    });

    return response()->json(['improved_stories' => $improvedStories]);
    }


   public function GetNotImproved(Request $request)
   {
       $rejectionStories = RejectionStory::with('user')->get();
       $notImprovedStories = $rejectionStories->filter(function($story) {
           return empty($story->story_text_improved);
       });

       $notImprovedStoriesWithUser = $notImprovedStories->map(function ($story) {
          return [
            // 'user_id' => $story->user_id,
            'name' => $story->user->name,
            'email' => $story->user->email,
            'image_url' => $story->user->image_url,
            'story_type' => $story->story_type,
            'story_text' => $story->story_text,
        ];
    });

    return response()->json(['not_improved_stories' => $notImprovedStoriesWithUser], 200);
    }



}


