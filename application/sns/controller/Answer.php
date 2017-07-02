<?php
namespace app\sns\controller;
use think\Controller;

class Answer extends Base
{
	private $data;
	
	public function __construct()
	{
		parent::__construct();
		$this->data['uid'] = session('UID');		
	}
	//发表回复
	public function publish()
	{
		if(request()->isPost())
		{
			//获取发布的uid
			$data['uid']			=	$this->data['uid'];
			//获取回复的qid
			$data['qid']			=	request()->post('qid');
			//获取回复内容
			$data['content']		=	request()->post('content');
			//调用验证器:sns/validate/question
			
			$validateResult = $this->validate($data,'Answer');
			//输出错误信息		
			if(true !== $validateResult)
			{
				$return['status'] = 0;
				$return['message'] = $validateResult;	
				return json($return);
			}
			//获取回答发布的时间和IP
			$data['posttime']		=	time();
			$data['postip']			=	request()->ip();			
			//发送到inner
			$url = BASE_URL.url('/inner/sns/answerPublish');
			$return = curlHttp($url,'POST',$data);
			return $return;			
												
		}
		else
		{
				$return['status'] = 0;
				$return['message'] = '非法请求';	
				return json($return);			
		}
	}		
}