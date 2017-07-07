<?php
namespace app\cuser\validate;

use think\Validate;

class Team extends Validate
{
	protected $rule = [
		'tname' => 'chsAlpha|length:1,16',
		'tdesc' => 'chs|length:8,1000',
		'state' => '\d{1,2}',										
	];
	
	protected $message = [
		'tname' => '团队名称不符合规范',
		'tdesc' => '团队描述不符合规范',
		'state' => 'errorCode-1002-1013',																
	];	
	
}
