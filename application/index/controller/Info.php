<?php
namespace app\index\controller;

class Info
{
	//获取省份列表
	public function getProvinces()
	{
		$data	=	array();
		//发送到inner
		$url = BASE_URL.url('/inner/other/getProvinces');
		$return = curlHttp($url,'POST',$data);
		return $return;		
	}
	//获取城市列表
	public function getCity()
	{
		$data['provinceid']	=	request()->post('provinceid');
		
		//发送到inner
		$url = BASE_URL.url('/inner/other/getCity');
		$return = curlHttp($url,'POST',$data);
		return $return;		
	}
	//获取区域列表
	public function getAreas()
	{
		$data['cityid']	=	request()->post('cityid');
		
		//发送到inner
		$url = BASE_URL.url('/inner/other/getAreas');
		$return = curlHttp($url,'POST',$data);
		return $return;		
	}	
	//获取学校列表
	public function getSchool()
	{
		$data	=	array();
		//发送到inner
		$url = BASE_URL.url('/inner/other/getSchool');
		$return = curlHttp($url,'POST',$data);
		return $return;		
	}
	//获取行业列表
	public function getIndustry()
	{
		$data	=	array();
		//发送到inner
		$url = BASE_URL.url('/inner/other/getIndustry');
		$return = curlHttp($url,'POST',$data);
		return $return;		
	}
	//获取职业列表
	public function getPosition()
	{
		$data['iid']	=	request()->post('iid');
		//发送到inner
		$url = BASE_URL.url('/inner/other/getPosition');
		$return = curlHttp($url,'POST',$data);
		return $return;		
	}
	//获取技能列表
	public function getSkills()
	{
		$data	=	array();
		if(isset($_POST['iid']))
		{
			$data['iid']	=	request()->post('iid');
		}		
		//发送到inner
		$url = BASE_URL.url('/inner/other/getSkills');
		$return = curlHttp($url,'POST',$data);
		return $return;		
	}
	//获取薪资列表
	public function getSalary()
	{
		
	}
	//获取行业精英
	public function getElite()
	{
		$data	=	array();
		
		if(input('get.sortid'))
		{
			$data['sortid']	=	trim(request()->get('sortid'));
		}
				
		//发送到inner
		$url = BASE_URL.url('/inner/other/getElite');
		$return = curlHttp($url,'POST',$data);
		if(request()->isAjax())
		{
			return json_decode($return);
		}
		else
		{
			return $return;
		}		
	}
			
}
