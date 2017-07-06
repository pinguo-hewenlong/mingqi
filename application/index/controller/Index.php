<?php
namespace app\index\controller;

use think\Controller;
use think\View;

class Index extends Controller
{

	//根据职位id获取职位详情
	public function getPostionView()
	{
		$data['poid']	=	request()->get('poid');

		//return json($data);
		//发送到inner
		$url = BASE_URL.url('/inner/index/getPostionView');
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

	//获取最新职位
	public function getLatestPosition()
	{
		$data = array();

		//发送到inner
		$url = BASE_URL.url('/inner/index/getLatestPosition');
		$return = curlHttp($url,'POST',$data);
		return json_decode($return);
	}
	//获取企业信息
	public function getCompanyByPosition()
	{
		$data['uid'] = request()->get('uid');

		//发送到inner
		$url = BASE_URL.url('/inner/index/getCompanyByPosition');
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


	public function index()
	{
		//$view	=	new View();
		//return $view->fetch();
	}

}
