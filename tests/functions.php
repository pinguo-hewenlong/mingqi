<?php
//curl发送get,post请求
function curlHttp($url,$method = 'GET',$postData = array())
{
	//初始化
　　$ch = curl_init();
　　//设置选项
　　curl_setopt($ch,CURLOPT_URL, $url);
　　curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
　　curl_setopt($ch,CURLOPT_HEADER,0);
	//post
	if($method = 'POST')
	{
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);		
	}
　　//执行请求
　　$output = curl_exec($ch);
　　//释放curl句柄
　　curl_close($ch);
　　//返回数据
　　return $output;
}
