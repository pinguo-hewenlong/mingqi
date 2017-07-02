<?php
namespace app\inner\controller;

use think\Controller;

use think\Db;

class Puser extends Controller
{
	
	public function __construct()
	{
			
	}
	//处理信息:获取个人相关信息
	public function getFromDb()
	{	
		$table 			= request()->post('table');
			
		$data['uid'] 	= request()->post('uid');
	
		$result = Db::name($table)->where($data)->select();
		
		return json($result);
		
	}
	//设置个人基本信息
	public function setInfo()
	{
		//初始化变量
		$preDbData = array();
		$dbData = array();
		$return = array();
		
		
		$preDbData['uid'] = $_POST['uid'];
		$result = Db::name('puser_info')->where($preDbData)->find();
		
		if(!$result)
		{
			$return['status'] = 0;
			$return['message'] = '非法操作';		
			return $return; 
		}

		$dbData['realname'] = $_POST['realname'];
		$dbData['email'] = $_POST['email'];
		$dbData['thumburl'] = $_POST['thumburl'];
		$dbData['eduction'] = $_POST['eduction'];
		$dbData['city'] = $_POST['city'];
		$dbData['gender'] = $_POST['gender'];
		//$dbData['birth'] = $_POST['birth'];
		$dbData['phone'] = $_POST['phone'];
		
		
		$result = Db::table('mq_puser_info')->where($preDbData)->update($dbData);
		//dump($result);
		//return json($dbData);
		if($result<=0)
		{
			$return['status'] = 0;
			$return['message'] = '更新个人信息失败';
			return json($return); 			
		}
		else
		{
			$return['status'] = 1;
			$return['message'] = '更新个人信息成功';
			return json($return); 			
		}
		
	}

	//添加教育经历
	public function setEdu()
	{
		//初始化变量
		$preDbData = array();
		$dbData = array();
		$return = array();
		
		
		$dbData['uid'] = $_POST['uid'];
		$dbData['school'] = $_POST['school'];
		$dbData['begintime'] = $_POST['begintime'];
		$dbData['endtime'] = $_POST['endtime'];
		$dbData['major'] = $_POST['major'];
		$dbData['record'] = $_POST['record'];
		
		$result = Db::table('mq_puser_edu')->insert($dbData);
		//dump($result);
		//return json($dbData);
		if($result !== 1)
		{
			$return['status'] = 0;
			$return['message'] = '教育经历添加失败';
			return json($return); 			
		}
		else
		{
			$return['status'] = 1;
			$return['message'] = '教育经历添加成功';
			return json($return); 			
		}
		
	}
	//添加项目经历
	public function setProject()
	{
		//初始化变量
		$preDbData = array();
		$dbData = array();
		$return = array();
		
		
		$dbData['uid'] = $_POST['uid'];
		$dbData['proname'] = $_POST['proname'];
		$dbData['begintime'] = $_POST['begintime'];
		$dbData['endtime'] = $_POST['endtime'];
		$dbData['yourworks'] = $_POST['yourworks'];
		$dbData['description'] = $_POST['description'];
		
		$result = Db::table('mq_puser_project')->insert($dbData);
		//dump($result);
		//return json($dbData);
		if($result !== 1)
		{
			$return['status'] = 0;
			$return['message'] = '项目经历添加失败';
			return json($return); 			
		}
		else
		{
			$return['status'] = 1;
			$return['message'] = '项目经历添加成功';
			return json($return); 			
		}
		
	}		
	
		//添加工作经历
	public function setWork()
	{
		//初始化变量
		$preDbData = array();
		$dbData = array();
		$return = array();
		
		
		$dbData['uid'] = $_POST['uid'];
		$dbData['company'] = $_POST['company'];
		$dbData['begintime'] = $_POST['begintime'];
		$dbData['endtime'] = $_POST['endtime'];
		$dbData['position'] = $_POST['position'];
		$dbData['description'] = $_POST['description'];
		
		$result = Db::table('mq_puser_work')->insert($dbData);
		//dump($result);
		//return json($dbData);
		if($result !== 1)
		{
			$return['status'] = 0;
			$return['message'] = '工作经历添加失败';
			return json($return); 			
		}
		else
		{
			$return['status'] = 1;
			$return['message'] = '工作经历添加成功';
			return json($return); 			
		}
		
	}	
	
