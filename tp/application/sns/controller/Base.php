<?php		
namespace app\sns\controller;
use think\Controller;

class Base extends Controller
{
	public function __construct()
	{

		if(session('?UID') == 1)
		//用户处于登录状态下的执行代码
		{
			//进入社群页面进行判断
			$bdata['uid']	=	session('UID');
			//dump($bdata);
			//发送到inner
			$url = BASE_URL.url('/inner/sns/accountCheck');
			$return = curlHttp($url,'POST',$bdata);
			
						
			$returnArr	=	json_decode($return,true);
			if($returnArr['status']	==	1)
			{
				
			}
			else
			{
				return $return;
				exit;
			}
			
						
		}
		//用户处于非登录状态下的执行代码
		else
		{
			$this->error('尚未登录','index.php');		
		}
	}
}