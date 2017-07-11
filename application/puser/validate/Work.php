<?php
namespace app\puser\validate;

use think\Validate;

class Work extends Validate
{
	protected $rule = [
		'company'=> 'chsAlpha|length:2,50',
		'begintime' => '\d{9,16}',
		'endtime' => '\d{9,16}',
		//'position' => 'chs|length:2,20',
		'description' => 'chs|length:8,200'	
	];
	
	protected $message = [
		'proname' => 'errorCode-1001-1016',
		'begintime' => 'errorCode-1001-1017',
		'endtime' => 'errorCode-1001-1018',
		//'position' => 'errorCode-1001-1019',
		'description' => 'errorCode-1001-1020',											
	];	
}
