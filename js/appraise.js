window.onload=function(){
    //获取屏幕高度
    var screenHeight=$(document).height();
    $(".section").css("height",screenHeight);
    // console.log(screenHeight);
     $(".information-Box").css("height",screenHeight*0.8)
     
     
     	  //继承前面设置好的头像

	  //获取基本信息
	  var postData = '';
				    var info = AjaxPost('index.php/puser/profile/getinfo',postData,succCallback,errorCallback,"post","json");
					function errorCallback(date){
						console.log(date);
					$("#thumburl1").html('<img src="http://127.0.0.1/mingqi/tp/public/uploads/'+date[0].thumburl+'"/>');
					}
}

/调用接口发送信息给后台设置个人描述
$('#next1').click(function(){
	var postData = $('#setperson-express').serialize();
	AjaxPost('index.php/puser/profile/setwork',postData,succCallback,errorCallback,"post","json");
})
function succCallback(date){
//		$('.tixoin').css({
//			"display":"block"
//		})
		//三秒后跳转下一个页面
  	setTimeout(function(){
			location.href='person-express.html'
		},1000);	
	}
//添加信息过程出现错误后执行的方法
function errorCallback(date){
		$('#spantx').text(date.message);
//		$(this).css('boderColor','red');
//		//$('#span').text('网络错误');

	
}