<?php
namespace app\sso\validate;

use think\Validate;

class GetMsgCode extends Validate
{
    protected $rule = [
		'username'  	=> ['require','regex' => '13\d{9}|15\d{9}|18\d{9}|17\d{9}'],		
    ];
	
	protected $message = [	
		'username.require'	=> '手机号不能为空',
	];

}