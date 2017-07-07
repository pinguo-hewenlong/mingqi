<?php
namespace app\sns\validate;

use think\Validate;

class Question extends Validate
{
	protected $rule = [
		'title'=> 'chs|length:2,20',
		'content' => 'chs|length:8,200',
	];
	
	protected $message = [
		'title' => '问题格式不正确',
		'content' => '问题描述格式不正确',									
	];	
}
