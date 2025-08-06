<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Snippet;

class SnippetController extends Controller
{
    // GET /api/snippets
    public function index()
    {
        return response()->json(Snippet::all());
    }

    // POST /api/snippets
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'category' => 'required|string',
            'code' => 'required|string',
        ]);

        $snippet = Snippet::create($request->only([
            'title', 'description', 'category', 'code'
        ]));

        return response()->json($snippet, 201);
    }
}
