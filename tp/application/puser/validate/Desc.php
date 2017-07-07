<?php
namespace app\puser\validate;

use think\Validate;

class Desc extends Validate
{
	protected $rule = [
		'desc' => 'chs|length:8,200',
	];
	
	protected $message = [
		'desc' => '自我评价填写错误',										
	];	
}
