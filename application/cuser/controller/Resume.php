<?php
	
namespace app\inner\controller;

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
