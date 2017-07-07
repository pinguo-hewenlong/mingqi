<?php
namespace app\cuser\validate;

use think\Validate;

class Post extends Validate
{
	protected $rule = [
		'title' => 'chsAlpha|length:1,16',
		'content' => 'chs|length:8,1000',
		'city' => '\d{1,16}',
		'workexp' => '\d{1,2}',
		'eduction' => '\d{1,16}',
		'salary' => '\d{1,16}',	
		'team' => '\d{1,2}',
		'begintime' => '\d{9,16}',
		'endtime' => '\d{9,16}',										
	];
	
	protected $message = [
		'title' => '职位标题格式错误',
		'content' => '职位描述不符合规范',
		'city' => 'errorCode-1002-1006',						
		'workexp'   => 'errorCode-1002-1007',
		'eduction' => 'errorCode-1002-1008',
		'salary' => 'errorCode-1002-1009',
		'team' => 'errorCode-1002-1010',
		'begintime' => 'errorCode-1002-1011',
		'endtime' => 'errorCode-1002-1012',											
	];	
	
}
