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
		return $return;		
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
		return $return;		
	}	
	//设置企业基本信息
	public function setInfo()
	{
		if(request()->isPost())
		{
		$data['uid'] = $this->data['cuid'];
		//企业名称
		if(input('?post.companyname'))
		{
			$data['companyname'] = $_POST['companyname'];
		}
		//hr邮箱
		if(input('?post.hremail'))
		{
			$data['hremail'] = $_POST['hremail'];
		}
		//企业logo
		if(input('?post.thubmurl'))
		{
			$data['thumburl'] = $_POST['thumburl'];
		}
		//企业电话
		if(input('?post.comphone'))
		{
			$data['comphone'] = $_POST['comphone'];
		}
		//企业城市代码
		if(input('post.city')) {
			$data['city'] = $_POST['city'];
		}
		//hr姓名
		if(input('post.hrname'))
		{
			$data['hrname'] = $_POST['hrname'];
		}
		//hr联系电话
		$data['hrphone'] 		= $_POST['hrphone'];
		//企业性质代码
		$data['nature'] 		= $_POST['nature'];
		//企业规模代码
		$data['scale'] 			= $_POST['scale'];
		//企业简介
		$data['description'] 	= $_POST['description'];
		//是否认证
		$data['isrz'] 			= $_POST['isrz'];						
		}
		else
		{
			$data = array();
		}	
		//调用验证器:Cuser\valisate\Info
		$validateResult = $this->validate($data,'Info');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			return json($return);

		}

		//发送到inner
		$url = BASE_URL.url('/inner/cuser/setinfo');
		$return = curlHttp($url,'POST',$data);
		return $return;					
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
		$data['team'] 			= $_POST['team'];
		//获取职位发布时间
		$data['begintime'] 		= $_POST['begintime'];
		//获取职位失效时间
		$data['endtime'] 		= $_POST['endtime'];					
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
		if(Request::instance()->isPost())
		{
		//读取企业UID	
		$data['cid'] 		= $this->data['uid'];
		//获取发展历程时间戳
		$data['time'] 		= strtotime($_POST['time']);
		//获取发展历程描述		
		$data['title'] 		= $_POST['title'];					
		}
		else
		{
			$return['status'] = 0;
			$return['message'] = '非法请求';
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
}