<?php
namespace app\puser\validate;

use think\Validate;

class Edu extends Validate
{
	protected $rule = [
		'school'=> 'chsAlpha|length:2,50',
		//'begintime' => '\d{9,16}',
		'endtime' => '\d{9,16}',
		'major' => 'chs|length:2,50',
		'record' => 'chs|length:2,50'	
	];
	
	protected $message = [
		'school' => 'errorCode-1001-1006',
		//'begintime' => 'errorCode-1001-1007',
		'endtime' => 'errorCode-1001-1008',
		'major' => 'errorCode-1001-1009',
		'record' => 'errorCode-1001-1010',											
	];	
}
