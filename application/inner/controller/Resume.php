<?php
	
namespace app\inner\controller;

class Resume extends Base
{
	public function __construct()
	{
		parent::__construct();			
	}
	
	
	//简历投递
	public function resumeSend()
	{
		//个人用户uid
		$data['uid']		=	request()->post('uid');
		//投递的职位id
		$data['poid']		=	request()->post('poid');
		//投递时间
		$data['sendtime']	=	request()->post('sendtime');
		//反馈状态
		$data['status']		=	0;
		
		$request	=	db('puser_resumesend')->insert($data);
		
		if($request == 1)
		{
			$return['status']	=	1;
			$return['message']	=	'职位申请成功';
			return json($return);
		}
		else
		{
			$return['status']	=	0;
			$return['message']	=	'职位申请失败';
			return json($return);
		}
		
	}
	//简历反馈
	public function resumeFeedback()
	{
		//个人用户uid
		$data['uid']			=	request()->post('uid');
		//投递的职位id
		$data['poid']			=	request()->post('poid');
		//投递时间
		$data['feedbacktime']	=	request()->post('feedbacktime');
		//反馈状态
		$data['status']			=	request()->post('status');
		
		$request	=	db('puser_resumesend')->insert($data);
		
		if($request == 1)
		{
			$return['status']	=	1;
			$return['message']	=	'职位申请成功';
			return json($return);
		}
		else
		{
			$return['status']	=	0;
			$return['message']	=	'职位申请失败';
			return json($return);
		}
		
	}
	
	
	//根据uid查询职位
	public function resumeQueryList()
	{
		//企业用户uid
		$data['uid']		=	request()->post('uid');		
		
		//通过企业uid查询职位列表
		$request	=	db('cuser_post')->where($data)->select();
		
		
		if($request)
		{
			return json($return);
		}
		else
		{
			$return['status']	=	'';
			$return['message']	=	'error';
			return json($return);
		}
		
		
	}	

}
