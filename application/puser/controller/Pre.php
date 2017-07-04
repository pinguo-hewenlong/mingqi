<?php
/*
 * 此页面提供用户首次注册填写信息的功能
 */

namespace app\puser\controller;

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
		$url = BASE_URL.url('/inner/puser/pregetfirst');
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
