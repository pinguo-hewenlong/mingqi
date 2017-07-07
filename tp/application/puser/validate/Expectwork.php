<?php
namespace app\puser\validate;

use think\Validate;

class Expectwork extends Validate
{
	protected $rule = [
		'pname'=> 'chsAlpha|length:1,50',
		'description' => 'chs|length:8,200',
		'salary' => '\d{1,2}',
		'city' => '\d{1,6}',
	];
	
	protected $message = [
		'pname' => 'errorCode-1001-1030',
		'description' => 'errorCode-1001-1031',
		'salary' => 'errorCode-1001-1032',
		'city' => 'errorCode-1001-1033',											
	];	
}
