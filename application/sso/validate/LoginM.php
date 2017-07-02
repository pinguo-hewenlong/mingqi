<?php
namespace app\sso\validate;

use think\Validate;

class LoginM extends Validate
{
    protected $rule = [
 		'gateway'       => ['require','regex'=>'/^mqyc$/'],   
		'type'       	=> ['require','regex'=>'/^puser$|^cuser$/'],
		'username'  	=> ['require','regex' => '13\d{9}|15\d{9}|18\d{9}|17\d{9}'],
        'msgCode'  		=> ['require','regex' => '\d{6}'],
		'captcha|验证码'=> 'require|captcha',		
    ];
	
	protected $message = [
		'gateway'			=> '非法请求', 	
		'username.require'	=> '手机号不能为空',
		'username.regex'	=> '手机号填写错误',
		'password.require'	=> '短信验证码不能为空',
		'password.regex'	=> '短信验证码只能为6位数字',
		'captcha.require'	=> '验证码不能为空',
		'captcha.captcha'	=> '验证码填写错误',	
	];

}