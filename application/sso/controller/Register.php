<?php
	
namespace app\sso\controller;

use think\Controller;
use think\View;
use think\Request;
use think\Session;

class Register extends Controller{
	
	private $msgCode;

	public function __construct()
    {	
		
    }
	
	//用户注册
	public function index()
	{
		//return session('MSGCODE');
		
		//---------接收前端信息------------
		if(request()->isPost())
		{
		//注册入口	
		$data['gateway']	= trim(request()->post('gateway'));
		//注册类型	
		$data['type']		= trim(request()->post('type'));					
		//用户名
		$data['username']	= trim(request()->post('username')); 		
		//密码
		$data['password']	= trim(request()->post('password')); 	
		//短信验证码
		$data['smsCode']	= trim(request()->post('smsCode'));		
		}
		
		//return json($data);
		
		//return json($data);	
		//----------验证器-----------
		//调用验证器:sso\valisate\register
		$validateResult = $this->validate($data,'Register');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			return json($return);

		}
		//密码加密之后进行存储,暂时使用md5加密
		$data['password']	=	md5($data['password']);	
		
		
		
		
		//验证短信
		if($data['smsCode']	==	session('MSGCODE'))
		{
			
		}
		else
		{
			$return['status'] 	= 0;
			$return['message'] 	= "短信验证码填写错误";	
			return json($return);			
		}
		//获取ip
		$data['regip'] 			= request()->ip();
		$data['regtime'] 		= time();				
		//发送到inner
		//return json($data);		
		$url = BASE_URL.url('/inner/sso/register');
		$return = curlHttp($url,'POST',$data);
		//return $return;
		//注册行为结束之后立即删除短信session
		
		session('MSGCODE',null);	
		
		return json_decode($return);
	}
	//获取短信验证码
	public function getMsgCode()
	{
		//获取发送短信的手机号码
		$phone				=	request()->post('username');
		$data['username']	=	$phone;
		//return $phone;	
		//调用验证器:sso\valisate\register
		$validateResult = $this->validate($data,'GetMsgCode');
		//输出错误信息
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
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
		$alimns		=	new Alimns($phone);
		$smsArr		=	$alimns->postMessage();
		//调试代码
//		$smsArr['status']	=	true;
//		$smsArr['msgCode']	=	'123456';		
		//短信发送成功返回信息，并将短信值存入session
		if($smsArr['status'] ==	true)
		{
			//短信发送成功，将短信和发送时间存入session
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
	
	
	
} 
