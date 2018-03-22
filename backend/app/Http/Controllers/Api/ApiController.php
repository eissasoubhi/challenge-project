<?php

namespace App\Http\Controllers\Api;

use Exception;
use App\Http\Controllers\Controller;
use App\HfShopsApp\Paginate\Paginate;
use App\HfShopsApp\Transformers\Transformer;

class ApiController extends Controller
{
    /** \App\HfShopsApp\Transformers\Transformer
     *
     * @var null
     */
    protected $transformer = null;

    /**
     * Return generic json response with the given data.
     *
     * @param $data
     * @param int $statusCode
     * @param array $headers
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respond($data, $statusCode = 200, $headers = [])
    {
        return response()->json($data, $statusCode, $headers);
    }

    /**
     * Respond with data after applying transformer.
     *
     * @param $data
     * @param int $statusCode
     * @param array $headers
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithTransformer($data, $statusCode = 200, $headers = [])
    {
        $this->checkTransformer();

        if ($data instanceof Collection) {
            $data = $this->transformer->collection($data);
        } else {
            $data = $this->transformer->item($data);
        }

        return $this->respond($data, $statusCode, $headers);
    }

    /**
     * Respond with pagination.
     *
     * @param $paginated
     * @param int $statusCode
     * @param array $headers
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithPagination($paginated, $statusCode = 200, $headers = [])
    {
        $this->checkPaginated($paginated);

        $this->checkTransformer();

        $data = $this->transformer->paginate($paginated);

        return $this->respond($data, $statusCode, $headers);
    }

    /**
     * Check if valid transformer is set.
     *
     * @throws Exception
     */
    private function checkTransformer()
    {
        if ($this->transformer === null || ! $this->transformer instanceof Transformer) {
            throw new Exception('Invalid data transformer.');
        }
    }

    /**
     * Respond with failed login.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondFailedLogin()
    {
        return $this->respond([
            'errors' => [
                'email or password' => 'is invalid',
            ]
        ], 422);
    }

    /**
     * Check if valid paginate instance.
     *
     * @param $paginated
     * @throws Exception
     */
    private function checkPaginated($paginated)
    {
        if (! $paginated instanceof Paginate) {
            throw new Exception('Expected instance of Paginate.');
        }
    }
}