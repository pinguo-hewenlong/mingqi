<?php
namespace app\cuser\validate;

use think\Validate;

class Milepost extends Validate
{
	protected $rule = [
		'time' => '\d{9,16}',
		'title' => 'length:2,200',										
	];
	
	protected $message = [
		'title' => '历程描述不符合规范',
		'time' => 'errorCode-1002-1014',																	
	];	
	
}
