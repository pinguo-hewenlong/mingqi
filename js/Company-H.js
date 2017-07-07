window.onload=function(){
    //获取屏幕高度
    var screenHeight=$(document).height();
    $(".section").css("height",screenHeight);
    console.log(screenHeight);
    $(".information-Box").css("height",screenHeight*0.8);
    
	   var postData = '';
				    var info = AjaxPost('index.php/cuser/profile/getinfo',postData,succCallback,errorCallback,"post","json");
					function errorCallback(date){
//						console.log(date);
					$("#thumburl1").html('<img src="http://127.0.0.1/mingqi/public/uploads/'+date[0].thumburl+'"/>');
					$(".in-header").addClass("in-header2")
					}    
}
// textarea输入字数判断
function textlen(x,y){ 
            var thelength = x.value.length; 
            window.status=thelength+' of '+y+' maximum characters.'; 
} 
function maxtext(x,y){ 
          tempstr = x.value 
          if(tempstr.length>y){ 
                x.value = tempstr.substring(0,y); 
          } 
          textlen(x,y); 
}

//调用接口发送信息给后台设置企业信息
$('#next').click(function(){
    
	//声明要传递给服务器的json数据
	var postData = $('#company-h').serialize();
	//AjaxPost方法传递数据
	AjaxPost('index.php/cuser/profile/setinfo',postData,succCallback,errorCallback,"post","json");
})
//添加信息成功后执行的方法
function succCallback(date){
	AjaxPost('index.php/cuser/pre/setfirst',{"status":1},succCallback,errorCallback,"post","json");	
	
	
  	setTimeout(function(){
  		  		
			location.href='Company-information.html'
		},500);	
}
//添加信息过程出现错误后执行的方法
function errorCallback(date){
    
		$('#errmessage').text(date.message);
		$(this).css('boderColor','red');
//		//$('#span').text('网络错误');
}
