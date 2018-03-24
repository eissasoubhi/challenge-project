<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'v1', 'namespace' => 'Api'], function () {

    Route::post('users/login', 'AuthController@login');
    Route::post('users', 'AuthController@register');

    Route::get('user', 'UserController@index');

    Route::post('shops/{shop}/favorite', 'FavoriteController@add');
    Route::delete('shops/{shop}/favorite', 'FavoriteController@remove');

    Route::post('shops/{shop}/dislike', 'DislikeController@add');

    Route::resource('shops', 'ShopController', [
        'only' => [
            'index', 'show'
        ]
    ]);
});