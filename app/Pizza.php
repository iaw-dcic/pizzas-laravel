<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Pizza extends Eloquent {

    protected $collection = 'pizzas';
}
