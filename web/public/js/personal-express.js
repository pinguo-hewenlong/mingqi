window.onload=function(){
    //获取屏幕高度
    var screenHeight=$(document).height();
    $(".section").css("height",screenHeight);
    //console.log(screenHeight);
    $(".information-Box").css("height",screenHeight*0.8)
	  //继承前面设置好的头像
	  //获取基本信息
	var postData = '';
		var info = AjaxPost('index.php/puser/profile/getinfo',postData,succCallback,errorCallback,"post","json");
		function errorCallback(date){
		//console.log(134565);
		//alert(111)
			$("#thumburl1").html('<img src="'+host+'public/uploads/'+date[0].thumburl+'"/>');
		}
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
  	setTimeout(function(){
			location.href='personal-appraise.html'
		},1000);
		
		//console.log(333333);
		
		
	}
//添加信息过程出现错误后执行的方法
function errorCallback(date){
//		$('#spantx').text(date.message);
//		$(this).css('boderColor','red');
//		//$('#span').text('网络错误');

	
}