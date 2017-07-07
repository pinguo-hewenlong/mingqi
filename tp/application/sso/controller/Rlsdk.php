<?php
namespace app\think\controller;
use think\Controller;
require_once(ROOT_PATH.'extend/rlsdk/CCPRestSDK.php');

class Rlsdk
{
	
	
	public function sendTemplateSMS($to,$datas,$tempId)
	{
		//初始化数据	
		$accountSid= '8a216da8554415740155479705a502ba';
		$accountToken= '252d577f842e470aac3395214fc00d86';
		$appId='8a216da85544157401554797060602c0';
		$serverIP='app.cloopen.com';
		$serverPort='8883';
		$softVersion='2013-12-26';
     	//s 初始化REST SDK
     	global $accountSid,$accountToken,$appId,$serverIP,$serverPort,$softVersion;
     	$rest = new REST($serverIP,$serverPort,$softVersion);
     	$rest->setAccount($accountSid,$accountToken);
     	$rest->setAppId($appId);
    
     // 发送模板短信
    	 echo "Sending TemplateSMS to $to <br/>";
     	$result = $rest->sendTemplateSMS($to,$datas,$tempId);
     	if($result == NULL ) {
         echo "result error!";
         break;
     	}
     	if($result->statusCode!=0) {
         echo "error code :" . $result->statusCode . "<br>";
         echo "error msg :" . $result->statusMsg . "<br>";
         //TODO 添加错误处理逻辑
     	}else{
         echo "Sendind TemplateSMS success!<br/>";
         // 获取返回信息
         $smsmessage = $result->TemplateSMS;
         echo "dateCreated:".$smsmessage->dateCreated."<br/>";
         echo "smsMessageSid:".$smsmessage->smsMessageSid."<br/>";
         //TODO 添加成功处理逻辑
     	}
	}		
}	