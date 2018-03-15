<?php

namespace App\HfShopsApp\Transformers;

use Illuminate\Support\Collection;
use App\HfShopsApp\Paginate\Paginate;

abstract class Transformer
{
    /**
     * Resource name of the json object.
     *
     * @var string
     */
    protected $resourceName = 'data';

    /**
     * Transform a paginated item.
     *
     * @param Paginate $paginated
     * @return array
     */
    public function paginate(Paginate $paginated)
    {
        $resourceName = str_plural($this->resourceName);

        $countName = str_plural($this->resourceName) . 'Count';

        $data = [
            $resourceName => $paginated->getData()->map([$this, 'transform'])
        ];

        return array_merge($data, [
            $countName => $paginated->getTotal()
        ]);
    }

    /**
     * Apply the transformation.
     *
     * @param $data
     * @return mixed
     */
    public abstract function transform($data);
}
