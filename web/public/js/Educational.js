window.onload=function(){
    //获取屏幕高度
    var screenHeight=$(document).height();
    $(".section").css("height",screenHeight);
    console.log(screenHeight);
    $(".information-Box").css("height",screenHeight*0.8)
      

	  //继承前面设置好的头像

	  //获取基本信息
	  var postData = '';
				    var info = AjaxPost('index.php/puser/profile/getinfo',postData,succCallback,errorCallback,"post","json");
					function errorCallback(date){
						console.log(date);
					$("#thumburl1").html('<img src="http://127.0.0.1/mingqi/public/uploads/'+date[0].thumburl+'"/>');
					}
					
}

//
//调用接口发送信息给后台设置教育信息
$('#next').click(function(){
	
	//声明要传递给服务器的json数据
	var postData = $('#geteducational').serialize();
	//AjaxPost方法传递数据
	AjaxPost('index.php/puser/profile/setedu',postData,succCallback,errorCallback,"post","json");
	
})
//添加信息成功后执行的方法
function succCallback(date){
   
  	setTimeout(function(){
			location.href='personal-appraise.html'
		},1000);
		
		//console.log(333333);
		
		
	}
//添加信息过程出现错误后执行的方法
function errorCallback(date){
	alert("555")
		$('#errmessage').text(date.message);
//		$(this).css('boderColor','red');
//		//$('#span').text('网络错误');

	
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