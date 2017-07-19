window.onload=function(){
    //获取屏幕高度
    var screenHeight=$(document).height();
    $(".section").css("height",screenHeight);
    $(".enroll-text").css("height",screenHeight*0.8)
}
//给获取短信验证码绑定点击事件
$('#getMsgCode').click(function(){
	//console.log('111');
	$.ajax({
		type:"post",
		url:"http://www.scmqyc.com/mingqi/tp/index.php/sso/Register/getMsgCode",
		async:true,
		data:$('#enroll').serialize(),
		success:function(date){
    			if(date.status == 0){
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
//注册成功后执行的方法
function succCallback(date){
		$('.tixoin').css({
			"display":"block"
		})
  	setTimeout(function(){
			location.href='logo-p-c.html'
		},500);
}
//注册过程出现错误后执行的方法
function errorCallback(date){
	$('#spantx').text(date.message);
	$(this).css('boderColor','red');
}
//验证码60 秒倒计时
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
//一秒钟后开始执行验证码倒计时方法
   setTimeout(function() { 
    settime(obj) }
    ,1000) 
}