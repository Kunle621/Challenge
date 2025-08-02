<?php

use App\Http\Controllers\SnippetController;
use Illuminate\Support\Facades\Route;

Route::get('/', [SnippetController::class, 'home'])->name('home');
Route::post('/snippets/store', [SnippetController::class, 'store'])->name('store');
Route::get('/liste', [SnippetController::class, 'liste'])->name('liste');
