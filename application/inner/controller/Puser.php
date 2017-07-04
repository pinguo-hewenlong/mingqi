<?php
namespace app\inner\controller;

use think\Controller;

use think\Db;

class Puser extends Base
{

	public function __construct()
	{
		parent::__construct();
		
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
		//初始化数据
		$data	=	array();
		
		$data['uid'] 	= request()->post('uid');
		
		$data['uid']	=	'4';
		
		$dbData['uid']	= $data['uid'];
			
		
		//真实姓名
		if(input('?post.realname'))
		{
		$data['realname'] 		= trim(request()->post('realname'));
		}
		//电话
		if(input('?post.phone'))
		{
		$data['phone'] 			= request()->post('phone');
		}
		//最高学历
		if(input('?post.eduction'))
		{
		$data['eduction'] 		= request()->post('eduction');
		}
		//工作年限
		if(input('?post.workexp'))
		{
		$data['workexp']		= request()->post('workexp');
		}				
		//邮箱
		if(input('?post.email'))
		{
		$data['email'] 			= request()->post('email');
		}
		//所在城市
		if(input('?post.city'))
		{
		$data['city'] 			= request()->post('city');
		}
		//性别
		if(input('?post.gender'))
		{
		$data['gender'] 		= request()->post('gender');
		}
		//出生年月
		if(input('?post.birth'))
		{
		$data['birth'] 			=  request()->post('birth');
		}		
		
		//判断该用户个人信息是否存在
		$request = db('puser_info')->where($dbData)->find();
		//如果不存在就插入,如果存在就添加
		if(!$request)
		{
			$request	=	db('puser_info')->insert($data);
			
			if($request !== 1)
			{
				$return['status'] = 0;
				$return['message'] = '添加个人信息失败';
				return json($return);
			}
			else
			{
				$return['status'] = 1;
				$return['message'] = '添加个人信息成功';
				return json($return);
			}			
		}
		else
		{	
			$request = db('puser_info')->where($dbData)->update($data);
			if($request !== 1)
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

	}

	//添加教育经历
	public function setEdu()
	{
		//初始化变量
		$data	=	array();
		$dbData	=	array();		
		//获取数据
		$data['uid']	=	request()->post('uid');
		
		//测试数据
		$data['uid']	=	'7';

		$dbData['uid']	=	$data['uid'];		
		
		//学校名称
		if(input('?post.school'))
		{		
		$data['school'] 		= request()->post('school');
		}
		if(input('?post.begintime'))
		{
		$data['begintime'] 		= request()->post('begintime');
		}
		//毕业时间
		if(input('?post.endtime'))
		{
		$data['endtime'] 		= request()->post('endtime');
		}
		//专业
		if(input('?post.major'))
		{
		$data['major'] 			= request()->post('major');
		}
		//学历
		if(input('?post.record'))
		{
		$data['record'] 		= request()->post('record');
		}
		
		//判断是更新还是添加
		$data['record']	=	'本科';
		if(input('?post.update'))
		{
			//更新教育信息
			$request	=	db('puser_edu')->where($dbData)->update($data);
			if($request !== 1)
			{
				$return['status'] = 0;
				$return['message'] = '教育经历更新失败';
				return json($return);
			}
			else
			{
				$return['status'] = 1;
				$return['message'] = '教育信息更新成功';
				return json($return);
			}			
			
			
		}
		else
		{
			//添加教育信息
			$result = db('puser_edu')->insert($data);
		
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

	//添加个人描述
		public function setDesc()
	{
		//初始化变量
		$preDbData = array();
		$dbData = array();
		$return = array();


		$dbData['uid'] = $_POST['uid'];
		$dbData['Desc'] = $_POST['Desc'];

		$result = Db::table('mq_puser_desc')->insert($dbData);
		//dump($result);
		//return json($dbData);
		if($result !== 1)
		{
			$return['status'] = 0;
			$return['message'] = '个人描述添加失败';
			return json($return);
		}
		else
		{
			$return['status'] = 1;
			$return['message'] = '个人描述添加成功';
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
		//$dbData['description'] = $_POST['description'];
		//$dbData['monthstime'] = $_POST['monthstime'];
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


	//添加简历状态
	public function setarrival()
	{
		//初始化变量
		$preDbData = array();
		$dbData = array();
		$return = array();


		$dbData['uid'] = $_POST['uid'];
		$dbData['sesc'] = $_POST['sesc'];
		//dump($result);
		//return json($dbData);
		if($result !== 1)
		{
			$return['status'] = 0;
			$return['message'] = '到岗时间添加失败';
			return json($return);
		}
		else
		{
			$return['status'] = 1;
			$return['message'] = '到岗时间添加成功';
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

	//获取用户注册状态
	public function preGetFirst()
	{
		$data['id']	=	request()->post('uid');

		$request = db('puser')->where($data)->find();

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
