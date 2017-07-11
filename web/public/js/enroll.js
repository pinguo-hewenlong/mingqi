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
		url:"http://127.0.0.1/mingqi/index.php/sso/Register/getMsgCode",
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
	//console.log(2222);
	//声明要传递给服务器的json数据
	var postData = $('#enroll').serialize();
	//AjaxPost方法传递数据
	AjaxPost('index.php/sso/register',postData,succCallback,errorCallback,"post","json");
})
//注册成功后执行的方法
function succCallback(date){
	//console.log(555);
	//console.log(date.status);
	//显示注册成功！
		$('.tixoin').css({
			"display":"block"
		})
		//三秒后跳转下一个页面
  	setTimeout(function(){
			location.href='logo-p-p.html'
		},3000);
		
		//console.log(333333);
		
		
	}
	
//注册过程出现错误后执行的方法
function errorCallback(date){
		$('#spantx').text(date.message);
		$(this).css('boderColor','red');
	
		//$('#span').text('网络错误');
	
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