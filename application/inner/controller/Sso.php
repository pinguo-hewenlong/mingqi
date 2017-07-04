<?php
namespace app\inner\controller;

use think\Controller;

use think\Db;

use think\Request;

class Sso extends Base
{
	public function __construct()
	{
		parent::__construct();		
	}

    //用户注册	
	public function register()
	{
		//初始化内部传送过来的相关数据
		$data['username']		=	$_POST['username'];			
		$data['password']		=	$_POST['password'];
		$data['gateway']		=	$_POST['gateway'];
		$data['type']			=	$_POST['type'];		
		$data['regtime']		=	$_POST['regtime'];
		$data['regip']			=	$_POST['regip'];
		
		//return json($data);
		//判断注册类型		
		switch($data['type'])
		{
			case 'puser':
			$table	=	'puser';
			break;
			case 'cuser':
			$table	=	'cuser';
			break;
			default:
			//设置入口错误的错误信息
			$return['status'] 	= 	0;
			$return['message'] 	= 	"非法请求,入口错误";
			return json($return);			
		}
		//return json($data);
		//判断手机号是否已经被注册
		$dbdata['username'] = $data['username'];
		$result = Db::name($table)->where($dbdata)->find();
		
		if($result)
		{
			$return['status'] = 0;
			$return['message'] = '手机号已经注册过了';
			return json($return);
		}
		else
		{
			//定义提交的数据集合
			$dbdata['password']			= $data['password'];
			$dbdata['regtime']			= $data['regtime'];
			$dbdata['regip']			= $data['regip'];
			$dbdata['loginip']			= $data['regip'];
			$dbdata['logintime']		= $data['regtime'];
			$dbdata['isauthentication']	= 0;
			$dbdata['gateway']			= $data['gateway'];		
			//存入数据库	
			//return json($dbdata);		
			$request = Db::name($table)->insert($dbdata);

			$result  = Db::name($table)->where($dbdata)->find();
			if($request)
			{
				$return['status'] = 1;
				$return['message'] = '注册成功';
				return json($return);	
			}
			else
			{
				$return['status'] = 0;
				$return['message'] = '注册失败,未知错误';
				return json($return);	
			}
			
		}		
	}	
	


