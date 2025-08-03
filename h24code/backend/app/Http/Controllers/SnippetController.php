<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SnippetController extends Controller
{
     public function test()
    {
        return response()->json(['message' => 'API OK depuis SnippetController']);
    }
}
