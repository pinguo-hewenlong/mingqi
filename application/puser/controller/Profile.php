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
		return $return;		
	}
	//获取教育信息
	public function getEdu()	
	{
		$this->data['table'] = 'puser_edu';		
		//发送到inner
		$url = BASE_URL.url('/inner/puser/getfromdb');
		//return $url;
				
		$return = curlHttp($url,'POST',$this->data);
		return $return;				
		
	}
	//获取工作经历
	public function getWork()
	{
		$this->data['table'] = 'puser_work';		
		//发送到inner
		$url = BASE_URL.url('/inner/puser/getfromdb');
		$return = curlHttp($url,'POST',$this->data);
		return $return;			
		
	}
	//获取培训经历
	public function getTrain()
	{
		$this->data['table'] = 'puser_train';		
		//发送到inner
		$url = BASE_URL.url('/inner/puser/getfromdb');
		$return = curlHttp($url,'POST',$this->data);
		return $return;			
		
	}
	//获取个人技能
	public function getSkills()
	{
		$this->data['table'] = 'puser_skills';		
		//发送到inner
		$url = BASE_URL.url('/inner/puser/getfromdb');
		$return = curlHttp($url,'POST',$this->data);
		return $return;			
		
	}
	//获取project
	public function getProject()
	{
		$this->data['table'] = 'puser_project';		
		//发送到inner
		$url = BASE_URL.url('/inner/puser/getfromdb');
		$return = curlHttp($url,'POST',$this->data);
		return $return;			
		
	}
	//获取期望工作
	public function getExpectWork()
	{
		$this->data['table'] = 'puser_expectwork';		
		//发送到inner
		$url = BASE_URL.url('/inner/puser/getfromdb');
		$return = curlHttp($url,'POST',$this->data);
		return $return;			
		
	}
	//获取个人作品
	public function getProduct()
	{
		$this->data['table'] = 'puser_product';		
		//发送到inner
		$url = BASE_URL.url('/inner/puser/getfromdb');
		$return = curlHttp($url,'POST',$this->data);
		return $return;			
		
	}
	//------获取信息结束，设置信息开始
	//设置个人信息
	public function setInfo()
	{
		if(Request::instance()->isPost())
		{
		$data['uid'] 			= $this->data['uid'];
		$data['realname'] 		= $_POST['realname'];
		$data['email'] 			= $_POST['email'];
		$data['thumburl'] 		= $_POST['thumburl'];
		$data['eduction'] 		= $_POST['eduction'];
		$data['city'] 			= $_POST['city'];
		$data['gender'] 		= $_POST['gender'];
		$data['birth'] 			=  strtotime($_POST['birth']);
		$data['phone'] 			= $_POST['phone'];
		}
		else
		{
			$data = array();
		}
		
		//return json($data);		
		//调用验证器:Puser\valisate\index
		$validateResult = $this->validate($data,'Info');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			return json($return);

		}

		//发送到inner
		$url = BASE_URL.url('/inner/puser/setinfo');
		$return = curlHttp($url,'POST',$data);
		return $return;					
	}
	
	//设置教育经历
	public function setEdu()
	{
		if(Request::instance()->isPost())
		{
		$data['uid'] 			= $this->data['uid'];
		$data['school'] 		= $_POST['school'];
		$data['begintime'] 		= strtorime($_POST['begintime']);
		$data['endtime'] 		= strtotime($_POST['endtime']);
		$data['major'] 			= $_POST['major'];
		$data['record'] 		= $_POST['record'];
		}
		else
		{
			$data = array();
		}
		
		//return json($data);		
		//调用验证器:Puser\valisate\index
		$validateResult = $this->validate($data,'Edu');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			return json($return);

		}

		//发送到inner
		$url = BASE_URL.url('/inner/puser/setedu');
		$return = curlHttp($url,'POST',$data);
		return $return;					
	}
	
	//设置项目经历
	public function setProject()
	{
		if(Request::instance()->isPost())
		{
		$data['uid'] 			= $this->data['uid'];
		$data['proname'] 		= $_POST['proname'];
		$data['begintime'] 		= $_POST['begintime'];
		$data['endtime'] 		= $_POST['endtime'];
		$data['yourworks'] 		= $_POST['yourworks'];
		$data['description'] 	= $_POST['description'];
		}
		else
		{
			$data = array();
		}
		
		//return json($data);		
		//调用验证器:Puser\valisate\index
		$validateResult = $this->validate($data,'Project');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			return json($return);

		}

		//发送到inner
		$url = BASE_URL.url('/inner/puser/setproject');
		$return = curlHttp($url,'POST',$data);
		return $return;					
	}
	
	//工作经历表
	public function setwork()
	{
		if(Request::instance()->isPost())
		{
		$data['uid'] 			= $this->data['uid'];
		$data['company'] 		= $_POST['company'];
		$data['begintime'] 		= $_POST['begintime'];
		$data['endtime'] 		= $_POST['endtime'];
		$data['position'] 		= $_POST['position'];
		$data['description'] 	= $_POST['description'];
		}
		else
		{
			$data = array();
		}
		
		//return json($data);		
		//调用验证器:Puser\valisate\index
		$validateResult = $this->validate($data,'Work');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			return json($return);

		}

		//发送到inner
		$url = BASE_URL.url('/inner/puser/setwork');
		$return = curlHttp($url,'POST',$data);
		return $return;					
	}
		
			
		//设置培训经历
	public function setTrain()
	{
		if(Request::instance()->isPost())
		{
		$data['uid'] 			= $this->data['uid'];
		$data['school'] 		= $_POST['school'];
		$data['begintime'] 		= $_POST['begintime'];
		$data['endtime'] 		= $_POST['endtime'];
		$data['skills'] 		= $_POST['skills'];
		$data['description'] 	= $_POST['description'];
		}
		else
		{
			$data = array();
		}
		
		//return json($data);		
		//调用验证器:Puser\valisate\index
		$validateResult = $this->validate($data,'Train');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			return json($return);

		}

		//发送到inner
		$url = BASE_URL.url('/inner/puser/settrain');
		$return = curlHttp($url,'POST',$data);
		return $return;					
	}
	
	
			//设置个人技能
	public function setSkills()
	{
		if(Request::instance()->isPost())
		{
		$data['uid'] 			= $this->data['uid'];
		$data['pname'] 			= $_POST['pname'];
		$data['description'] 	= $_POST['description'];
		$data['monthstime'] 	= $_POST['monthstime'];
		$data['mastery'] 		= $_POST['mastery'];
		}
		else
		{
			$data = array();
		}
		
		//return json($data);		
		//调用验证器:Puser\valisate\index
		$validateResult = $this->validate($data,'Skills');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			return json($return);

		}

		//发送到inner
		$url = BASE_URL.url('/inner/puser/setskills');
		$return = curlHttp($url,'POST',$data);
		return $return;					
	}
	
				//设置期望职位
	public function setExpectwork()
	{
		if(Request::instance()->isPost())
		{
		$data['uid'] 			= $this->data['uid'];
		$data['pname'] 			= $_POST['pname'];
		$data['description'] 	= $_POST['description'];
		$data['salary'] 		= $_POST['salary'];
		$data['city'] 			= $_POST['city'];
		}
		else
		{
			$data = array();
		}
		
		//return json($data);		
		//调用验证器:Puser\valisate\index
		$validateResult = $this->validate($data,'Expectwork');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			return json($return);

		}

		//发送到inner
		$url = BASE_URL.url('/inner/puser/setexpectwork');
		$return = curlHttp($url,'POST',$data);
		return $return;					
	}
	
	//设置个人作品
	public function setProduct()
	{
		if(Request::instance()->isPost())
		{
		$data['uid'] 			= $this->data['uid'];
		$data['plink'] 			= $_POST['plink'];
		$data['description'] 	= $_POST['description'];
		$data['imgurl'] 		= $_POST['imgurl'];
		}
		else
		{
			$data = array();
		}
		
		//return json($data);		
		//调用验证器:Puser\valisate\index
		$validateResult = $this->validate($data,'Product');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			return json($return);

		}

		//发送到inner
		$url = BASE_URL.url('/inner/puser/setproduct');
		$return = curlHttp($url,'POST',$data);
		return $return;					
	}
	
	
}
