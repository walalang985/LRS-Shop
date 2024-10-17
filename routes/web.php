<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API;
use App\Http\Controllers\LOGIC;
use App\Http\Controllers\VIEW;
Route::get('/', [VIEW::class,'index']);
Route::get("/dashboard",[VIEW::class,'dashboard']);

Route::post('/add-item',[API::class,'add_item']);

Route::get('/items',[API::class,'item_list']);
Route::get('/item/get',[API::class,'get_item']);