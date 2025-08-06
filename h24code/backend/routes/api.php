<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SnippetController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/snippets', [SnippetController::class, 'index']);
Route::post('/snippets', [SnippetController::class, 'store']);
