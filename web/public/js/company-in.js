window.onload=function(){
    //获取屏幕高度
    var screenHeight=$(document).height();
    $(".section").css("height",screenHeight);
    console.log(screenHeight);
    $(".information-Box").css("height",screenHeight*0.8)
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
	var postData = $('#company-in').serialize();
	AjaxPost('index.php/cuser/profile/setinfo',postData,succCallback,errorCallback,"post","json");
})
function succCallback(date){
	//console.log(1111)
  	setTimeout(function(){
			location.href='Company-about.html'
		},500);	
}
function errorCallback(date){
    	//console.log(2222)
		$('.tixoin').text(date.message);
		$(this).css('boderColor','red');
}