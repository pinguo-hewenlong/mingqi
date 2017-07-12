<?php
	
namespace app\cuser\controller;

class Resume extends Base
{
	protected $data;	
	//初始化
	public function __construct()
	{
		parent::__construct();
		$this->data['uid'] = session('UID');
	}
	//简历列表 分页
	public function rmList(){
		//@todo 简历列表 逻辑  并分页
		//获取职位id
		//exit("aaa");
		$this->data['poid']				    =	trim(request()->post('poid'));
		//分页页码
		$this->data['page']				    =	trim(request()->post('page'));
		//每页条数
		$this->data['perpage']				=	trim(request()->post('perpage'));
		//var_dump($this->data);exit;
		//调用验证器:Puser\validate\Rmlist
		$validateResult = $this->validate($this->data,'Rmlist');
//		输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;
			return json($return);
		}
		//发送到inner
		$url = BASE_URL.url('/inner/resume/resumeList');
		$return = curlHttp($url,'POST',$this->data);
		return $return;
	}
	//简历反馈
	public function feedback()
	{
		//职位ID
		$this->data['poid']				=	trim(request()->post('poid'));
		$this->data['feedbacktime']		=	time();
		$this->data['status']			=	trim(request()->post('status'));
		//调用验证器:Puser\valisate\send
		$validateResult = $this->validate($this->data,'Feedback');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			return json($return);

		}		
		//发送到inner
		$url = BASE_URL.url('/inner/resume/resumefeedback');
		$return = curlHttp($url,'POST',$this->data);
		return $return;	
	}

}
