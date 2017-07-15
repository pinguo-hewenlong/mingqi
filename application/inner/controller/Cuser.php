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
		//初始化数据
		$data	=	array();
		
		$data['uid'] 	= request()->post('uid');
		
		
		$dbData['uid']	= $data['uid'];	

		//公司名称		
		if(input('?post.companyname'))
		{
			$data['companyname']	=	request()->post('companyname');
		}
		//hr邮箱		
		if(input('?post.hremail'))
		{
			$data['hremail']	=	request()->post('hremail');
		}		
		//hr邮箱		
		if(input('?post.thumburl'))
		{
			$data['thumburl']	=	request()->post('thumburl');
		}
		//公司电话	
		if(input('?post.comphone'))
		{
			$data['comphone']	=	request()->post('comphone');
		}
		//所在城市	
		if(input('?post.city'))
		{
			$data['city']	=	request()->post('city');
		}
		//hr姓名		
		if(input('?post.hrname'))
		{
			$data['hrname']	=	request()->post('hrname');
		}
		//hr电话	
		if(input('?post.hrphone'))
		{
			$data['hrphone']	=	request()->post('hrphone');
		}
		//公司性质		
		if(input('?post.nature'))
		{
			$data['nature']	=	request()->post('nature');
		}
		//公司规模
		if(input('?post.scale'))
		{
			$data['scale']	=	request()->post('scale');
		}
		//企业描述		
		if(input('?post.description'))
		{
			$data['description']	=	request()->post('description');
		}
		//是否认证	
		if(input('?post.isrz'))
		{
			$data['isrz']	=	request()->post('isrz');
		}
		//公司网址	
		if(input('?post.comurl'))
		{
			$data['comurl']	=	request()->post('comurl');
		}									
		//公司地址
		if(input('?post.address'))
		{
			$data['address']	=	request()->post('address');
		}															

		
		//return json($data);
		//判断该企业信息是否存在
		$request = db('cuser_info')->where($dbData)->find();
		//如果不存在就插入,如果存在就添加
		if(!$request)
		{
			$request	=	db('cuser_info')->insert($data);
			
			if($request !== 1)
			{
				$return['status'] = 0;
				$return['message'] = '添加企业信息失败';
				return json($return);
			}
			else
			{
				$return['status'] = 1;
				$return['message'] = '添加企业信息成功';
				return json($return);
			}			
		}
		else
		{	
			$request = db('cuser_info')->where($dbData)->update($data);
			if($request !== 1)
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
		//$dbData['team'] = $_POST['team'];
		$dbData['begintime'] = $_POST['begintime'];
		//$dbData['endtime'] = $_POST['endtime'];
		$dbData['qc']     =   $_POST['qc'];
										
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
		
		
		$dbData['uid'] = $_POST['uid'];
		$dbData['time'] = $_POST['time'];		
		$dbData['title'] = $_POST['title'];
		$dbData['recordtime'] = time();
		
		if(input('description'))
		{
			$dbData['description']	=	request()->post('description');
		}
												
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
	//设置用户注册状态
	public function preSetFirst()
	{
		$data['id']	=	request()->post('uid');
		
		$dbData['id']	=	$data['id'];
		
		if(input('?post.status'))
		{
			$data['prestatus']	=	request()->post('status');
		}

		$request = db('cuser')->where($dbData)->update($data);

		if($request == 1)
		{
			$return['status']	=	1;
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
	//获取已发布的职位列表
	public function getPosts()
	{
		$page    = request()->post('page');
		//每页条数
		$perpage = request()->post('perpage');
		//开始查询的游标
		$start  = ($page - 1) * $perpage;
		$cid    = request()->post('cid');
		$total  = db('cuser_post')->where('uid', $cid)
				->count();
		if ($total) {
			$rs = db('cuser_post')->where('uid', $cid)
					->order('begintime desc')
					->limit($start, $perpage)
					->field(array(
							'poid',
							'title',
							'content',
							'city',
							'workexp',
							'eduction',
							'salary',
							'begintime',
							'endtime'
					))
					->select();
			$return['list']     = $rs;
			$return['count']    = ceil($total/$perpage);;
			$return['status']	=	1;
			$return['message']	=	'获取职位列表成功';
			return json($return);
		} else {
			$return['list']     = array();
			$return['count']    = ceil($total/$perpage);;
			$return['status']	=	1;
			$return['message']	=	'获取职位列表成功';
			return json($return);
		}
	}
}