<?php
namespace app\inner\controller;

use think\Controller;


class Sns extends Base
{
	
	public function __construct()
	{
		parent::__construct();			
	}	
	
	
	public function accountCheck()
	{
		$data['uid']	=	request()->post('uid');
		$dbdata['uid']	=	$data['uid'];
		$request	=	db('sns_user')->where($dbdata)->find();
		if(!$request)
		{
			//用户第一次登录社群，读取相关信息
			$request2	=	db('puser_info')->where($dbdata)->find();
			if($request2)
			{
				//拉取用户信息
				$dbdata['thumburl']	=	$request2['thumburl'];
				$dbdata['nickname']	=	$request2['realname'];
				$dbdata['rank']		=	'懒得写头衔吧';
				$dbdata['introduce']	=	'懒得写描述吧';
				//存入数据库
				//return json($dbdata);
				$request3	=	db('sns_user')->insert($dbdata);

				if($request3 > 0)
				{
					//数据库查询失败，返回错误
					$return['status']	=	1;
					$return['message']	=	'写入新用户成功';
					return json($return);						
					
				}
				else
				{
					//数据库写入失败，返回错误
					$return['status']	=	0;
					$return['message']	=	'内部错误，暂时无法访问';
					return json($return);						
				}
				
			}
			else
			{
				//数据库查询失败，返回错误
				$return['status']	=	0;
				$return['message']	=	'内部错误，暂时无法访问';
				return json($return);				
			}
		}
		else
		{
			//社群用户已经存在，直接返回
			$return['status']	=	1;
			$return['message']	=	'用户已存在';
			return json($return);
		}
	}
	//发布问题
	public function questionPublish()
	{
		
		//初始化内部传送过来的数据
		$data['uid']		=	request()->post('uid');
		$data['title']		=	request()->post('title');
		$data['content']	=	request()->post('content');
		$data['tid']		=	request()->post('tid');
		$data['tname']		=	request()->post('tname');
		$data['posttime']	=	request()->post('posttime');
		$data['postip']		=	request()->post('postip');
	
		//这里添加安全检测代码，发布时间，ip等
		
				
		
		//生成问题qid
		$data['qid']		=	md5($data['uid'].$data['title'].$data['posttime']);
		//通过用户uid查询用户昵称
		$dbdata['uid']		=	$data['uid'];
		
		
		$request	= db('sns_user')->where($dbdata)->find();
		
		//return json($request);
		if($request)
		{
			$data['uname']	=	$request['nickname'];
			$request2	=	db('sns_question')->insert($data);
			if($request2	==	1)
			{
				//发布成功
				$return['status']	=	1;
				$return['message']	=	'发布成功';
				return json($return);				
			}	
			else
			{
				//写入数据库错误
				$return['status']	=	0;
				$return['message']	=	'内部错误,暂时无法发布';
				return json($return);				
			}
				
			
		}
		else
		{
			//无法从用户库中查询到用户昵称，防止用户构造假的UID
			$return['status']	=	0;
			$return['message']	=	'内部错误,暂时无法发布';
			return json($return);
		}		
	}
	//验证发布标题是否存在
	public function questionCheckTitle()
	{
		//初始化内部传送过来的数据
		$data['title']		=	request()->post('title');
		$dbdata['title']	=	$data['title'];
		$request	=	db('sns_question')->where($dbdata)->find();
		if($request)
		{
			$return['status']	=	0;
			$return['message']	=	'发现重复的标题';
			return json($return);
		}
		else
		{
			$return['status']	=	1;
			$return['message']	=	'没有发现重复的标题';
			return json($return);
		}			
	}
	//获取全站问题列表
	public function questionGetList()
	{
		$page		=	request()->post('page');
		
		$size		=	request()->post('size');
		
		$begin		=	$page*$size;
		
		//echo $page.'<br />'.$begin.'<br />'.$size;
		
		$request	=	db('sns_question')->limit($begin,$size)->select();
		
		return json($request);
	}
	//发布回答
	public function answerPublish()
	{
		//初始化内部传送过来的数据
		$data['uid']		=	request()->post('uid');
		$data['qid']		=	request()->post('qid');
		$data['content']	=	request()->post('content');
		$data['posttime']	=	request()->post('posttime');
		$data['postip']		=	request()->post('postip');
	
		//这里添加安全检测代码，发布时间，ip等	
		
		
		//生成问题qid
		$data['aid']		=	md5($data['uid'].$data['qid'].$data['posttime']);
		//通过用户uid查询用户昵称
		$dbdata['uid']		=	$data['uid'];
		
		
		$request	= db('sns_user')->where($dbdata)->find();
		
		
		if($request)
		{
			$data['uname']	=	$request['nickname'];
			$request2	=	db('sns_answer')->insert($data);
			if($request2	==	1)
			{
				//发布成功
				$return['status']	=	1;
				$return['message']	=	'发布成功';
				return json($return);				
			}	
			else
			{
				//写入数据库错误
				$return['status']	=	0;
				$return['message']	=	'内部错误,暂时无法发布';
				return json($return);				
			}			
			
		}
		else
		{
			//无法从用户库中查询到用户昵称，防止用户构造假的UID
			$return['status']	=	0;
			$return['message']	=	'内部错误,暂时无法发布';
			return json($return);
		}			
		
	}
	
}