window.onload=function(){
    //获取屏幕高度
    var screenHeight=$(document).height();
    $(".section").css("height",screenHeight);
    console.log(screenHeight);
    $(".information-Box").css("height",screenHeight*0.8)
    
//	   var postData = '';
//				    var info = AjaxPost('index.php/puser/profile/getinfo',postData,succCallback,errorCallback,"post","json");
//					function errorCallback(date){
////						console.log(date);
//					$("#thumburl1").html('<img src="http://127.0.0.1/mingqi/public/uploads/'+date[0].thumburl+'"/>');
//					}    
//}

}
//前端验证
$('#comurl').bind('change',function(){
	var str	=	$(this).val();
	if(str.indexOf("http://") == -1)
	{
		$(this).val("http://"+str);
		str	=	$(this).val();
	}	
})


//调用接口发送信息给后台设置企业信息
$('#next').click(function(){
    
	//声明要传递给服务器的json数据
	var postData = $('#company-in').serialize();
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
    
		$('.tixoin').text(date.message);
		$(this).css('boderColor','red');
}