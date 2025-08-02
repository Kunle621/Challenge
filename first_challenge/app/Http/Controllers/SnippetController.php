<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Snippet; 

class SnippetController extends Controller
{
    public function home()
    {
        return view('welcome');
    }

    public function liste() {
    $snippets = Snippet::all(); 
    return view('liste', compact('snippets')); 
    }
    
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'category' => 'required|in:php,html,css',
            'code' => 'required|string',
        ]);

        Snippet::create($validated); 

        return redirect()->back()->with('message', 'Code enregistré avec succès !');
    }
}
