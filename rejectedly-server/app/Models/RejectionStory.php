<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RejectionStory extends Model
{
    use HasFactory;

    protected $table = 'rejection_stories';

    protected $fillable = [
        'story_type',
        'story_text',
        'story_text_improved',
        'user_id',
    ];
}

