<?php
namespace app\puser\validate;

use think\Validate;

class Arrival extends Validate
{
    protected $rule = [
        'time' => '\d{1,10}',
    ];

    protected $message = [
        'time' => '自我评价填写错误',
    ];
}
