<?php
namespace app\sso\validate;

use think\Validate;

class LoginP extends Validate
{
    protected $rule = [
 		'gateway'       => ['require','regex'=>'/^mqyc$/'],   
		'type'       	=> ['require','regex'=>'/^puser$|^cuser$/'],
		'username'  	=> ['require','regex' => '13\d{9}|15\d{9}|18\d{9}|17\d{9}'],
        'password'  	=> ['require','regex' => '[a-z0-9A-Z]{8,16}'],
		'captcha|验证码'=> 'require|captcha',		
    ];
	
	protected $message = [
		'gateway'			=> '非法请求', 	
		'username.require'	=> '手机号不能为空',
		'username.regex'	=> '手机号填写错误',
		'password.require'	=> '密码不能为空',
		'password.regex'	=> '密码必须为8-16位的字母和数字',
		'captcha.require'	=> '验证码不能为空',
		'captcha.captcha'	=> '验证码填写错误',	
	];

}