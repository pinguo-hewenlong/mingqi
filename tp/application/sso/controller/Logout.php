<?php
namespace app\sso\controller;
use think\Session;
use think\Controller;

class Logout extends Controller
{
	public function index()	
	{
		Session::clear();
		$this->success('退出成功','Sso/Index/test');		
	}
}
