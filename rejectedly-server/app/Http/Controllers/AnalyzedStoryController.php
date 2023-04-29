<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AnalyzedStory;

class AnalyzedStoryController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'user_id' => 'required|exists:users,id',
            'rejection_story_id' => 'required|exists:rejection_stories,id',
            'analysis_text' => 'required',
        ]);

        AnalyzedStory::create($data);

        return response()->json(['message' => 'Analyzed story created successfully']);
    }
}

