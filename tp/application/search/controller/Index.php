<?php
	
namespace app\search\controller;
use think\Controller;
use think\Validate;

//由于搜索功能使用比较频繁，所以不用inner接口
class Index extends Controller
{
	private	$word;
	private	$data;
	private	$status;
	
	public function __construct()
	{
		//初始化数据
		$this->status	=	1;
		$this->data		=	array();
		//获取查询词
		$this->word	=	request()->get('word');
		//判断
		if(strlen($this->word) < 1)
		{
			$this->status	=	0;		
		}
						
	}
	//内部函数，获取模糊词
	private function getWord($word)
	{
		//构造查询词		
		$dbWord	=	$this->word.'%';	
		//查询数据库		
		$this->data	=	db('sys_position')->where('des','like',$dbWord)->cache(true,3600)->select();
				
		return $this->data;				
	}
	//模糊查询，列出模糊词相关信息，以及数量
	public function index()
	{
		//如果没有传输数据，那就直接返回
		if($this->status==0)
		{
			return json($this->data);
		}
		//获取模糊词		
		$data	=	$this->getWord($this->word);
		//循环模糊词获取职位数量
		$i	=	0;
		foreach($data as $v)
		{
			$dbdata['title']	=	$v['des'];			
			$data[$i]['num']	=	db('cuser_post')->where($dbdata)->cache(true,3600)->count();
			$i++;							
		}
		
		return json($data);		
	}
	//根据关键词搜索职位
	public function byWord()
	{
		$word			=	request()->get('word');
		$page			=	request()->get('page');
		$size			=	request()->get('size');
		if(empty($page))
		{
			$page		=	'0';
		}
		if(empty($size))
		{
			$size		=	'10';
		}
		
		$dbword			=	'%'.$word.'%';
		
		$begin			=	$page*$size;
		
		$vadata['word']	=	$word;
		$vadata['page']	=	$page;
		$vadata['size']	=	$size;
		//调用验证器:search\validate\byword
		//return json($vadata);
		$validateResult = $this->validate($vadata,'Byword');
		//输出错误信息		
		if(true !== $validateResult)
		{
			$return['status'] = 0;
			$return['message'] = $validateResult;	
			return json($return);
		}
		//构造查询		
		$request	=	db('cuser_post')->where('title','like',$dbword)->limit($begin,$size)->select();
		
		return json($request);			
	
				
		
	}
	//根据条件搜索职位(等待添加)
	public function byCondition()
	{
		
	}
}	


