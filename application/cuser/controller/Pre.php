<?php
/*
 * 此页面提供用户首次注册填写信息的功能
 */

namespace app\cuser\controller;

class Pre extends Base
{
	private $data;
	
	public function __construct()
	{
		parent::__construct();
		$this->data['uid']	=	session('UID');
	}
	
	//判断用户首次登录信息填写进度
	
	public function getFirst()
	{
		
		//发送到inner
		$url = BASE_URL.url('/inner/cuser/pregetfirst');
		$return = curlHttp($url,'POST',$this->data);
		
		
		if(request()->isAjax())
		{
			return json_decode($return);
		}		
		else
		{
			return $return;
		}
	}
	
	//用户登录流程完毕之后写入数据
	public function setFirst()
	{
		//发送到inner
		$url = BASE_URL.url('/inner/cuser/presetfirst');
		$return = curlHttp($url,'POST',$this->data);
		
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
