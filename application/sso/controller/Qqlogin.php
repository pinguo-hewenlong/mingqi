<?php
namespace app\sso\controller;
use think\Session;
use think\Controller;

class Qqlogin extends Controller
{
	
	private $appid;
	private $appkey;
	private $requestUrl;
	private	$gateway;
	private	$type;
	private $ip;
	
	public function __construct()
	{
			
			//申请成功后分配的appid
			$this->appid				=	'1106225440';
			//申请成功后分配的appkey
			$this->appkey				=	'UABGs68XW9oR57r7';
			//pc端获取code的地址
			$this->requestUrl[0]		=	'https://graph.qq.com/oauth2.0/authorize';
			//pc端获取token的地址
			$this->requestUrl[1]		=	'https://graph.qq.com/oauth2.0/token';
			//pc端获取openid的地址
			$this->requestUrl[2]		=	'https://graph.qq.com/oauth2.0/me';
			//设置回调地址
			$this->redirectUri			=	BASE_URL.url('/sso/qqlogin/callback');				
	}
	//获取code,并传递给回调页面
	public function index()	
	{
		//获取前端传送过来的额外参数
		Session::set('QQ-TYPE',request()->get('type'));
		Session::set('QQ-GATEWAY',request()->get('gateway'));
		Session::set('QQ-IP',request()->ip());
								
		//构造获取code的url		
		$url	=	$this->requestUrl[0]."?response_type=code&client_id=".$this->appid."&redirect_uri=".$this->redirectUri."&state=qq";
		//跳转到回调页面
		jsjump($url);		
					
	}
	//通过回调页面获取用户token(有效期三个月)和openid
	public function callback()
	{
		if(isset($_GET['code']) && isset($_GET['state']))
		{
			
		//取得code值	
		$code 	=	$_GET['code'];
		//构造获取access_token的url
		$url	=	$this->requestUrl[1]."?grant_type=authorization_code&client_id=".$this->appid."&client_secret=".$this->appkey."&code=".$code."&redirect_uri=".$this->redirectUri;
		//访问获取access_token的页面
		$res	=	file_get_contents($url);
		//从返回文本中取得access_token
		$token	=	getStrParam($res,"access_token=","&");
		
		if(strlen($token)  >32 || strlen($token) < 16)
		{
			$return['status']	=	0;
			$return['message']	=	'QQ登录未知错误';
			return json($return);				
		}		
		//构造获取openid的url
		$url	=	$this->requestUrl[2]."?access_token=".$token;
		//访问获取openid的页面
		$res	=	file_get_contents($url);
		//从返回文本中取得openid
		$openid	=	getStrParam($res,'openid":"','"');
		if(strlen($openid)  >32 || strlen($openid) < 16)
		{
			$return['status']	=	0;
			$return['message']	=	'QQ登录未知错误';
			return json($return);				
		}		
		//获取登录ip以及构造传递参数
		$data['loginip']		=	Session::get('QQ-IP');
		$data['logintime']		=	time();		
		$data['qqtoken']		=	$token;
		$data['qqopenid']		=	$openid;
		$data['gateway']		=	Session::get('QQ-GATEWAY');
		$data['type']			=	Session::get('QQ-TYPE');
		
		//return json($data);				
		//发送到inner
		$url = BASE_URL.url('/inner/sso/loginfromqq');
		$return = curlHttp($url,'POST',$data);		
		//跳转到成功页面

		//判断是否登录成功
		$returnArray = json_decode($return,true);
		if($returnArray['status'] == 1)
		//登录成功的执行代码
		{
			Session::set('UID',$returnArray['uid']);
			Session::set('GATEWAY',$returnArray['gateway']);
			Session::set('TYPE',$returnArray['type']);
			return $return;
		}
		else
		//登录失败后的执行代码
		{
			return $return;
		}

		}
		else
		{
			$return['status']	=	0;
			$return['message']	=	'QQ登录未知错误';
			return json($return);
		}
			
	}

}
