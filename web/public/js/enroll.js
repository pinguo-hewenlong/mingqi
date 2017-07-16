/**
 * Created by CDLX on 2017/6/12.
 */
window.onload=function(){
    //获取屏幕高度
    var screenHeight=$(document).height();
    $(".section").css("height",screenHeight);
    //console.log(screenHeight);
    $(".enroll-text").css("height",screenHeight*0.8)
}
//给获取短信验证码绑定点击事件
$('#getMsgCode').click(function(){
	$.ajax({
		type:"post",
		url:host+'index.php/sso/Register/getMsgCode',
		async:true,
		data:$('#enroll').serialize(),
		//Console.log('date');
		success:function(date){
    			if(date.status == 0){
    				//ssConsole.log('date');
    				$('#span').text(date.message);
    			}
    		}
	});
})
//调用封装的AjaxPost方法来进行数据传递
$('#btn').click(function(){
	var postData = $('#enroll').serialize();
	AjaxPost('index.php/sso/register',postData,succCallback,errorCallback,"post","json");
})
function succCallback(date){
		$('.tixoin').css({
			"display":"block"
		})
  	setTimeout(function(){
			location.href='logo-p-p.html'
		},3000);
	}
function errorCallback(date){
		$('#spantx').text(date.message);
		$(this).css('boderColor','red');
}
var countdown=60; 
function settime(obj) { 
    if (countdown == 0) { 
        obj.removeAttribute("disabled");    
        obj.value="获取验证码"; 
        countdown = 60; 
        return;
    } else { 
        obj.setAttribute("disabled", true); 
        obj.value= countdown +"s"; 
        countdown--; 
    }
   setTimeout(function() { 
    settime(obj) }
    ,1000) 
}