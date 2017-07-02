<?php
namespace app\sso\validate;

use think\Validate;

class ForgetPassword extends Validate
{
    protected $rule = [
		'username'  	=> ['require','regex' => '13\d{9}|15\d{9}|18\d{9}|17\d{9}'],
		'captcha|验证码'	=> 'require|captcha',
		'smsCode'		=>	['require','regex' => '\d{6}'],
    ];
	
	protected $message = [	
		'username.require'	=> '手机号不能为空',
		'username.regex'	=> '手机号填写错误',
		'captcha.require'	=> '验证码不能为空',
		'captcha.captcha'	=> '验证码填写错误',	
		'smsCode'			=>	'短信验证码填写错误',		
	];

}