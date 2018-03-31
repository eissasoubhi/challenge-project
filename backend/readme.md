# HF webCodingChallenge API

This is the API of the [HF webCodingChallenge](https://github.com/eissasoubhi/challenge-project "HF webCodingChallenge") project build with [Laravel](https://laravel.com)

----------

# Getting started

## Installation

Please check the official laravel installation guide for server requirements before you start. [Official Documentation](https://laravel.com/docs/5.4/installation#installation)


Clone the repository

    git clone git@github.com:eissasoubhi/challenge-project.git

Switch to the repo folder

    cd challenge-project

Install all the dependencies using composer

    composer install

Copy the example env file and make the required configuration changes in the .env file

    cp .env.example .env

Generate a new application key

    php artisan key:generate

Generate a new JWT authentication secret key

    php artisan jwt:generate

Run the database migrations (**Create the database and Set the connection in .env before migrating**)

    php artisan migrate

Start the local development server

    php artisan serve

You can now access the server at http://localhost:8000

**TL;DR command list**

    git@github.com:eissasoubhi/challenge-project.git
    cd challenge-project
    composer install
    cp .env.example .env
    php artisan key:generate
    php artisan jwt:generate 
    
**Make sure you set the correct database connection information before running the migrations** [Environment variables](#environment-variables)

    php artisan migrate
    php artisan serve

## Database seeding

**Populate the database with seed data with relationships which includes users, shops, favorites and dislikes. This can help you to quickly start testing the api or couple a frontend and start using it with ready content.**

Open the DummyDataSeeder and set the property values as per your requirement

    database/seeds/DummyDataSeeder.php

Run the database seeder and you're done

    php artisan db:seed

***Note** : It's recommended to have a clean database before seeding. You can refresh your migrations at any point to clean the database by running the following command*

    php artisan migrate:refresh

## API Specification

More information regarding the project can be found here https://github.com/hiddenfounders/web-coding-challenge 

----------

# Code overview

## Dependencies

- [jwt-auth](https://github.com/tymondesigns/jwt-auth) - For authentication using JSON Web Tokens
- [laravel-cors](https://github.com/barryvdh/laravel-cors) - For handling Cross-Origin Resource Sharing (CORS)

## Folders

- `app` - Contains all the Eloquent models
- `app/Http/Controllers/Api` - Contains all the api controllers
- `app/Http/Middleware` - Contains the JWT auth middleware
- `app/Exceptions` - Contains the application exceptions handler
- `app/Http/Requests/Api` - Contains all the api form requests
- `app/HfShopsApp/Favorite` - Contains the files implementing the favorite feature
- `app/HfShopsApp/Dislike` - Contains the files implementing the dislike feature
- `app/HfShopsApp/Distance` - Contains the files handling the distance feature 
- `app/HfShopsApp/Filters` - Contains the query filters used for filtering api requests
- `app/HfShopsApp/Paginate` - Contains the pagination class used to paginate the result
- `app/HfShopsApp/Transformers` - Contains all the data transformers
- `config` - Contains all the application configuration files
- `database/factories` - Contains the model factory for all the models
- `database/migrations` - Contains all the database migrations
- `database/seeds` - Contains the database seeder
- `routes` - Contains all the api routes defined in api.php file
- `tests` - Contains all the application tests
- `tests/Feature/Api` - Contains all the api tests

## Environment variables

- `.env` - Environment variables can be set in this file

***Note** : You can quickly set the database information and other variables in this file and have the application fully working.*

----------
 
# Authentication
 
This applications uses JSON Web Token (JWT) to handle authentication. The token is passed with each request using the `Authorization` header with `Token` scheme. The JWT authentication middleware handles the validation and authentication of the token. Please check the following sources to learn more about JWT.
 
- https://jwt.io/introduction/
- https://self-issued.info/docs/draft-ietf-oauth-json-web-token.html

----------

# Cross-Origin Resource Sharing (CORS)
 
This applications has CORS enabled by default on all API endpoints. The default configuration allows requests from `http://localhost:8080` and `http://localhost:8000` to help speed up your frontend testing. **The CORS allowed origins can be changed by setting them in the `.env` file**. Please check the following sources to learn more about CORS.
 
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
- https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
- https://www.w3.org/TR/cors
----------

# Features testing
 
Laravel comes with support for [testing with PHPUnit](https://laravel.com/docs/5.4/testing).

Before running the tests **Create the testing database and Set the connection in .env**

To run the tests make sure you are in Laravel root folder then type `vendor\bin\phpunit` and hit Enter.

# User interface

The UI using this API can be found here https://github.com/eissasoubhi/challenge-project/tree/master/frontend
