<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Group;
use App\Models\User;

class GroupController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
           'grp_name' => 'required|string',
           'grp_description' => 'required|string'
        ]);

        $groups = new Group;
        $groups->grp_name = $request->input('grp_name');
        $groups->grp_description = $request->input('grp_description');
        $groups->save();

        return response()->json(['message' => 'Group created successfully'], 201);

    }

    public function addUsersToGroup(Request $request)
{
    $request->validate([
            'group_id' => 'required|exists:groups,id',
            'user_ids' => 'required|array',
        ]);

        $group = Group::find($request->group_id);

        if (!$group) {
            return response()->json([
                'message' => 'Group not found'
            ], 404);
        }

        foreach ($request->user_ids as $user_id) {
            $user = User::find($user_id);

            if (!$user) {
                return response()->json([
                    'message' => "User with ID $user_id not found"
                ], 404);
            }

            $group->users()->attach($user_id);
        }

        return response()->json([
            'message' => 'Users added to group successfully'
        ], 201);
}



}
