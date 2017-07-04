<?php
	
/*
 * 用户登录
 *LoginP:密码登录
 *LoginM:短信登录
 *ForgetPassword:忘记密码，短信验证
 *ModifyPassword:修改密码  
 * 
 */
	
namespace app\sso\controller;
use think\Session;
use think\Controller;
use think\View;

class Login extends Controller
{
	private $smsCode;
	private $req;
		
	public function __construct()
	{
		//初始化私有变量
		$this->smsCode	=	'';
		$this->req		=	request();					
	}
	//密码登录
	public function LoginP()
	{
		//---------接收前端信息------------
				
		//登录入口
		if($this->req->isPost())
		{
		$data['gateway']  	=	trim($this->req->post('gateway'));
		//登录类型	
		$data['type']  		=	trim($this->req->post('type'));		
		//用户名
		$data['username'] 	=	trim($this->req->post('username')); 		
		//密码
		$data['password'] 	=	trim($this->req->post('password'));	
		//图形验证码	
		$data['captcha'] 	=	trim($this->req->post('captcha'));
		}
		else
		{
			$return['status'] = 0;
			$return['message'] = '非法请求,不正确的请求类型';	
			return json($return);			
		}
		
		//return json($data);
		//----------验证器-----------
		//调用验证器:sso\valisate\index
		$validateResult = $this->validate($data,'LoginP');
		//输出错误信息		
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			return json($return);

		}
		
