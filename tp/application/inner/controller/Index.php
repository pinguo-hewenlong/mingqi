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

	//获取最新职位
	public function getLatestPosition()
	{
		$request	=	db('cuser_post')->limit(10)->order('id desc')->select();

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
	//根据职位获取企业相关信息
	public function getCompanyByPosition()
	{
		$data['uid']	=	request()->post('uid');
		$request	=	db('cuser_info')->where($data)->find();
		if($request)
		{
			$return['status']		=	1;
			$return['companyname']	=	$request['companyname'];
			$return['nature']		=	$request['nature'];
			$return['scale']		=	$request['scale'];
			return json($return);
		}
		else
		{
			$return['status']	=	0;
			$return['message']	=	'error';
			return json($return);
		}
	}
}