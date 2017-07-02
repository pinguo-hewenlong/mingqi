<?php
namespace app\puser\validate;

use think\Validate;

class Send extends Validate
{
	protected $rule = [
		'poid'=> 'require|alphaNum|length:6,32',
	];
	
	protected $message = [
		'poid' => 'errorCode-1001-1037',									
	];	
}
