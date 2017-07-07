<?php

namespace app\sso\controller;

use think\Controller;

class Wblogin extends Controller
{
	
	private $appkey;
	private $appsecret;
	private $requestUrl;
	private $redirectUri;

	
	public function __construct()
	{
		//微博登录应用appkey
		$this->appkey			=	'1548782774';
		//微博登录应用appsecret
		$this->appsecret		=	'6eb465233710853c2e6592cd8cd80004';
		//pc端获取code的地址
		$this->requestUrl[0]	=	'https://api.weibo.com/oauth2/authorize';
		//pc端的回调地址
		$this->redirectUri		=	BASE_URL.url('/sso/wblogin/callback');
		
	}
	
	public function index()
	{
		//构造获取code的url
		//构造获取code的url		
		$url	=	$this->requestUrl[0]."?response_type=code&client_id=".$this->appkey."&redirect_uri=".$this->redirectUri."&state=weibo";
		//跳转到回调页面
		jsjump($url);	
	}
	
	public function callback()
	{
		
	}
		
}
