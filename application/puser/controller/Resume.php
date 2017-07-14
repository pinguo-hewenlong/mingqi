<?php
namespace app\puser\controller;
use think\Controller;

class Resume extends Base
{
	protected $data;	
	//初始化
	public function __construct()
	{
		parent::__construct();
		$this->data['uid'] = session('UID');
	}
	//查看自己的简历--(功能尚未添加)
	public function view()
	{
		//发送到inner
		$url = BASE_URL.url('/inner/puser/resumeview');
		$return = curlHttp($url,'POST',$this->data);
		return $return;		
	}
	//简历投递
	public function send()
	{
		//职位ID
		$this->data['poid']			=	request()->post('poid');
		$this->data['sendtime']		=	time();
		//调用验证器:Puser\valisate\send
		$validateResult = $this->validate($this->data,'Send');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			return json($return);

		}
		//return $this->data;		
		//发送到inner
		$url = BASE_URL.url('/inner/resume/resumesend');
		$return = curlHttp($url,'POST',$this->data);
		return json_decode($return);	
	}

	//获取简历状态

	public function getStatus()
	{
		//职位ID
		$this->data['poid']			=	request()->get('poid');
		//调用验证器:Puser\valisate\send
		$validateResult = $this->validate($this->data,'Send');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;
			return json($return);

		}
		//发送到inner
		$url = BASE_URL.url('/inner/resume/resumegetstatus');
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

	//获取简历状态

	
		
}