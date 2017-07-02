<?php
namespace app\inner\controller;

use think\Controller;

use think\Db;

class Other extends Base
{
	public function __construct()
	{
		parent::__construct();		
	}
	
	//获取省份列表
	public function getProvinces()
	{
		
		
		$request	=	db('sys_provinces')->select();
		
		if($request)
		{
			
			return json($request);
		}
		else
		{
			$return['status']	=	0;
			$return['message']	=	'内部错误,省份无法显示';
			return json($return);
		}
	}
	//获取城市列表
	public function getCity()
	{
		$data['provinceid']	=	request()->post('provinceid');
	
		$request	=	db('sys_cities')->where($data)->select();
		if($request)
		{
			return json($request);
		}
		else
		{
			$return['status']	=	0;
			$return['message']	=	'内部错误,城市无法显示';
			return json($return);
		}		
	}
	//获取区域列表
	public function getAreas()
	{
		$data['cityid']	=	request()->post('cityid');
	
		$request	=	db('sys_areas')->where($data)->select();
		if($request)
		{
			return json($request);
		}
		else
		{
			$return['status']	=	0;
			$return['message']	=	'内部错误,区域无法显示';
			return json($return);
		}		
	}	
	//获取学校列表
	public function getSchool()
	{
		$request	=	db('sys_school')->select();
		if($request)
		{
			return json($request);
		}
		else
		{
			$return['status']	=	0;
			$return['message']	=	'内部错误,学校无法显示';
			return json($return);
		}
	}
	//获取行业列表
	public function getIndustry()
	{
		$request	=	db('sys_industry')->select();
		if($request)
		{
			return json($request);
		}
		else
		{
			$return['status']	=	0;
			$return['message']	=	'内部错误,行业无法显示';
			return json($return);
		}
	}
	//获取职业列表
	public function getPosition()
	{
		$data['iid']	=	request()->post('iid');
	
		$request	=	db('sys_position')->where($data)->select();
		if($request)
		{
			return json($request);
		}
		else
		{
			$return['status']	=	0;
			$return['message']	=	'内部错误,职业无法显示';
			return json($return);
		}		
	}
	//获取技能列表
	public function getSkills()
	{
		$request	=	db('sys_skills')->select();
		if($request)
		{
			return json($request);
		}
		else
		{
			$return['status']	=	0;
			$return['message']	=	'内部错误,技能无法显示';
			return json($return);
		}
	}			
}