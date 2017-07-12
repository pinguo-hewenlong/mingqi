<?php
namespace app\cuser\validate;

use think\Validate;

class Rmlist extends Validate
{
	protected $rule = [
		'poid'    =>'[a-fA-F0-9]{32,32}',
		'page'    => '\d{1,25}',
		'perpage' => '\d{1,25}',
	];

	protected $message = [
		'poid'    => '请输入正确的编码',
		'page'    => '请输入正确的数字',
		'perpage' => '请输入正确的数字',
	];
}
