<?php

namespace App\HfShopsApp\Filters;

use ReflectionClass;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

abstract class BuilderFilter extends Filter
{
    /**
     * @var \Illuminate\Database\Eloquent\Builder
     */
    protected $builder;

    /**
     * Apply all the requested filters if available.
     *
     * @param \Illuminate\Database\Eloquent\Builder $builder
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function apply($builder)
    {
        $this->builder = $builder;

        foreach ($this->getFilters() as $name => $value) {
            if (method_exists($this, $name)) {
                if ($value) {
                    $this->$name($value);
                } else {
                    $this->$name();
                }
            }
        }

        return $this->builder;
    }
}