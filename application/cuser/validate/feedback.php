<?php
namespace app\cuser\validate;

use think\Validate;

class Feedback extends Validate
{
	protected $rule = [
		'poid'=> 'require|alphaNum|length:6,32',
	];
	
	protected $message = [
		'poid' => 'errorCode-1002-1015',									
	];	
}