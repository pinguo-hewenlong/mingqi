<?php
namespace app\cuser\controller;
use think\Controller;
use think\Session;
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
	//获取企业基本信息
	public function getInfo()
	{
		//设置要查询的表		
		$this->data['table'] = 'cuser_info';
		//return json($this->data);
		//发送到inner
		$url = BASE_URL.url('/inner/cuser/getfromdb');
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
	//获取企业发展历程
	public function getMilePost()
	{
		//设置要查询的表		
		$this->data['table'] = 'cuser_milepost';
		//return json($this->data);
		//发送到inner
		$url = BASE_URL.url('/inner/cuser/getfromdb');
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
	//获取企业发布职位列表
	public function getPost()
	{		
		$this->data['table'] = 'cuser_post';
		//return json($this->data);
		//发送到inner
		$url = BASE_URL.url('/inner/cuser/getfromdb');
		//return $url;
		$return = curlHttp($url,'POST',$this->data);
		return json_decode($return);		
	}	
	//设置企业基本信息
	public function setInfo()
	{
		
		$data	=	array();
		
		$data['uid']	=	$this->data['uid'];
		
		if(request()->isPost())
		{
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
		}
		
		//调用验证器:Cuser\valisate\Info
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
		$url = BASE_URL.url('/inner/cuser/setinfo');
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

	//发布职位
	public function setPost()
	{
		if(Request::instance()->isPost())
		{
		//读取uid	
		$data['uid'] 			= $this->data['uid'];
		//生成职位ID:poid
		$data['poid'] 			= md5($data['uid'].time());	
		//获取职位名称	
		$data['title'] 			= $_POST['title'];
		//获取职位描述
		$data['content'] 		= $_POST['content'];
		//获取工作城市
		$data['city'] 			= $_POST['city'];
		//获取经验要求
		$data['workexp'] 		= $_POST['workexp'];
		//获取学历要求
		$data['eduction'] 		= $_POST['eduction'];
		//获取薪水代码
		$data['salary'] 		=  $_POST['salary'];
		//获取团队代码
		//$data['team'] 			= $_POST['team'];
		//获取职位发布时间
		$data['begintime'] 		= time();
		//获取职位失效时间
		//$data['endtime'] 		= $_POST['endtime'];
		//获取任职资格
		$data['qc']            =  $_POST['qc'];					
		}
		else
		{
			$return['status'] = 0;
			$return['message'] = '非法请求';
		}
		
		//return json($data);		
		//调用验证器:Cuser\valisate\Info
		$validateResult = $this->validate($data,'Post');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			return json($return);

		}

		//发送到inner
		$url = BASE_URL.url('/inner/cuser/setpost');
		$return = curlHttp($url,'POST',$data);
		return $return;					
	}
	
	//编辑团队信息
	public function setTeam()
	{
		if(Request::instance()->isPost())
		{
		//读取用户id	
		$data['cid'] 		= $this->data['uid'];
		//读取团队名称
		$data['tname'] 		= $_POST['tname'];
		//读取团队描述		
		$data['tdesc'] 		= $_POST['tdesc'];
		//读取团队状态
		$data['state'] 		= $_POST['state'];					
		}
		else
		{
			$return['status'] = 0;
			$return['message'] = '非法请求';
		}
		
		//return json($data);		
		//调用验证器:Cuser\valisate\Info
		$validateResult = $this->validate($data,'Team');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			return json($return);

		}

		//发送到inner
		$url = BASE_URL.url('/inner/cuser/setteam');
		$return = curlHttp($url,'POST',$data);
		return $return;					
	}
	
	//编辑发展历程信息
	public function setMilepost()
	{
		$data	=	array();
		
		if(Request::instance()->isPost())
		{
		//读取企业UID	
		$data['uid'] 		= $this->data['uid'];
		//获取发展历程时间戳
		$data['time'] 		= strtotime($_POST['time']);
		//获取发展历程描述		
		$data['title'] 		= $_POST['title'];
		//获取发展历程描述
		if(input('description'))
		{
			$data['description']	=	request()->post('description');
		}				
		}

		
		//return json($data);		
		//调用验证器:Cuser\valisate\Info
		$validateResult = $this->validate($data,'Milepost');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			return json($return);

		}

		//发送到inner
		$url = BASE_URL.url('/inner/cuser/setmilepost');
		$return = curlHttp($url,'POST',$data);
		return $return;					
	}
	//获取在招职位
	public function getPosts(){
		//获取当前页码
		$data['page']	    = trim(request()->post('page'));
		//每页条数
		$data['perpage']	= trim(request()->post('perpage'));
		//获取企业id
		$data['cid']	    = trim(request()->post('cid'));
		$url = BASE_URL.url('/inner/cuser/getPosts');
		$return = curlHttp($url,'POST',$data);
		return $return;
	}
}