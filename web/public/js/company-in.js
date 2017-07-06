window.onload=function(){
    //获取屏幕高度
    var screenHeight=$(document).height();
    $(".section").css("height",screenHeight);
    console.log(screenHeight);
    $(".information-Box").css("height",screenHeight*0.8)
}


//调用接口发送信息给后台设置企业信息
$('#next').click(function(){
    
	//声明要传递给服务器的json数据
	var postData = $('#personal-information').serialize();
	//AjaxPost方法传递数据
	AjaxPost('index.php/cuser/profile/setinfo',postData,succCallback,errorCallback,"post","json");
})
//添加信息成功后执行的方法
function succCallback(date){
  	setTimeout(function(){
			location.href='Company-about.html'
		},500);	
}
//添加信息过程出现错误后执行的方法
function errorCallback(date){
    
		$('#errmessage').text(date.message);
		$(this).css('boderColor','red');
//		//$('#span').text('网络错误');
}