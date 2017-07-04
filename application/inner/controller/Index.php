<?php
namespace app\inner\controller;

use think\Controller;

use think\Db;

class Index extends Base

{
	public function __construct()
	{
		parent::__construct();			
	}
	
	
	//根据职位id获取职位详情
	public function getPostionView()
	{	
	
	$data['poid']	=	request()->post('poid');
	
	
	$request	=	db('cuser_post')->where($data)->select();
	
	
	
	
	if($request)
	{
		return json($request);
	}
	else
	{
		$return['status']	=	0;
		$return['message']	=	'内部错误';
	}
	
	}
}