<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/{path1}', function () {
    return view('welcome');
});

Route::get('/{path1}/{path2}', function () {
    return view('welcome');
});

//Route::get('/{pathMatch}', function (){
//   return view('welcome');
//})->where('pathMatch', ".*");
