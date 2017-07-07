<?php
namespace app\cuser\validate;

use think\Validate;

class Info extends Validate
{
	protected $rule = [
		'companyname' => 'chsAlpha|length:1,16',
		'hremail' => 'email',
		'thumburl' => ['regex' => '/^(http|https):\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?$/'],
		'comurl' => ['regex' => '/^(http|https):\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?$/'],		
		'comphone' => ['regex' => '13\d{9}|15\d{9}|18\d{9}|17\d{9}'],
		'city' => '\d{1,16}',
		'hrname' => 'chsAlpha|length:1,6',
		'hrphone' =>  ['regex' => '13\d{9}|15\d{9}|18\d{9}|17\d{9}'],
		'nature' => '\d{1,16}',
		'scale' => '\d{1,16}',
		'description' => 'chs|length:8,200',
		'address' => 'chsAlpha|length:8,200',		
		'isrz' => '\d{1,16}',									
	];
	
	protected $message = [
		'companyname' => '企业名称填写错误',
		'hremail' => 'hr邮箱填写错误',
		'thumburl' => 'errorCode-1002-1001',						
		'comphone'   => '企业手机号码填写错误',
		'city' => 'errorCode-1002-1002',
		'hrname' => 'hr姓名填写错误',
		'hrphone' => 'hr手机号码填写错误',
		'nature' => 'errorCode-1002-1003',
		'scale' => 'errorCode-1002-1004',
		'description' => '企业描述不符合规范',
		'isrz' => 'errorCode-1002-1005',											
	];	
}