	//添加培训经历
	public function setTrain()
	{
		//初始化变量
		$preDbData = array();
		$dbData = array();
		$return = array();
		
		
		$dbData['uid'] = $_POST['uid'];
		$dbData['school'] = $_POST['school'];
		$dbData['begintime'] = $_POST['begintime'];
		$dbData['endtime'] = $_POST['endtime'];
		$dbData['skills'] = $_POST['skills'];
		$dbData['description'] = $_POST['description'];
		
		$result = Db::table('mq_puser_train')->insert($dbData);
		//dump($result);
		//return json($dbData);
		if($result !== 1)
		{
			$return['status'] = 0;
			$return['message'] = '培训经历添加失败';
			return json($return); 			
		}
		else
		{
			$return['status'] = 1;
			$return['message'] = '培训经历添加成功';
			return json($return); 			
		}
		
	}	
	
	//添加技能
	public function setSkills()
	{
		//初始化变量
		$preDbData = array();
		$dbData = array();
		$return = array();
		
		
		$dbData['uid'] = $_POST['uid'];
		$dbData['pname'] = $_POST['pname'];
		$dbData['description'] = $_POST['description'];
		$dbData['monthstime'] = $_POST['monthstime'];
		$dbData['mastery'] = $_POST['mastery'];
		
		$result = Db::table('mq_puser_skills')->insert($dbData);
		//dump($result);
		//return json($dbData);
		if($result !== 1)
		{
			$return['status'] = 0;
			$return['message'] = '技能添加失败';
			return json($return); 			
		}
		else
		{
			$return['status'] = 1;
			$return['message'] = '技能添加成功';
			return json($return); 			
		}
		
	}
	
	//添加期望工作
	public function setExpectwork()
	{
		//初始化变量
		$preDbData = array();
		$dbData = array();
		$return = array();
		
		
		$dbData['uid'] = $_POST['uid'];
		$dbData['pname'] = $_POST['pname'];
		$dbData['description'] = $_POST['description'];
		$dbData['salary'] = $_POST['salary'];
		$dbData['city'] = $_POST['city'];
		
		$result = Db::table('mq_puser_expectwork')->insert($dbData);
		//dump($result);
		//return json($dbData);
		if($result !== 1)
		{
			$return['status'] = 0;
			$return['message'] = '期望工作添加失败';
			return json($return); 			
		}
		else
		{
			$return['status'] = 1;
			$return['message'] = '期望工作添加成功';
			return json($return); 			
		}
		
	}		
	
	//添加个人作品
	public function setProduct()
	{
		//初始化变量
		$preDbData = array();
		$dbData = array();
		$return = array();
		
		
		$dbData['uid'] = $_POST['uid'];
		$dbData['plink'] = $_POST['plink'];
		$dbData['description'] = $_POST['description'];
		$dbData['imgurl'] = $_POST['imgurl'];
		//return json($dbData);
		$result = Db::table('mq_puser_product')->insert($dbData);
		//dump($result);
		//return json($dbData);
		if($result !== 1)
		{
			$return['status'] = 0;
			$return['message'] = '个人作品添加失败';
			return json($return); 			
		}
		else
		{
			$return['status'] = 1;
			$return['message'] = '个人作品添加成功';
			return json($return); 			
		}
		
	}
	
	//获取子级列表信息(暂时没有使用这个函数)
	public function getList()
	{
		$table = Request::instance()->post('table');
		
		$id = Request::instance()->post('id');
			
		$data[$id] = $id;  
	
		$result = Db::name($table)->where($data)->select();
		
		return json($result);		
	}
	/*
	 * 预览个人简历：查询所有信息并返回
	 */
	public function resumeView()
	{
		//查询个人基本信息
	}
	
	//判断用户登录流程的内部方法
	public function pregetfirst()
	{
		$data['id']	=	request()->post('uid');
		$request	=	db('puser')->where($data)->find();
		if($request)
		{
			$return['status']	=	$request['prestatus'];
			$return['message']	=	'正在跳转';
			return json($return);
		}
		else
		{
			$return['status']	=	0;
			$return['message']	=	'内部错误,该页无法显示';
			return json($return);
		}
	}
	//更新用户登录流程的内部方法
	 public function presetFirst()
	 {
		$data['id']	=	request()->post('uid');
		$dbdata['prestatus']	=	'1';
		$request	=	db('puser')->where($data)->update($dbdata);
		if($request)
		{
			$return['status']	=	1;
			$return['message']	=	'成功';
			return json($return);			
		}
		else
		{
			$return['status']	=	0;
			$return['message']	=	'失败';
			return json($return);			
		}			 	
	 }
											
}
