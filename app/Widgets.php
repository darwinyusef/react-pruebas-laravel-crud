<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Widgets extends Model {
    
    protected $fillable = [
        'name', 'title', 'width', 'height'
    ];
}
