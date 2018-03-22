<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\UpdateUser;
use App\HfShopsApp\Transformers\UserTransformer;

class UserController extends ApiController
{
    /**
     * UserController constructor.
     *
     * @param UserTransformer $transformer
     */
    public function __construct(UserTransformer $transformer)
    {
        $this->transformer = $transformer;
        $this->middleware('auth.api');
    }

    /**
     * Get the authenticated user.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return $this->respondWithTransformer(auth()->user());
    }
}
