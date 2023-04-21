<?php

namespace App\Models;

use App\Http\Controllers\RejectionStoriesController;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = ['comment_text', 'user_id', 'story_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function story()
    {
        return $this->belongsTo(RejectionStoriesController::class);
    }
}
