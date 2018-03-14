<?php

namespace App\Http\Controllers\Api;

use Exception;
use App\Http\Controllers\Controller;
use App\HfShopsApp\Paginate\Paginate;

class ApiController extends Controller
{
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

        $data = $this->paginate($paginated);

        return $this->respond($data, $statusCode, $headers);
    }

    /**
     * Transform a paginated item.
     *
     * @param Paginate $paginated
     * @return array
     */
    public function paginate(Paginate $paginated)
    {
        $data = [
            'data' => $paginated->getData()->map([$this, 'transform'])
        ];

        return array_merge($data, [
            'total' => $paginated->getTotal()
        ]);
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