<?php
namespace app\puser\validate;

use think\Validate;

class Info extends Validate
{
	protected $rule = [
		'realname' => 'chsAlpha|length:2,10',
		'email' => 'email',
		'phone' => ['regex' => '13\d{9}|15\d{9}|18\d{9}|17\d{9}'],
		//'thumburl' => ['regex' => '/^(http|https):\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?$/'],
		'eduction' => 'chsAlpha|length:2,10',
		'city' => 'chsAlpha|length:1,10',
		'gender' => 'chsAlpha|length:1,10',
		'birth' => '\d{9,16}',	
		'workxp' =>'',
	];
	
	protected $message = [
		'realname.require' => '姓名必须填写',
		'realname.chsAlpha' => '姓名格式错误',
		'realname.length' => '姓名长度错误',						
		'realname.length'   => '姓名长度错误',
		'email' => '邮箱格式错误',
		'phone' => '手机格式错误',
		'thumburl' => 'errorCode-1001-1001',
		'eduction' => 'errorCode-1001-1002',
		'city' => 'errorCode-1001-1003',
		'gender' => 'errorCode-1001-1004',
		'birth' => 'errorCode-1001-1005',
		'workxp' =>'errorCode-1001-10086',											
	];	
}
