<?php
namespace app\file\controller;
use think\Session;
use think\Controller;
use think\Request;


class Upload extends Controller
{
	private $ext;
	private $folder;
	//初始化	
	public function __construct()
	{
		parent::__construct();
		//定义文件存储路径
		$this->folder	=	ROOT_PATH . 'public' . DS . 'uploads';
		//定义普通文件后缀名	
		$this->ext		=	'jpg,png,gif';
	}
	//单文件上传	
	public function upSingle(){				
    $file = request()->file('file');
    $info = $file->validate(['ext' => $this->ext])->move($this->folder);
    if($info){
    	$return['status']	=	1;
    	$return['url']		=	$info->getSaveName();
    	$return['message']	=	'上传成功';
		return json($return);    	
    }else{
    	$return['status']	=	0;
    	$return['message']	=	$file->getError();
		return json($return);
    }
	}
	//多文件上传
	public function upMulti(){		
    $files = request()->file('file');
    $i	=	0;
    foreach($files as $file){
        $info = $file->validate(['ext' => $this->ext])->move($this->folder);
        if($info){
    			$return['status'][$i]	=	1;
    			$return['url'][$i]		=	$info->getSaveName();
    			$return['message'][$i]	=	'上传成功';
        }else{
    			$return['status'][$i]	=	0;
    			$return['message'][$i]	=	$file->getError();
        }
    	$i++;            
    	}
    return json($return);	
	}
	//excel上传
	public function upExcel(){				
    $file = request()->file('file');
    $info = $file->validate(['ext' => 'xls,xlsx'])->move(ROOT_PATH . 'public' . DS . 'uploads');
    if($info){
    	$return['status']	=	1;
    	$return['url']		=	$info->getSaveName();
		$return['url']      =   str_replace($$return['url'],'\\','\/'); 
    	$return['message']	=	'上传成功';
		return json($return);    	
    }else{
    	$return['status']	=	0;
    	$return['message']	=	$file->getError();
		return json($return);
    }	
	}		
}
