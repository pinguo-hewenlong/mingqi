<?php
namespace app\index\controller;

class Index
{
	
	//根据职位id获取职位详情
	public function getPostionView()
	{
		$data['poid']	=	request()->get('poid');
		
		//return json($data);
		//发送到inner
		$url = BASE_URL.url('/inner/index/getPostionView');
		$return = curlHttp($url,'POST',$data);
		return $return;	
				
	}
	
	//
	
	
}
