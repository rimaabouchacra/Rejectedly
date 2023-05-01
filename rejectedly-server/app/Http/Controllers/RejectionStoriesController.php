<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RejectionStory;
use App\Models\AnalyzedStory;

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


    // public function storeStoryWithImprovement(Request $request)
    // {
    //     $validatedData = $request->validate([
    //         'story_type' => 'required',
    //         'story_text' => 'required',
    //         'story_text_improved' => 'required',

    //     ]);
    //     $user_id = $request->user()->id;

    //     $rejectionStory = new RejectionStory();
    //     $rejectionStory->story_type = $validatedData['story_type'];
    //     $rejectionStory->story_text = $validatedData['story_text'];
    //     $rejectionStory->story_text_improved = $validatedData['story_text_improved'];
    //     $rejectionStory->user_id = auth()->id();
    //     $rejectionStory->save();

    //     return response()->json(['message' => 'Rejection story added successfully']);
    // }

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


//    public function GetNotImproved(Request $request)
//    {
//        $rejectionStories = RejectionStory::with('user')->get();
//        $notImprovedStories = $rejectionStories->filter(function($story) {
//            return empty($story->story_text_improved);
//        });

//        $notImprovedStoriesWithUser = $notImprovedStories->map(function ($story) {
//           return [
//             'name' => $story->user->name,
//             'email' => $story->user->email,
//             'image_url' => $story->user->image_url,
//             'story_type' => $story->story_type,
//             'story_text' => $story->story_text,
//         ];
//     });

//     return response()->json(['not_improved_stories' => $notImprovedStoriesWithUser], 200);
//     }


public function GetNotImprovedUser(Request $request)
{
    $userId = $request->user()->id;

    $rejectionStories = RejectionStory::where('user_id', $userId)
                                      ->with('user')
                                      ->get();

    $notImprovedStories = $rejectionStories->filter(function($story) {
        return empty($story->story_text_improved);
    });

    $notImprovedStoriesWithUser = [];

    $notImprovedStories->map(function ($story) use (&$notImprovedStoriesWithUser) {
        $notImprovedStoriesWithUser[] = [
            'name' => $story->user->name,
            'email' => $story->user->email,
            'image_url' => $story->user->image_url,
            'story_type' => $story->story_type,
            'story_text' => $story->story_text,
        ];
    });

    return response()->json(['not_improved_stories' => $notImprovedStoriesWithUser], 200);
}

public function GetNotImproved(Request $request)
{
    $rejectionStories = RejectionStory::with('user')->get();
    $notImprovedStories = $rejectionStories->filter(function($story) {
        return empty($story->story_text_improved);
    });

    $notImprovedStoriesWithUser = [];

    $notImprovedStories->map(function ($story) use (&$notImprovedStoriesWithUser) {
        $notImprovedStoriesWithUser[] = [
            'name' => $story->user->name,
            'email' => $story->user->email,
            'image_url' => $story->user->image_url,
            'story_type' => $story->story_type,
            'story_text' => $story->story_text,
        ];
    });

    return response()->json(['not_improved_stories' => $notImprovedStoriesWithUser], 200);
}


// public function GetLatestNotImproved(Request $request)
// {
//     $rejectionStories = RejectionStory::with('user')->get();
//     $notImprovedStories = $rejectionStories->filter(function($story) {
//         return empty($story->story_text_improved);
//     })->sortByDesc('created_at');

//     $latestStory = $notImprovedStories->first();

//     $latestStoryWithUser = [
//         'name' => $latestStory->user->name,
//         'email' => $latestStory->user->email,
//         'image_url' => $latestStory->user->image_url,
//         'story_type' => $latestStory->story_type,
//         'story_text' => $latestStory->story_text,
//     ];

//     return response()->json(['latest_story' => $latestStoryWithUser], 200);
// }


public function ChatgptResponse(Request $request)
    {

         $data = json_decode($request->getContent(), true);
    if ($data === null || !isset($data['story'])) {
        return response()->json(['error' => 'Invalid request body'], 400);
    }
        $story = $data['story'];

        $url = 'https://api.openai.com/v1/engines/text-davinci-002/completions';

        $headers = array(
            'Content-Type: application/json',
            'Authorization: Bearer ' . env('openai_API'),
        );

        $data = array(
            'prompt' => $story . 'respond in 10 lines. Interpret this rejected,' . $request->input('story_type') . 'extract the weekness points in it, and tell how to improve it',
            'temperature' => 0.4,
            'max_tokens' => 1000,
            'n' => 1,

        );

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        $response = curl_exec($ch);

        curl_close($ch);

        return $response;
    }






}


