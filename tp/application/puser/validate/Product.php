<?php
namespace app\puser\validate;

use think\Validate;

class Product extends Validate
{
	protected $rule = [
		'plink'=> ['regex' => '/^(http|https):\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?$/'],
		'description' => 'chs|length:8,200',
		'imgurl' => ['regex' => '/^(http|https):\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?$/'],
	];
	
	protected $message = [
		'plink' => 'errorCode-1001-1034',
		'description' => 'errorCode-1001-1035',
		'imgurl' => 'errorCode-1001-1036',										
	];	
}
