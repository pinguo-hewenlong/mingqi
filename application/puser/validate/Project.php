<?php
namespace app\puser\validate;

use think\Validate;

class Project extends Validate
{
	protected $rule = [
		'proname'=> 'chsAlpha|length:4,50',
		'begintime' => '\d{9,16}',
		'endtime' => '\d{9,16}',
		'youworks' => 'chs|length:8,200',
		'description' => 'chs|length:8,200'	
	];
	
	protected $message = [
		'proname' => 'errorCode-1001-1011',
		'begintime' => 'errorCode-1001-1012',
		'endtime' => 'errorCode-1001-1013',
		'youworks' => 'errorCode-1001-1014',
		'description' => 'errorCode-1001-1015',											
	];	
}
