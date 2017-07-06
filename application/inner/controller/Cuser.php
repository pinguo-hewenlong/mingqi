<?php
namespace app\inner\controller;

use think\Controller;

use think\Db;

use think\Request;

class Cuser extends Controller
{
	public function __construct()
	{
		parent::__construct();			
	}
	//处理信息:获取企业相关信息
	public function getFromDb()
	{	
		$table = Request::instance()->post('table');
			
		$data['uid'] = Request::instance()->post('uid');	
	
		$result = Db::name($table)->where($data)->select();
		
		return json($result);
		
	}
	//设置企业基本信息
	public function setInfo()
	{
		//初始化变量
		$preDbData = array();
		$dbData = array();
		$return = array();
		
		
		$preDbData['uid'] = $_POST['uid'];
		$result = Db::name('cuser_info')->where($preDbData)->find();
		
		if(!$result)
		{
			$return['status'] = 0;
			$return['message'] = '非法操作';		
			return $return; 
		}

		$dbData['companyname'] = $_POST['companyname'];
		$dbData['hremail'] = $_POST['hremail'];
		$dbData['thumburl'] = $_POST['thumburl'];
		$dbData['comphone'] = $_POST['comphone'];
		$dbData['city'] = $_POST['city'];
		$dbData['hrname'] = $_POST['hrname'];
		$dbData['hrphone'] = $_POST['hrphone'];		
		$dbData['nature'] = $_POST['nature'];
		$dbData['scale'] = $_POST['scale'];		
		$dbData['description'] = $_POST['description'];
		$dbData['isrz'] = $_POST['isrz'];		
		
		
		
		$result = Db::table('mq_cuser_info')->where($preDbData)->update($dbData);
		//dump($result);
		//return json($dbData);
		if($result<=0)
		{
			$return['status'] = 0;
			$return['message'] = '更新企业信息失败';
			return json($return); 			
		}
		else
		{
			$return['status'] = 1;
			$return['message'] = '更新企业信息成功';
			return json($return); 			
		}
		
	}
	//发布职位
	public function setPost()
	{
		//初始化变量
		$preDbData = array();
		$dbData = array();
		$return = array();
		
		
		$dbData['uid'] = $_POST['uid'];
		$dbData['poid'] = $_POST['poid'];		
		$dbData['title'] = $_POST['title'];
		$dbData['content'] = $_POST['content'];
		$dbData['city'] = $_POST['city'];
		$dbData['workexp'] = $_POST['workexp'];
		$dbData['eduction'] = $_POST['eduction'];
		$dbData['salary'] = $_POST['salary'];
		$dbData['team'] = $_POST['team'];
		$dbData['begintime'] = $_POST['begintime'];
		$dbData['endtime'] = $_POST['endtime'];
										
		$result = Db::table('mq_cuser_post')->insert($dbData);
		//dump($result);
		//return json($dbData);
		if($result !== 1)
		{
			$return['status'] = 0;
			$return['message'] = '职位发布失败';
			return json($return); 			
		}
		else
		{
			$return['status'] = 1;
			$return['message'] = '职位发布成功';
			return json($return); 			
		}
		
	}
	
	//团队介绍
	public function setTeam()
	{
		//初始化变量
		$preDbData = array();
		$dbData = array();
		$return = array();
		
		
		$dbData['cid'] = $_POST['cid'];
		$dbData['tname'] = $_POST['tname'];		
		$dbData['tdesc'] = $_POST['tdesc'];
		$dbData['state'] = $_POST['state'];
		
										
		$result = Db::table('mq_cuser_team')->insert($dbData);
		//dump($result);
		//return json($dbData);
		if($result !== 1)
		{
			$return['status'] = 0;
			$return['message'] = '团队信息发布失败';
			return json($return); 			
		}
		else
		{
			$return['status'] = 1;
			$return['message'] = '团队信息发布成功';
			return json($return); 			
		}
		
	}	
	
	//添加发展历程
	public function setMilepost()
	{
		//初始化变量
		$preDbData = array();
		$dbData = array();
		$return = array();
		
		
		$dbData['cid'] = $_POST['cid'];
		$dbData['time'] = $_POST['time'];		
		$dbData['title'] = $_POST['title'];
		$dbData['recordtime'] = time();
		
										
		$result = Db::table('mq_cuser_milepost')->insert($dbData);
		//dump($result);
		//return json($dbData);
		if($result !== 1)
		{
			$return['status'] = 0;
			$return['message'] = '发展历程发布失败';
			return json($return); 			
		}
		else
		{
			$return['status'] = 1;
			$return['message'] = '发展历程发布成功';
			return json($return); 			
		}
		
	}
	//获取用户注册状态
	public function preGetFirst()
	{
		$data['id']	=	request()->post('uid');

		$request = db('cuser')->where($data)->find();

		if($request)
		{
			$return['status']	=	$request['prestatus'];
			$return['message']	=	'success';
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