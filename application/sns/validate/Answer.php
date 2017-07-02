<?php
namespace app\sns\validate;

use think\Validate;

class Answer extends Validate
{
	protected $rule = [
		'content' => 'chs|length:8,200',
	];
	
	protected $message = [
		'content' => '回复内容填写错误',									
	];	
}