		//对明码进行md5加密
		$data['password']	=	md5($data['password']); 		
		//获取登录ip
		$data['loginip']	=	$this->req->ip();
		//获取登录时间
		$data['logintime']	=	time();		
		//发送到inner
		$url	=	BASE_URL.url('/inner/sso/loginfrompassword');
		$return = curlHttp($url,'POST',$data);
		//判断是否登录成功，内部获取json，转为数组进行判断
		$returnArray = json_decode($return,true);
		if($returnArray['status'] == 1)
		//登录成功的执行代码
		{
			loginAttr($returnArray['uid'],$returnArray['gateway'],$returnArray['type']);									
			return json_decode($return);
		}
		else
		//登录失败后的执行代码
		{
			return json_decode($return);
		}		
	}
	//短信登录
	public function LoginM()
	{
		//---------接收前端信息------------
				
		//登录入口
		if($this->req->isPost())
		{
		$data['gateway']  	=	trim($this->req->post('gateway'));
		//登录类型	
		$data['type']  		=	trim($this->req->post('type'));		
		//用户名
		$data['username'] 	=	trim($this->req->post('username')); 		
		//短信验证码
		$data['smsCode'] 	=	trim($this->req->post('smsCode')); 	
		//图形验证码	
		$data['captcha'] 	=	trim($this->req->post('captcha'));
		}
		else
		{
			$return['status'] = 0;
			$return['smsage'] = '非法请求,不正确的请求类型';	
			return json($return);			
		}
		//----------验证器-----------
		//调用验证器:sso\valisate\index
		$validateResult = $this->validate($data,'LoginM');
		//输出错误信息		
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			return json($return);

		}
		//验证短信
		if($data['smsCode']	==	session('MSGCODE'))
		{
			
		}
		else
		{
			$return['status'] = 0;
			$return['message'] = "短信验证码填写错误";	
			return json($return);			
		}
		
		
		//获取登录ip
		$data['loginip']	=	$this->req->ip();
		//获取登录时间
		$data['logintime']	=	time();		
		//发送到inner
		$url	=	BASE_URL.url('/inner/sso/loginfrompassword');
		$return = curlHttp($url,'POST',$data);
		
		//登录完成后删除短信session
		session('MSGCODE',null);
		
		//判断是否登录成功，内部获取json，转为数组进行判断
		$returnArray = json_decode($return,true);
		if($returnArray['status'] == 1)
		//登录成功的执行代码
		{
			loginAttr($returnArray['uid'],$returnArray['gateway'],$returnArray['type']);									
			return json_decode($return);
		}
		else
		//登录失败后的执行代码
		{
			return json_decode($return);
		}		
	}
	
	public function getMsgCode()
	{
		//获取发送短信的手机号码
		$phone		=	trim(request()->post('username'));
		if(empty($phone))
		{
			$return['status']	=	0;
			$return['message']	=	'请提供手机号码';
			return json($return);			
		}		
		//获取短信发送时间
		$time		=	time();
		//判断短信发送时间间隔
		if(session('?MSGTIME') == 1)
		{
			if($time - session('MSGTIME') < 60)
				{
					$return['status']	=	0;
					$return['message']	=	'两次发送间隔小于60秒';
					return json($return);
				}
		}
		//通过阿里云短信接口发送短信
		//$alimns		=	new Alimns($phone);
		//$smsArr		=	$alimns->postMessage();
		
		//调试代码
		$smsArr['status']	=	1;
		$smsArr['msgCode']	=	'123456';
		
		
		//短信发送成功返回信息，并将短信值存入session
		if($smsArr['status'] ==	true)
		{
			session('MSGCODE',$smsArr['msgCode']);
			session('MSGTIME',$time);
			$return['status']	=	1;
			$return['message']	=	'短信发送成功';
			return json($return);
		}
		//短信发送失败返回信息		
		else
		{
			$return['status']	=	0;
			$return['message']	=	'短信发送失败';
			return json($return);			
		}			
	}
	
	
	//找回密码
	public function ForgetPassword()
	{
		if(request()->isPost())
		{
			//接收手机号
			$data['username']	=	trim(request()->post('username'));
			//接收验证码
			$data['captcha']	=	trim(request()->post('captcha'));
			//接收短信验证码 
			$data['smsCode']	=	trim(request()->post('smsCode'));
			
		}
		else
		{
			$return['status']	=	0;
			$return['message']	=	'非法请求,不正确的请求类型';
			return json($return);
		}
		//调用验证器:sso\valisate\ForgetPassword
		$validateResult = $this->validate($data,'ForgetPassword');
		//输出错误信息		
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			return json($return);

		}
		//验证短信
		if($data['msgCode']	==	session('MSGCODE'))
		{
			//验证成功后给一个标记防止直接post修改密码
			session('PHONE',$data['username']);
			session("ALLOWMODIFY",'OK');
			
			$return['status']	=	1;
			$return['message']	=	'短信验证成功';
			return json($return);			
		}
		else
		{
			$return['status'] = 0;
			$return['message'] = "短信验证码填写错误";	
			return json($return);			
		}
		
		//验证完成后删除短信session
		session('MSGCODE',null);
				
	}
	
	
	//修改密码
	public function ModifyPassword()
	{
		//判断是否允许修改
		if(session('ALLOWMODIFY') == 'OK')
		{
		}
		else
		{
			$return['status']	=	0;
			$return['message']	=	'非法请求,请先通过短信验证';
			return json($return);
		}
		//验证后清除
		session('ALLOWMODIFY',null);

		//读取数据
		$data['gateway']	=	trim(request()->post('gateway'));
		$data['type']		=	trim(request()->post('type'));
		$data['password']	=	trim(request()->post('password'));
		$data['password2']	=	trim(request()->post('password2'));
		//调用验证器:sso\validate\ModifyPassword
		$validateResult = $this->validate($data,'ModifyPassword');
		//输出错误信息		
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			return json($return);

		}
		//对密码进行加密
		$data['password']	=	md5($data['password']);		
		//读取手机号
		$data['username']	=	session('PHONE');
		//读取后删除
		session('PHONE',null);		
		//发送到inner
		$url	=	BASE_URL.url('/inner/sso/ModifyPassword');
		$return = curlHttp($url,'POST',$data);
		
		return json_decode($return);		
	}
	
}

