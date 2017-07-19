<?php
namespace app\file\controller;
use think\Session;
use think\Controller;

class Base extends Controller
{
	public function __construct()
	{
		
		//测试信息
		//session('UID','7');
		
		if(Session::has('UID') == 1)
		//用户处于登录状态下的执行代码
		{
			
		}		
		//用户处于非登录状态下的执行代码
		else
		{
			$this->error('尚未登录','sso/index/test');		
		}		
	}
}
