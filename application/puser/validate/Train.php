<?php
namespace app\puser\validate;

use think\Validate;

class Train extends Validate
{
	protected $rule = [
		'school'=> 'chsAlpha|length:4,50',
		'begintime' => '\d{9,16}',
		'endtime' => '\d{9,16}',
		'skills' => 'chs|length:2,50',
		'description' => 'chs|length:2,50'	
	];
	
	protected $message = [
		'school' => 'errorCode-1001-1021',
		'begintime' => 'errorCode-1001-1022',
		'endtime' => 'errorCode-1001-1023',
		'skills' => 'errorCode-1001-1024',
		'description' => 'errorCode-1001-1025',											
	];	
}