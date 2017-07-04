window.onload=function(){
    //获取屏幕高度
    var screenHeight=$(document).height();
    $(".section").css("height",screenHeight);
    console.log(screenHeight);
    $(".information-Box").css("height",screenHeight*0.8)
}
//调用接口发送信息给后台设置工作经历
$('#next1').click(function(){
	//声明要传递给服务器的json数据
	var postData = $('#setperson-express').serialize();
	//AjaxPost方法传递数据
	AjaxPost('index.php/puser/profile/setwork',postData,succCallback,errorCallback,"post","json");
})
//添加信息成功后执行的方法
function succCallback(date){
	//console.log(555);
	//console.log(date.status);
	//显示登录成功！
//		$('.tixoin').css({
//			"display":"block"
//		})
		//三秒后跳转下一个页面
  	setTimeout(function(){
			location.href='person-express.html'
		},1000);
		
		//console.log(333333);
		
		
	}
//添加信息过程出现错误后执行的方法
function errorCallback(date){
//		$('#spantx').text(date.message);
//		$(this).css('boderColor','red');
//		//$('#span').text('网络错误');

	
}