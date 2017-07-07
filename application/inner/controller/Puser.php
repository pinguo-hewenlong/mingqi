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
	
	/*
	 * 定义内部处理函数
	 */	
	
	//处理设置返回信息,第二版添加
	private function setReturn()
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
		$data	=	array();
		$dbData	=	array();		
		//获取数据
		$data['uid']	=	request()->post('uid');

		$dbData['uid']	=	$data['uid'];


		//公司
		if(input('?post.proname'))
		{
		$data['proname'] 		= request()->post('proname');
		}
		//开始时间
		if(input('?post.begintime'))
		{
		$data['begintime'] 		= request()->post('begintime');
		}
		//结束时间
		if(input('?post.endtime'))
		{
		$data['endtime'] 		= request()->post('endtime');
		}
		//你负责的部分
		if(input('?post.yourworks'))
		{
		$data['yourworks'] 		= request()->post('yourworks');
		}
		//更多描述
		if(input('?post.description'))
		{
		$data['description'] 	= request()->post('description');
		}

		//判断是更新还是添加
		if(input('?post.update'))
		{
			//更新教育信息
			$request	=	db('puser_project')->where($dbData)->update($data);
			if($request !== 1)
			{
				$return['status'] = 0;
				$return['message'] = '项目经历更新失败';
				return json($return);
			}
			else
			{
				$return['status'] = 1;
				$return['message'] = '项目经历更新成功';
				return json($return);
			}			
			
			
		}
		else
		{
			//添加教育信息
			$result = db('puser_project')->insert($data);
		
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

	}

		//添加工作经历
	public function setWork()
	{
		//初始化变量
		$data	=	array();
		$dbData	=	array();		
		//获取数据
		$data['uid']	=	request()->post('uid');

		$dbData['uid']	=	$data['uid'];


		//公司名称
		if(input('?post.company'))
		{
		$data['company'] 		= request()->post('company');
		}
		//开始时间
		if(input('post.begintime'))
		{
		$data['begintime'] 		= request()->post('begintime');
		}
		//结束时间
		if(input('?post.endtime'))
		{
		$data['endtime'] 		= request()->post('endtime');
		}
		//职位
		if(input('?post.position'))
		{	
		$data['position'] 		= request()->post('position');
		}
		if(input('?post.description'))
		{
		$data['description'] 	= request()->post('description');
		}

		//判断是更新还是添加
		if(input('?post.update'))
		{
			//更新教育信息
			$request	=	db('puser_work')->where($dbData)->update($data);
			if($request !== 1)
			{
				$return['status'] = 0;
				$return['message'] = '工作经历更新失败';
				return json($return);
			}
			else
			{
				$return['status'] = 1;
				$return['message'] = '工作经历更新成功';
				return json($return);
			}			
			
			
		}
		else
		{
			//添加教育信息
			$result = db('puser_work')->insert($data);
		
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

	}

	//添加培训经历
	public function setTrain()
	{
		//初始化变量
		$data	=	array();
		$dbData	=	array();		
		//获取数据
		$data['uid']	=	request()->post('uid');

		$dbData['uid']	=	$data['uid'];


		//培训机构
		if(input('?post.school'))
		{
		$data['school'] 		= request()->post('school');
		}
		//开始时间
		if(input('?post.begintime'))
		{
		$data['begintime'] 		= request()->post('begintime');
		}
		//结束时间
		if(input('?post.endtime'))
		{
		$data['endtime'] 		= request()->post('endtime');
		}
		//培训技能
		if(input('?post.skills'))
		{
		$data['skills'] 		= request()->post('skills');
		}
		//更多描述
		if(input('post.description'))
		{
		$data['description'] 	= request()->post('description');
		}

		//判断是更新还是添加
		if(input('?post.update'))
		{
			//更新教育信息
			$request	=	db('puser_train')->where($dbData)->update($data);
			if($request !== 1)
			{
				$return['status'] = 0;
				$return['message'] = '培训经历更新失败';
				return json($return);
			}
			else
			{
				$return['status'] = 1;
				$return['message'] = '培训经历更新成功';
				return json($return);
			}			
			
			
		}
		else
		{
			//添加教育信息
			$result = db('puser_train')->insert($data);
		
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

	}

	//添加个人描述
	public function setDesc()
	{
		//初始化变量
		$data	=	array();
		$dbData	=	array();		
		//获取数据
		$data['uid']	=	request()->post('uid');

		$dbData['uid']	=	$data['uid'];


		//自我评价
		if(input('?post.self'))
		{
		$data['self'] 		= 	request()->post('self');
		}

		//判断是更新还是添加
		if(input('?post.update'))
		{
			//更新教育信息
			$request	=	db('puser_desc')->where($dbData)->update($data);
			if($request !== 1)
			{
				$return['status'] = 0;
				$return['message'] = '自我评价更新失败';
				return json($return);
			}
			else
			{
				$return['status'] = 1;
				$return['message'] = '自我评价更新成功';
				return json($return);
			}			
			
			
		}
		else
		{
			//添加教育信息
			$result = db('puser_desc')->insert($data);
		
			if($result !== 1)
			{
				$return['status'] = 0;
				$return['message'] = '自我评价添加失败';
				return json($return);
			}
			else
			{
				$return['status'] = 1;
				$return['message'] = '自我评价添加成功';
				return json($return);
			}			
			
		}

	}

	//添加技能
	public function setSkills()
	{
		//初始化变量
		$data	=	array();
		$dbData	=	array();		
		//获取数据
		$data['uid']	=	request()->post('uid');

		$dbData['uid']	=	$data['uid'];


		//技能名称
		if(input('?post.pname'))
		{
		$data['pname'] 			= request()->post('pname');
		}
		//技能描述
		if(input('?post.descrption'))
		{
		$data['description'] 	= request()->post('description');
		}
		//使用时间
		if(input('?post.monthstime'))
		{
		$data['monthstime'] 	= request()->post('monthstime');
		}
		//熟练度
		if(input('?post.mastery'))
		{
		$data['mastery'] 		= request()->post('mastery');
		}

		//判断是更新还是添加
		if(input('?post.update'))
		{
			//更新教育信息
			$request	=	db('puser_skills')->where($dbData)->update($data);
			if($request !== 1)
			{
				$return['status'] = 0;
				$return['message'] = '技能评价更新失败';
				return json($return);
			}
			else
			{
				$return['status'] = 1;
				$return['message'] = '技能评价更新成功';
				return json($return);
			}			
			
			
		}
		else
		{
			//添加教育信息
			$result = db('puser_skills')->insert($data);
		
			if($result !== 1)
			{
				$return['status'] = 0;
				$return['message'] = '技能评价添加失败';
				return json($return);
			}
			else
			{
				$return['status'] = 1;
				$return['message'] = '技能评价添加成功';
				return json($return);
			}			
			
		}

	}

	//添加期望工作
	public function setExpectwork()
	{
		//初始化变量
		$data	=	array();
		$dbData	=	array();		
		//获取数据
		$data['uid']	=	request()->post('uid');

		$dbData['uid']	=	$data['uid'];


		if(input('?post.pname'))
		{	
		$data['pname'] 			= request()->post('pname');
		}
		//职位描述
		if(input('?post.description'))
		{
		$data['description'] 	= request()->post('description');
		}
		//期望薪资
		if(input('?post.salary'))
		{
		$data['salary'] 		= request()->post('salary');
		}
		//期望工作城市
		if(input('post.city'))
		{
		$data['city'] 			= request()->post('city');
		}

		//判断是更新还是添加
		if(input('?post.update'))
		{
			//更新教育信息
			$request	=	db('puser_expectwork')->where($dbData)->update($data);
			if($request !== 1)
			{
				$return['status'] = 0;
				$return['message'] = '期望工作更新失败';
				return json($return);
			}
			else
			{
				$return['status'] = 1;
				$return['message'] = '期望工作更新成功';
				return json($return);
			}			
			
			
		}
		else
		{
			//添加教育信息
			$result = db('puser_expectwork')->insert($data);
		
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

	}

	//添加个人作品
	public function setProduct()
	{
		//初始化变量
		$data	=	array();
		$dbData	=	array();		
		//获取数据
		$data['uid']	=	request()->post('uid');

		$dbData['uid']	=	$data['uid'];


		//作品链接
		if(input('?post.plink'))
		{
		$data['plink'] 			= request()->post('plink');
		}
		//作品描述
		if(input('?post.description'))
		{
		$data['description'] 	= request()->post('description');
		}
		//作品url
		if(input('?post.imgurl'))
		{
		$data['imgurl'] 		= request()->post('imgurl');
		}
		//return json($data);
		//判断是更新还是添加
		if(input('?post.update'))
		{
			//更新个人作品
			$request	=	db('puser_product')->where($dbData)->update($data);
			//dump($req)
			if($request !== 1)
			{
				$return['status'] = 0;
				$return['message'] = '个人作品更新失败';
				return json($return);
			}
			else
			{
				$return['status'] = 1;
				$return['message'] = '个人作品更新成功';
				return json($return);
			}			
			
			
		}
		else
		{
			//添加教育信息
			$result = db('puser_product')->insert($data);
		
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

	}


	//添加简历状态
	public function setarrival()
	{
		//初始化变量
		$data	=	array();
		$dbData	=	array();		
		//获取数据
		$data['uid']	=	request()->post('uid');

		$dbData['uid']	=	$data['uid'];


		$dbData['uid'] = $_POST['uid'];
		$dbData['sesc'] = $_POST['sesc'];
		//dump($result);
		//return json($dbData);
		//判断是更新还是添加
		if(input('?post.update'))
		{
			//更新教育信息
			$request	=	db('puser_arrival')->where($dbData)->update($data);
			if($request !== 1)
			{
				$return['status'] = 0;
				$return['message'] = '到岗时间更新失败';
				return json($return);
			}
			else
			{
				$return['status'] = 1;
				$return['message'] = '到岗时间更新成功';
				return json($return);
			}			
			
			
		}
		else
		{
			//添加教育信息
			$result = db('puser_arrival')->insert($data);
		
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
