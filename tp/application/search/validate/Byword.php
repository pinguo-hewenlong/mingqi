<?php
namespace app\search\validate;

use think\Validate;

class Byword extends Validate
{
	protected $rule = [
		'word' => 'require|chsAlpha|length:1,50',
		'page' => '\d{1,3}',
		'size' => '\d{1,3}',
	];
	
	protected $message = [
		'word.require' 	=>	'搜索词必须提供',
		'word.chsAlpha'	=>	'搜索词格式错误',
		'word.length'	=>	'搜索词长度不符合要求',
		'page'			=>	'页面数量超出范围',
		'size'			=>	'页面长度超出范围',						
	];	
}