	//用户QQ登录
	public function loginFromQQ()
	{
		//初始化内部传送过来的相关数据
		$data['qqopenid']		=	$_POST['qqopenid'];			
		$data['qqtoken']		=	$_POST['qqtoken'];
		$data['gateway']		=	$_POST['gateway'];
		$data['type']			=	$_POST['type'];		
		$data['logintime']		=	$_POST['logintime'];
		$data['loginip']		=	$_POST['loginip'];
		//判断登录类型		
		switch($data['type'])
		{
			case 'puser':
			$table	=	'puser';
			break;
			case 'cuser':
			$table	=	'cuser';
			break;
			default:
			//设置入口错误的错误信息
			$return['status'] 	= 	0;
			$return['message'] 	= 	"非法请求,入口错误";
			return json($return);			
		}

		//return json($data);
		$dbdata['qqopenid']		=	$data['qqopenid'];		
		$request = Db::name($table)->where($dbdata)->find();
		//dump($request);
		//exit;
		if(!$request)
		{
			$data['regtime']					=	$data['logintime'];
			$data['regip']						=	$data['loginip'];
			$data['isauthentication']			=	0;						
			//openid不存在则存入数据库
			$request2 = Db::name($table)->insert($data);
			if(!$request2)
			{
				//设置入库错误的返回信息
				$return['status'] 	= 	0;
				$return['message'] 	= 	"QQ登录未知错误";
				return json($return);				
			}
			else
			{
				//设置登录成功之后的返回信息
				$return['status'] = 1;
				$return['message'] = "登录成功";
				$return['uid'] = $request['id'];
				$return['type'] 	= $data['type'];
				$return['gateway'] 	= $data['gateway'];					
 				return json($return);				
			}			
		}
		else
		{
			//登录成功，更新数据库
			$successData['logintime']	=	$data['logintime'];
			$successData['loginip']		=	$data['loginip'];
			$successData['qqtoken']		=	$data['qqtoken'];
			$request2	=	Db::name($table)->where($dbdata)->update($successData);
			//返回登录成功之后的返回信息
			if($request2 == 0)
			{
				//设置入库错误的返回信息
				$return['status'] 	= 	0;
				$return['message'] 	= 	"QQ登录未知错误";
				return json($return);				
			}
			else
			{
				$return['status'] = 1;
				$return['message'] = "登录成功";			
				$return['uid'] = $request['id'];
				$return['type'] 	= $data['type'];
				$return['gateway'] 	= $data['gateway'];					
 				return json($return);			
			}			

																	
		}
	}
	//短信登录
	public function loginFromMessage()
	{
		//初始化内部传送过来的相关数据
			
		
		$data['username']		=	$_POST['username'];			
		$data['gateway']		=	$_POST['gateway'];
		$data['logintime']		=	$_POST['logintime'];
		$data['loginip']		=	$_POST['loginip'];
		$data['type']			=	$_POST['type'];

		switch($data['type'])
		{
			case 'puser':
			$table	=	'puser';
			break;
			case 'cuser':
			$table	=	'cuser';
			break;
			default:
			//设置入口错误的错误信息
			$return['status'] 	= 	0;
			$return['message'] 	= 	"非法请求,入口错误";
			return json($return);			
		}
	

						
		$dbdata['username']		=	$data['username'];		
		$request = Db::name($table)->where($dbdata)->find();

		if(!$request)
		{
			//设置用户名不存在的错误信息
			$return['status'] 	= 	0;
			$return['message'] 	= 	"用户名不存在";
			return json($return);						
		}
		else
		{


				//登录成功，更新数据库
				$successData['logintime']	=	$data['logintime'];
				$successData['loginip']		=	$data['loginip'];
				$successData['gateway']		=	$data['gateway'];
	
				$request3	=	Db::name($table)->where($dbdata)->update($successData);
				
				if($request3 == 0)
				{
					//设置更新登录信息失败的错误信息
					$return['status'] 	= 	0;
					$return['message'] 	= 	"密码登录未知错误";
					return json($return);					
				}
				else
				{					//设置更新登录成功的返回信息											
					$return['status'] 	= 1;
					$return['message'] 	= "登录成功";			
					$return['uid'] 		= $request['id'];
					$return['type'] 	= $data['type'];
					$return['gateway'] 	= $data['gateway'];										
 					return json($return);					
				}		

																	
		}
	}	
	
	
	//用户密码登录
	public function loginFromPassword()
	{
		//初始化内部传送过来的相关数据
			
		
		$data['username']		=	$_POST['username'];			
		$data['password']		=	$_POST['password'];
		$data['gateway']		=	$_POST['gateway'];
		$data['logintime']		=	$_POST['logintime'];
		$data['loginip']		=	$_POST['loginip'];
		$data['type']			=	$_POST['type'];

		switch($data['type'])
		{
			case 'puser':
			$table	=	'puser';
			break;
			case 'cuser':
			$table	=	'cuser';
			break;
			default:
			//设置入口错误的错误信息
			$return['status'] 	= 	0;
			$return['message'] 	= 	"非法请求,入口错误";
			return json($return);			
		}
	

		//$return['status'] 	= 	0;
		//$return['message'] 	= 	$table;
		//return json($return);	
						
		$dbdata['username']		=	$data['username'];		
		$request = Db::name($table)->where($dbdata)->find();

		if(!$request)
		{
			//设置用户名不存在的错误信息
			$return['status'] 	= 	0;
			$return['message'] 	= 	"用户名不存在";
			return json($return);						
		}
		else
		{

			$dbdata['password']			=	$data['password'];
			$request2	=	Db::name($table)->where($dbdata)->find();
			//返回登录成功之后的返回信息
			if(!$request2)
			{
				//设置密码错误的错误信息
				$return['status'] 	= 	0;
				$return['message'] 	= 	"密码错误";
				return json($return);				
			}
			else
			{
				//登录成功，更新数据库
				$successData['logintime']	=	$data['logintime'];
				$successData['loginip']		=	$data['loginip'];
				$successData['gateway']		=	$data['gateway'];
	
				$request3	=	Db::name($table)->where($dbdata)->update($successData);
				
				if($request3 == 0)
				{
					//设置更新登录信息失败的错误信息
					$return['status'] 	= 	0;
					$return['message'] 	= 	"密码登录未知错误";
					return json($return);					
				}
				else
				{					//设置更新登录成功的返回信息											
					$return['status'] 	= 1;
					$return['message'] 	= "登录成功";			
					$return['uid'] 		= $request['id'];
					$return['type'] 	= $data['type'];
					$return['gateway'] 	= $data['gateway'];										
 					return json($return);					
				}
			
			}			

																	
		}
	}
	
	//修改密码
	public function ModifyPassword()
	{
		//初始化内部传送过来的相关数据		
		$data['username']		=	$_POST['username'];			
		$data['gateway']		=	$_POST['gateway'];
		$data['type']			=	$_POST['type'];
		$data['password']		=	$_POST['password'];

		switch($data['type'])
		{
			case 'puser':
			$table	=	'puser';
			break;
			case 'cuser':
			$table	=	'cuser';
			break;
			default:
			//设置入口错误的错误信息
			$return['status'] 	= 	0;
			$return['message'] 	= 	"非法请求,入口错误";
			return json($return);			
		}
		
		
		$dbdata['username']	=	$data['username'];
		
		$request	=	db($table)->where($dbdata)->find();
		
		if($request)
		{
			$setdata['password']	=	$_POST['password'];
			$request2	=	db($table)->where($dbdata)->update($setdata);
			if($request2 == 1)
			{
				$return['status']	=	1;
				$return['message']	=	'密码修改成功';
				return json($return);			
			}	
			else
			{
				$return['status']	=	0;
				$return['message']	=	'内部错误,密码修改失败';
				return json($return);				
			}		
		}
		else
		{
			$return['status']	=	0;
			$return['message']	=	'内部错误,密码修改失败';
			return json($return);
		}
		
	}
		
}
