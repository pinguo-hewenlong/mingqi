<?php
namespace app\puser\validate;

use think\Validate;

class Poid extends Validate
{
    protected $rule = [
        'poid' => '\d{1,25}',
    ];

    protected $message = [
        'poid' => 'errorCode-1002-1015',
    ];
}
