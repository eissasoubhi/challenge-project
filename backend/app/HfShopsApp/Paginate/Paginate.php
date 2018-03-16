<?php

namespace App\HfShopsApp\Paginate;

use App\HfShopsApp\Filters\Filter;
use Illuminate\Database\Eloquent\Builder;

class Paginate
{
    /**
     * Total count of the items.
     *
     * @var int
     */
    protected $total;

    /**
     * Collection of items.
     *
     * @var \Illuminate\Support\Collection
     */
    protected $data;

    /**
     * Paginate constructor.
     *
     * @param \Illuminate\Database\Eloquent\Builder $builder
     * @param \App\HfShopsApp\Filters\Filter $filter
     * @param int $limit
     * @param int $offset
     */
    public function __construct(Builder $builder, Filter $filter, $limit = 20, $offset = 0)
    {
        $limit = request()->get('limit', $limit);

        $offset = request()->get('offset', $offset);

        $this->total = $builder->count();

        $data = $builder->skip($offset)->take($limit)->get();

        $this->data = $filter->apply($data);
    }

    /**
     * Get the total count of the items.
     *
     * @return int
     */
    public function getTotal()
    {
        return $this->total;
    }

    /**
     * Get the paginated collection of items.
     *
     * @return \Illuminate\Support\Collection
     */
    public function getData()
    {
        return $this->data;
    }
}