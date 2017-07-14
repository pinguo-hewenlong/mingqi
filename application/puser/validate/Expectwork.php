<?php
namespace app\puser\validate;

use think\Validate;

class Expectwork extends Validate
{
	protected $rule = [
		'pname'=> '\d{1,8}',
		'description' => '\d{1,8}',
		'salary' => '\d{1,8}',
		'city' => '\d{1,8}',
	];
	
	protected $message = [
		'pname' => 'errorCode-1001-1030',
		'description' => 'errorCode-1001-1031',
		'salary' => 'errorCode-1001-1032',
		'city' => 'errorCode-1001-1033',											
	];	
}
