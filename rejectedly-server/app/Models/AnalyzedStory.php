<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnalyzedStory extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'rejection_story_id',
        'analysis_text',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function rejectionStory()
    {
        return $this->belongsTo(RejectionStory::class);
    }
}
