<?php
//curl发送get,post请求
function curlHttp($url,$method = 'GET',$postData = array()){
	$ch = curl_init();
	//设置选项
	curl_setopt($ch,CURLOPT_URL,$url);
	curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
	curl_setopt($ch,CURLOPT_HEADER,false);
	//判断提交方式
	if($method = 'POST')
	{
		curl_setopt($ch,CURLOPT_POST,true);
		curl_setopt($ch,CURLOPT_POSTFIELDS,$postData);
	}
	//执行请求
	$output = curl_exec($ch);
	//关闭请求
	curl_close($ch);
	//返回数据
	return $output;
}
//javascript跳转
function jsjump($url)
{
	echo '<script type="text/javascript">window.location.href="'.$url.'"</script>';
}
//获取文本中的参数值
function getStrParam($str,$left,$right)
{
	$posLeft		=	strpos($str,$left,0);
	$posLeft		=	$posLeft+strlen($left);
	$posRight		=	strpos($str,$right,$posLeft);
	$len			=	$posRight-$posLeft;
	$param			=	substr($str,$posLeft,$len);
	return $param;		
}
//登录成功后session和cookie的操作
function loginAttr($uid,$gateway,$type)
{
	//设置session
	session('UID',$uid);
	session('GATEWAY',$gateway);
	session('TYPE',$type);
	//设置cookie
	$token	=	md5($uid.time());
	cookie('token',$token,3600);	
}


/**
 * 获取客户端IP地址
 * @param integer $type 返回类型 0 返回IP地址 1 返回IPV4地址数字
 * @param boolean $adv 是否进行高级模式获取（有可能被伪装） 
 * @return mixed
 */
?>