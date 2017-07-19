<?php
namespace app\sns\controller;
use think\Controller;

class Index extends Base
{
	
	public function __construct()
	{
		parent::__construct();		
	}
	
	public function getQuestionList()
	{
		//设置参数页数和默认页数
		if(isset($_GET['page']))
		{
			$data['page']	=	request()->get('page');
		}
		else
		{
			$data['page']	=	'0';
		}
		//设置参数条数和默认条数
		if(isset($_GET['size']))
		{
			$data['size']	=	request()->get('size');
		}
		else
		{
			$data['size']	=	'10';
		}
		
		//发送到inner
		$url = BASE_URL.url('/inner/sns/questionGetList');
		$return = curlHttp($url,'POST',$data);
		return $return;		
	}
}