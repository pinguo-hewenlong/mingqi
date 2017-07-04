<?php
		
namespace app\puser\controller;
use think\Controller;

class Base extends Controller
{
	public function __construct()
	{
		if(session('?UID') == 1)
		//用户处于登录状态下的执行代码
		{
			//echo '登录状态';
		}
		//用户处于非登录状态下的执行代码
		else
		{
			//$this->error('尚未登录','sso/index/test');		
		}
	}
}