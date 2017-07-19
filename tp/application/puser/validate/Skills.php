<?php
namespace app\puser\validate;

use think\Validate;

class Skills extends Validate
{
	protected $rule = [
		'pname'=> 'chsAlpha|length:1,50',
		'description' => 'chs|length:8,200',
		'monthstime' => '\d{1,3}',
		'mastery' => '\d{1,2}',
	];
	
	protected $message = [
		'pname' => 'errorCode-1001-1026',
		'description' => 'errorCode-1001-1027',
		'monthstime' => 'errorCode-1001-1028',
		'mastery' => 'errorCode-1001-1029',											
	];	
}
