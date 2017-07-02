<?php
namespace app\inner\controller;

class Base
{
	function __construct()
	{	

	//设置inner接口允许访问的IP
	
	//老版本获取ip的函数,如果使用了cdn的话请使用本函数
	//$ip = get_client_ip(,true);
	$ip	=request()->ip();
	
	//echo $ip;
	
	if($ip	==	BASE_DOMAIN)
	{
		//如果是正确的ip，就说明是内部访问
	}
	else
	{
		//如果不是允许的ip，随便跳转到一个页面
		//jsjump("http://127.0.0.1");
	}
	}
}
