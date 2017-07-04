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
function get_client_ip($type = 0,$adv=false) {
    $type       =  $type ? 1 : 0;
    static $ip  =   NULL;
    if ($ip !== NULL) return $ip[$type];
    if($adv){
        if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $arr    =   explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
            $pos    =   array_search('unknown',$arr);
            if(false !== $pos) unset($arr[$pos]);
            $ip     =   trim($arr[0]);
        }elseif (isset($_SERVER['HTTP_CLIENT_IP'])) {
            $ip     =   $_SERVER['HTTP_CLIENT_IP'];
        }elseif (isset($_SERVER['REMOTE_ADDR'])) {
            $ip     =   $_SERVER['REMOTE_ADDR'];
        }
    }elseif (isset($_SERVER['REMOTE_ADDR'])) {
        $ip     =   $_SERVER['REMOTE_ADDR'];
    }
    // IP地址合法验证
    $long = sprintf("%u",ip2long($ip));
    $ip   = $long ? array($ip, $long) : array('0.0.0.0', 0);
    return $ip[$type];
}
?>