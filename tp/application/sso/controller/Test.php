<?php

namespace app\sso\controller;

use app\index\controller\Info;

use think\Cache;	

class Test
{
	
	//
	public function index()
	
	{
	
		
		$obj	=	new Info();
		
		dump($obj);
	}
	
	
	//获取节点配置信息
	public function getConfig()
	{
		//获取节点名称
		$item	=	request()->get('item');
		
		return json(config($item));
	}
	
	
	//获取缓存信息
	public function getCache()
	{
		//Cache::set('name',555,3600);
		Cache::inc('name');
		dump(Cache::get('name'));
	}

}
