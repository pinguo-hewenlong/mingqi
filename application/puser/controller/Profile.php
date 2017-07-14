<?php
namespace app\puser\controller;
use think\Controller;
use think\Request;

class Profile extends Base
{
	protected $data;	
	//初始化
	public function __construct()
	{
		parent::__construct();
		$this->data['uid'] = session('UID');
		//$this->data['uid']	=	'7';
	}
	public function index()	
	{
		
	}
	//获取基本信息
	public function getInfo()
	{		
		$this->data['table'] = 'puser_info';
		//发送到inner		
		$url = BASE_URL.url('/inner/puser/getfromdb');
		//return $url;
		$return = curlHttp($url,'POST',$this->data);
		if(request()->isAjax())
		{	
			return json_decode ($return);
		}
		else
		{
			return $return;
		}		
	}
	//获取教育信息
	public function getEdu()	
	{
		$this->data['table'] = 'puser_edu';		
		//发送到inner
		$url = BASE_URL.url('/inner/puser/getfromdb');
		//return $url;		
		$return = curlHttp($url,'POST',$this->data);
		if(request()->isAjax())
		{	
			return json_decode ($return);
		}
		else
		{
			return $return;
		}				
		
	}
	//获取工作经历
	public function getWork()
	{
		$this->data['table'] = 'puser_work';		
		//发送到inner
		$url = BASE_URL.url('/inner/puser/getfromdb');
		$return = curlHttp($url,'POST',$this->data);
		if(request()->isAjax())
		{	
			return json_decode ($return);
		}
		else
		{
			return $return;
		}			
		
	}
	//获取培训经历
	public function getTrain()
	{
		$this->data['table'] = 'puser_train';		
		//发送到inner
		$url = BASE_URL.url('/inner/puser/getfromdb');
		$return = curlHttp($url,'POST',$this->data);
		if(request()->isAjax())
		{	
			return json_decode ($return);
		}
		else
		{
			return $return;
		}			
		
	}
	//获取个人技能
	public function getSkills()
	{
		$this->data['table'] = 'puser_skills';		
		//发送到inner
		$url = BASE_URL.url('/inner/puser/getfromdb');
		$return = curlHttp($url,'POST',$this->data);
		if(request()->isAjax())
		{	
			return json_decode ($return);
		}
		else
		{
			return $return;
		}				
		
	}
		//获取个人描述
	public function getDesc()
	{
		$this->data['table'] = 'puser_desc';		
		//发送到inner
		$url = BASE_URL.url('/inner/puser/getfromdb');
		$return = curlHttp($url,'POST',$this->data);
		if(request()->isAjax())
		{	
			return json_decode ($return);
		}
		else
		{
			return $return;
		}				
		
	}
	
	//获取工作状态
	public function getarrival()
	{
		$this->data['table'] = 'puser_arrival';		
		//发送到inner
		$url = BASE_URL.url('/inner/puser/getfromdb');
		$return = curlHttp($url,'POST',$this->data);
		if(request()->isAjax())
		{	
			return json_decode ($return);
		}
		else
		{
			return $return;
		}			
		
	}
	//获取project
	public function getProject()
	{
		$this->data['table'] = 'puser_project';		
		//发送到inner
		$url = BASE_URL.url('/inner/puser/getfromdb');
		$return = curlHttp($url,'POST',$this->data);
		if(request()->isAjax())
		{	
			return json_decode ($return);
		}
		else
		{
			return $return;
		}			
		
	}
	//获取期望工作
	public function getExpectWork()
	{
		$this->data['table'] = 'puser_expectwork';		
		//发送到inner
		$url = BASE_URL.url('/inner/puser/getfromdb');
		$return = curlHttp($url,'POST',$this->data);
		if(request()->isAjax())
		{	
			return json_decode ($return);
		}
		else
		{
			return $return;
		}			
		
	}
	//获取个人作品
	public function getProduct()
	{
		$this->data['table'] = 'puser_product';		
		//发送到inner
		$url = BASE_URL.url('/inner/puser/getfromdb');
		$return = curlHttp($url,'POST',$this->data);
		if(request()->isAjax())
		{	
			return json_decode ($return);
		}
		else
		{
			return $return;
		}			
		
	}
	//------获取信息结束，设置信息开始
	//设置个人信息
	public function setInfo()
	{

		//用户id，通过构造函数获取,无需传递	
		$data['uid'] 			= $this->data['uid'];		
				
		if(request()->isPost())
		{

		//真实姓名
		if(input('?post.realname'))
		{
		$data['realname'] 		= trim(request()->post('realname'));
		}
		//电话
		if(input('?post.phone'))
		{
		$data['phone'] 			= trim(request()->post('phone'));
		}
		//最高学历
		if(input('?post.eduction'))
		{
		$data['eduction'] 		= trim(request()->post('eduction'));
		}
		//工作年限
		if(input('?post.workexp'))
		{
		$data['workxp']		= trim(request()->post('workxp'));
		}				
		//邮箱
		if(input('?post.email'))
		{
		$data['email'] 			= trim(request()->post('email'));
		}
		//头像地址
		if(input('?post.thumburl'))
		{
		$data['thumburl'] 		= trim(request()->post('thumburl'));
		}
		//所在城市
		if(input('?post.city'))
		{
		$data['city'] 			= trim(request()->post('city'));
		}
		//性别
		if(input('?post.gender'))
		{
		$data['gender'] 		= trim(request()->post('gender'));
		}
		//出生年月
		if(input('?post.birth'))
		{
		$data['birth'] 			=  strtotime(trim(request()->post('birth')));
		}

		}
		//return json($data);
		//调用验证器:Puser\valisate\index
		$validateResult = $this->validate($data,'Info');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;
			if(request()->isAjax())
			{	
			return $return;
			}
			else
			{
				return json($return);
			}	

		}
		


