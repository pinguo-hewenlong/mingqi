<?php
namespace app\sso\validate;

use think\Validate;

class ModifyPassword extends Validate
{
    protected $rule = [
 		'gateway'       => ['require','regex'=>'/^mqyc$/'],   
		'type'       	=> ['require','regex'=>'/^puser$|^cuser$/'],    
        'password'  	=> ['require','regex' => '[a-z0-9A-Z]{8,16}'],
		'password2'		=> ['require','regex' => '[a-z0-9A-Z]{8,16}','confim:password'],		
    ];
	
	protected $message = [	
		'password.require'	=> '密码不能为空',
		'password.regex'	=> '密码必须为8-16位的字母和数字',
		'password2.require'	=> '重复密码不能为空',
		'password2.regex'	=> '重复密码必须为8-16位的字母和数字',
		'password.confim'	=> '两次输入的密码不一致',				
	];

}