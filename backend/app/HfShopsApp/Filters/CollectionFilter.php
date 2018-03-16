<?php

namespace App\HfShopsApp\Filters;

use ReflectionClass;
use Illuminate\Http\Request;
use \Illuminate\Support\Collection;

abstract class CollectionFilter extends Filter
{
    /**
     * @var \Illuminate\Support\Collection
     */
    protected $collection;

    /**
     * Apply all the requested filters if available.
     *
     * @param \Illuminate\Support\Collection $collection
     * @return \Illuminate\Support\Collection
     */
    public function apply($collection)
    {
        $this->collection = $collection;

        foreach ($this->getFilters() as $name => $value) {
            if (method_exists($this, $name)) {
                if ($value) {
                    $this->$name($value);
                } else {
                    $this->$name();
                }
            }
        }

        return $this->collection;
    }
}