<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PetsController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/* Pets Routes */
Route::get('/pets/categories', [PetsController::class, 'getCategories']);
Route::get('/pets/tags', [PetsController::class, 'getTags']);
Route::get('/pets/status', [PetsController::class, 'getStatus']);

Route::apiResource('pets', PetsController::class)->only('index', 'store', 'show', 'update', 'destroy');


