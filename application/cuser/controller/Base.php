<?php
		
namespace app\cuser\controller;
use think\Controller;
use think\Session;

class Base extends Controller
{
	public function __construct()
	{
		if(Session::has('UID') == 1)
		//用户处于登录状态下的执行代码
		{
			//echo '登录状态';
		}
		//用户处于非登录状态下的执行代码
		else
		{
			jsjump("http://127.0.0.1/mingqiyoucai/web/public/pages/logo-p-c.html");		
		}
	}
}
?>