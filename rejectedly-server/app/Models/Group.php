<?php

namespace App\Models;
use App\Models\Group;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
   protected $table = 'groups';

    protected $fillable = [
        'grp_name',
        'grp_description',
    ];

    public function users()
    {
       return $this->belongsToMany(User::class);
    }

}
