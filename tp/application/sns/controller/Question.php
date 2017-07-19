<?php
namespace app\sns\controller;
use think\Controller;

class Question extends Base
{
	private $data;
	public function __construct()
	{
		parent::__construct();
		$this->data['uid'] = session('UID');		
	}
	//发布问题
	public function publish()
	{
		if(request()->isPost())
		{
			//获取发布的uid
			$data['uid']			=	$this->data['uid'];
			//获取问题的标题
			$data['title']			=	request()->post('title');
			//获取问题描述
			$data['content']		=	request()->post('content');
			//调用验证器:sns/validate/question
			
			$validateResult = $this->validate($data,'Question');
			//输出错误信息		
			if(true !== $validateResult)
			{
				$return['status'] = 0;
				$return['message'] = $validateResult;	
				return json($return);
			}
			
			//获取其他发布信息
			//获取问题所属主题信息，由于本项目暂时不支持主题功能，所以使用默认值
			$data['tid']			=	'1000';
			$data['tname']			=	'名企优才';
			//获取问题发布的时间和IP
			$data['posttime']		=	time();
			$data['postip']			=	request()->ip();
			//return json($data);
			//发送到inner
			$url = BASE_URL.url('/inner/sns/questionPublish');
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
	//判断标题是否存在
	public function checkTitle()
	{
		$data['title']	=	request()->get('title');
		//调用验证器:sns/validate/question
		$validateResult = $this->validate($data,'Checktitle');
		//输出错误信息		
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			return json($return);
		}
		//发送到inner
		$url = BASE_URL.url('/inner/sns/questionChecktitle');
		$return = curlHttp($url,'POST',$data);
		return $return;		
	}
	
}