		//发送到inner
		$url = BASE_URL.url('/inner/puser/setinfo');
		$return = curlHttp($url,'POST',$data);
		echo ($return);exit;
		if(request()->isAjax())
		{	
			return json_decode ($return);
		}
		else
		{
			return $return;
		}
		
								
	}
	
	//设置教育经历
	public function setEdu()
	{
		$data	=	array();
		//判断是修改还是添加		
		if(input('?get.update'))
		{
			$data['update']		=	request()->get('update');
			$data['id']				= trim(request()->post('id'));
		}
		
				
		if(request()->isPost())
		{

		$data['uid'] 			= $this->data['uid'];
		//学校名称
		if(input('?post.school'))
		{		
		$data['school'] 		= trim(request()->post('school'));
		}
		if(input('?post.begintime'))
		{
		$data['begintime'] 		= strtotime(trim(request()->post('begintime')));
		}
		//毕业时间
		if(input('?post.endtime'))
		{
		$data['endtime'] 		= strtotime(trim(request()->post('endtime')));
		}
		//专业
		if(input('?post.major'))
		{
		$data['major'] 			= trim(request()->post('major'));
		}
		//学历
		if(input('?post.record'))
		{
		$data['record'] 		= trim(request()->post('record'));
		}
		}
		
		//return $data;
		$validateResult = $this->validate($data,'Edu');
		//var_dump($data);exit;
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			if(request()->isAjax())
			{	
			return $return;
			}
			else
			{
				return json($return);
			}				

		}
		//发送到inner
		$url = BASE_URL.url('/inner/puser/setedu');
		$return = curlHttp($url,'POST',$data);
		if(request()->isAjax())
		{	
			return json_decode ($return);
		}
		else
		{
			return $return;
		}		
											
	}
	/**
	 * 删除项目经验接口
	 * 参数 poid
	 * 请求方式 post
	 * */
	public function delProject(){
		//获取项目经历id
		$data['uid']=$this->data['uid'];
		$data['poid'] = trim(request()->post('poid'));
		$validateResult = $this->validate($data,'Poid');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;
			if(request()->isAjax())
			{
				return $return;
			}
			else
			{
				return json($return);
			}

		}
		//发送到inner
		$url = BASE_URL.url('/inner/puser/delProject');
		$return = curlHttp($url,'POST',$data);
		if(request()->isAjax())
		{
			return json_decode ($return);
		}
		else
		{
			return $return;
		}

	}
	//设置项目经历
	public function setProject()
	{
		$data	=	array();
		//判断是修改还是添加		
		if(input('?get.update'))
		{
			$data['update']		=	request()->get('update');
			$data['id']				= trim(request()->post('id'));
		}
				
		if(request()->isPost())
		{
		$data['uid'] 			= $this->data['uid'];
		//公司
		if(input('?post.proname'))
		{
		$data['proname'] 		= trim(request()->post('proname'));
		}
		//开始时间
		if(input('?post.begintime'))
		{
		$data['begintime'] 		= trim(strtotime(request()->post('begintime')));
		}
		//结束时间
		if(input('?post.endtime'))
		{
		$data['endtime'] 		= trim(strtotime(request()->post('endtime')));
		}
		//你负责的部分
		if(input('?post.yourworks'))
		{
		$data['yourworks'] 		= trim(request()->post('yourworks'));
		}
		//更多描述
		if(input('?post.description'))
		{
		$data['description'] 	= trim(request()->post('description'));
		}
		}

		
		//return json($data);		
		//调用验证器:Puser\valisate\index
		$validateResult = $this->validate($data,'Project');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			if(request()->isAjax())
			{	
			return $return;
			}
			else
			{
				return json($return);
			}	

		}

		//发送到inner
		$url = BASE_URL.url('/inner/puser/setproject');
		$return = curlHttp($url,'POST',$data);
		if(request()->isAjax())
		{	
			return json_decode ($return);
		}
		else
		{
			return $return;
		}						
	}
	
	//工作经历表
	public function setwork()
	{
		$data	=	array();
		//判断是修改还是添加		
		if(input('?get.update'))
		{
			$data['update']		=	request()->get('update');
			$data['id']				= trim(request()->post('id'));
		}
				
		if(request()->isPost())
		{
		$data['uid'] 			= $this->data['uid'];
		//公司名称
		if(input('?post.company'))
		{
		$data['company'] 		= trim(request()->post('company'));
		}
		//开始时间
		if(input('post.begintime'))
		{
		$data['begintime'] 		= strtotime(trim(request()->post('begintime')));
		}
		//结束时间
		if(input('?post.endtime'))
		{
		$data['endtime'] 		= strtotime(trim(request()->post('endtime')));
		}
		//职位
		if(input('?post.position'))
		{	
		$data['position'] 		= trim(request()->post('position'));
		}
		if(input('?post.description'))
		{
		$data['description'] 	= trim(request()->post('description'));
		}
		}
		
		//return json($data);		
		//调用验证器:Puser\valisate\work
		$validateResult = $this->validate($data,'Work');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			if(request()->isAjax())
			{	
			return $return;
			}
			else
			{
				return json($return);
			}				

		}

		//发送到inner
		$url = BASE_URL.url('/inner/puser/setwork');
		$return = curlHttp($url,'POST',$data);
		if(request()->isAjax())
		{	
			return json_decode ($return);
		}
		else
		{
			return $return;
		}							
	}
		
			
	//设置培训经历
	public function setTrain()
	{
		//定义变量
		$data	=	array();
		//判断是修改还是添加		
		if(input('?get.update'))
		{
			$data['update']		=	request()->get('update');
			$data['id']				= trim(request()->post('id'));
		}				
		if(request()->isPost())
		{
		$data['uid'] 			= $this->data['uid'];
		//培训机构
		if(input('?post.school'))
		{
		$data['school'] 		= trim(request()->post('school'));
		}
		//开始时间
		if(input('?post.begintime'))
		{
		$data['begintime'] 		= strtorime(trim(request()->post('begintime')));
		}
		//结束时间
		if(input('?post.endtime'))
		{
		$data['endtime'] 		= strtotime(trim(request()->post('endtime')));
		}
		//培训技能
		if(input('?post.skills'))
		{
		$data['skills'] 		= trim(request()->post('skills'));
		}
		//更多描述
		if(input('post.description'))
		{
		$data['description'] 	= trim(request()->post('description'));
		}
		}

		
		//return json($data);		
		//调用验证器:Puser\valisate\index
		$validateResult = $this->validate($data,'Train');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			if(request()->isAjax())
			{	
			return $return;
			}
			else
			{
				return json($return);
			}	

		}

		//发送到inner
		$url = BASE_URL.url('/inner/puser/settrain');
		$return = curlHttp($url,'POST',$data);
		if(request()->isAjax())
		{	
			return json_decode ($return);
		}
		else
		{
			return $return;
		}					
	}
	
	
	//自我评价表
	public function setdesc()
	{
		//定义变量
		$data	=	array();
		//判断是修改还是添加		
		if(input('?get.update'))
		{
			$data['update']		=	request()->get('update');
		}				
		if(request()->isPost())
		{
		$data['uid'] 		= 	$this->data['uid'];
		//自我评价
		if(input('?post.self'))
		{
		$data['self'] 		= 	request()->post('self');
		}
		}
		
		//return json($data);		
		//调用验证器:Puser\valisate\index
		$validateResult = $this->validate($data,'Desc');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			if(request()->isAjax())
			{	
			return $return;
			}
			else
			{
				return json($return);
			}	

		}

		//发送到inner
		$url = BASE_URL.url('/inner/puser/setdesc');
		$return = curlHttp($url,'POST',$data);
		if(request()->isAjax())
		{	
			return json_decode ($return);
		}
		else
		{
			return $return;
		}					
	}
	

	//到岗时间
	public function setarrival()
	{
		//定义变量
		$data	=	array();
		//判断是修改还是添加		
		if(input('?get.update'))
		{
			$data['update']		=	request()->get('update');
		}				
		if(request()->isPost())
		{
		$data['uid'] 		= 	$this->data['uid'];
		//到岗时间
		if(input('?post.time'))
		{
		$data['time'] 		= 	request()->post('time');
		}
		}
		
		//return json($data);		
		//调用验证器:Puser\valisate\index
		$validateResult = $this->validate($data,'Arrival');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			if(request()->isAjax())
			{	
			return $return;
			}
			else
			{
				return json($return);
			}	

		}

		//发送到inner
		$url = BASE_URL.url('/inner/puser/setarrival');
		$return = curlHttp($url,'POST',$data);
		if(request()->isAjax())
		{	
			return json_decode ($return);
		}
		else
		{
			return $return;
		}					
	}



	
	//设置个人技能
	public function setSkills()
	{
		//定义变量
		$data	=	array();
		//判断是修改还是添加		
		if(input('?get.update'))
		{
			$data['update']		=	request()->get('update');
			$data['id']				= trim(request()->post('id'));
		}				
		if(request()->isPost())
		{
		$data['uid'] 			= $this->data['uid'];
		//技能名称
		if(input('?post.pname'))
		{
		$data['pname'] 			= trim(request()->post('pname'));
		}
		//技能描述
		if(input('?post.descrption'))
		{
		$data['description'] 	= trim(request()->post('description'));
		}
		//使用时间
		if(input('?post.monthstime'))
		{
		$data['monthstime'] 	= trim(request()->post('monthstime'));
		}
		//熟练度
		if(input('?post.mastery'))
		{
		$data['mastery'] 		= trim(request()->post('mastery'));
		}
		}
		
		//return json($data);		
		//调用验证器:Puser\valisate\index
		$validateResult = $this->validate($data,'Skills');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			if(request()->isAjax())
			{	
			return $return;
			}
			else
			{
				return json($return);
			}				

		}

		//发送到inner
		$url = BASE_URL.url('/inner/puser/setskills');
		$return = curlHttp($url,'POST',$data);
		if(request()->isAjax())
		{	
			return json_decode ($return);
		}
		else
		{
			return $return;
		}					
	}
	
	//设置期望职位
	public function setExpectwork()
	{
		//定义变量
		$data	=	array();
		//判断是修改还是添加		
		if(input('?get.update'))
		{
			$data['update']		=	request()->get('update');
			$data['id']				= trim(request()->post('id'));
		}				
		if(request()->isPost())
		{
		$data['uid'] 			= $this->data['uid'];
		//职位名称
		if(input('?post.pname'))
		{	
		$data['pname'] 			= trim(request()->post('pname'));
		}
		//职位描述
		if(input('?post.description'))
		{
		$data['description'] 	= trim(request()->post('description'));
		}
		//期望薪资
		if(input('?post.salary'))
		{
		$data['salary'] 		= trim(request()->post('salary'));
		}
		//期望工作城市
		if(input('post.city'))
		{
		$data['city'] 			= trim(request()->post('city'));
		}
		}
		
		//return json($data);		
		//调用验证器:Puser\valisate\index
		$validateResult = $this->validate($data,'Expectwork');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			if(request()->isAjax())
			{	
			return $return;
			}
			else
			{
				return json($return);
			}	

		}

		//发送到inner
		$url = BASE_URL.url('/inner/puser/setexpectwork');
		$return = curlHttp($url,'POST',$data);
		if(request()->isAjax())
		{	
			return json_decode ($return);
		}
		else
		{
			return $return;
		}	 					
}	
	//设置个人作品
	public function setProduct()
	{
		//定义变量
		$data	=	array();
		//判断是修改还是添加		
		if(input('?get.update'))
		{
			$data['update']		=	request()->get('update');
			$data['id']				= trim(request()->post('id'));
		}				
		if(request()->isPost())
		{
		$data['uid'] 			= $this->data['uid'];
		//作品链接
		if(input('?post.plink'))
		{
		$data['plink'] 			= trim(request()->post('plink'));
		}
		//作品描述
		if(input('?post.description'))
		{
		$data['description'] 	= trim(request()->post('description'));
		}
		//作品url
		if(input('?post.imgurl'))
		{
		$data['imgurl'] 		= trim(request()->post('imgurl'));
		}
		}
		//return json($data);		
		//调用验证器:Puser\valisate\index
		$validateResult = $this->validate($data,'Product');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			if(request()->isAjax())
			{	
			return $return;
			}
			else
			{
				return json($return);
			}	

		}

		//发送到inner
		$url = BASE_URL.url('/inner/puser/setproduct');
		$return = curlHttp($url,'POST',$data);
		if(request()->isAjax())
		{	
			return json_decode ($return);
		}
		else
		{
			return $return;
		}					
	}
	
}