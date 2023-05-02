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


// public function GetNotImprovedUser(Request $request)
// {
//     $userId = $request->user()->id;

//     $rejectionStories = RejectionStory::where('user_id', $userId)
//                                       ->with('user')
//                                       ->get();

//     $notImprovedStories = $rejectionStories->filter(function($story) {
//         return empty($story->story_text_improved);
//     });

//     $notImprovedStoriesWithUser = [];

//     $notImprovedStories->map(function ($story) use (&$notImprovedStoriesWithUser) {
//         $notImprovedStoriesWithUser[] = [
//             'name' => $story->user->name,
//             'email' => $story->user->email,
//             'image_url' => $story->user->image_url,
//             'story_type' => $story->story_type,
//             'story_text' => $story->story_text,
//         ];
//     });

//     return response()->json(['not_improved_stories' => $notImprovedStoriesWithUser], 200);
// }
public function GetAllStories(Request $request)
{
    $userId = $request->user()->id;

    $rejectionStories = RejectionStory::where('user_id', $userId)
                                      ->with('user')
                                      ->get()
                                      ->toArray();

    $improvedStoriesWithUser = [];

    array_map(function ($story) use (&$improvedStoriesWithUser) {
        if (!empty($story['story_text_improved'])) {
            $improvedStoriesWithUser[] = [
                'id' => $story['id'],
                'name' => $story['user']['name'],
                'email' => $story['user']['email'],
                'story_type' => $story['story_type'],
                'story_text' => $story['story_text'],
                'story_text_improved' => $story['story_text_improved'],
            ];
        }
    }, $rejectionStories);

    return response()->json([
        'not_improved_stories' => $improvedStoriesWithUser,
    ]);
}

public function GetAllStorieId($id)
{
    $story = RejectionStory::with('user')->find($id);

    if ($story && !empty($story->story_text_improved)) {
        return response()->json([
            'id' => $story->id,
            'name' => $story->user->name,
            'email' => $story->user->email,
            'story_type' => $story->story_type,
            'story_text' => $story->story_text,
            'story_text_improved' => $story->story_text_improved,
        ]);
    } else {
        return response()->json(['error' => 'Story not found.'], 404);
    }
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


public function GetLatestNotImproved(Request $request)
{
    $rejectionStories = RejectionStory::with('user')->get();
    $notImprovedStories = $rejectionStories->filter(function($story) {
        return empty($story->story_text_improved);
    })->sortByDesc('created_at');

    $latestStory = $notImprovedStories->first();

    $latestStoryWithUser = [
        'name' => $latestStory->user->name,
        'email' => $latestStory->user->email,
        'image_url' => $latestStory->user->image_url,
        'story_type' => $latestStory->story_type,
        'story_text' => $latestStory->story_text,
    ];

    return response()->json(['latest_story' => $latestStoryWithUser], 200);
}


// public function ChatgptResponse(Request $request)
//     {

//          $data = json_decode($request->getContent(), true);
//     if ($data === null || !isset($data['story'])) {
//         return response()->json(['error' => 'Invalid request body'], 400);
//     }
//         $story = $data['story'];

//         $url = 'https://api.openai.com/v1/engines/text-davinci-002/completions';

//         $headers = array(
//             'Content-Type: application/json',
//             'Authorization: Bearer ' . env('openai_API'),
//         );

//         $data = array(
//             'prompt' => $story . 'respond in 10 lines. Interpret this rejected,' . $request->input('story_type') . 'extract the weekness points in it, and tell how to improve it',
//             'temperature' => 0.4,
//             'max_tokens' => 1000,
//             'n' => 1,

//         );

//         $ch = curl_init();

//         curl_setopt($ch, CURLOPT_URL, $url);
//         curl_setopt($ch, CURLOPT_POST, 1);
//         curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
//         curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//         curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

//         $response = curl_exec($ch);

//         curl_close($ch);

//         return $response;
//     }



public function ChatgptResponse(Request $request)
{
    $data = json_decode($request->getContent(), true);
    if ($data === null || !isset($data['story'])) {
        return response()->json(['error' => 'Invalid request body'], 400);
    }

    $story = $data['story'];
    $storyType = $request->input('story_type');

    $url = 'https://api.openai.com/v1/engines/text-davinci-002/completions';
    $headers = array(
        'Content-Type: application/json',
        'Authorization: Bearer ' . env('openai_API'),
    );
    $data = array(
        'prompt' => $story . 'respond in 10 lines. Interpret this rejected,' . $storyType . 'extract the weakness points in it, and tell how to improve it',
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

    $completion = json_decode($response, true);
    $text = $completion['choices'][0]['text'];
    // Insert the analyzed story into the database
    $rejectionStory = new RejectionStory();
    $rejectionStory->story_type = $storyType;
    $rejectionStory->story_text = $story;
    $rejectionStory->story_text_improved = $text;
    $rejectionStory->user_id = auth()->user()->id; // assuming that the user is authenticated
    $rejectionStory->save();

    return $response;
}






}


