<?php
	
namespace app\file\controller;	
	
require_once(ROOT_PATH.'extend'.DS.'phpword'.DS.'PHPWord.php');

use think\Controller;

class Createdoc extends Base
{
	private $folder;
	private	$data;
	
	public function __construct()
	{
		parent::__construct();
		//获取用户UID
		$this->data['uid']	=	session('UID');
		//定义简历模板路径
		$this->folder['temp']	=	ROOT_PATH . 'public' . DS . 'uploads'.DS.'doctemp';
		//定义简历保存路径
		$this->folder['doc']	=	ROOT_PATH . 'public' . DS . 'uploads'.DS.'doc';	
	}
	
	public function index()
	{
		$pw			=	new \PHPWord();

		
		$doc		=	$pw->loadTemplate($this->folder['temp'].DS.'2.docx');
		
		//查询个人基本信息
		$this->data['table'] = 'puser_info';	
		$url = BASE_URL.url('/inner/puser/getfromdb');
		$return = curlHttp($url,'POST',$this->data);
		$arr	= json_decode($return,true);		
			
		foreach($arr as $v)
		{
			$temp	="
			姓名:".$v['realname'].str_repeat(' ',20)."出生年月:".date('Y-m',$v['birth'])."<w:br/>
			性别:\${gender}".str_repeat(' ',21)."所在城市:\${city}<w:br/>
			民族:\${nation}".str_repeat(' ',22)."毕业学校:\${school}<w:br/>
			学历:\${eduction}".str_repeat(' ',20)."所学专业:\${major}<w:br/>
			";
			$intro	=	$v['intro'];
		}
		
		echo $temp;			
		
		$doc->setValue('info', $temp);
		$doc->setValue('intro', $intro);		
		//保存更新后的简历
		$doc->save($this->folder['doc'].DS.'1.docx');
		
		//返回提示信息
		return 'OK';
		
			
	}
}
