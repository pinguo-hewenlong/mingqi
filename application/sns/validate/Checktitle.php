<?php
namespace app\sns\validate;

use think\Validate;

class Checktitle extends Validate
{
	protected $rule = [
		'title'=> 'require|chs|length:2,20',
	];
	
	protected $message = [
		'title' => '问题格式不正确',									
	];	
}
