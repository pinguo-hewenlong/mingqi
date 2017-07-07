/**
 * Created by CDLX on 2017/6/12.
 */
window.onload=function(){
    //获取屏幕高度
    var screenHeight=$(document).height();
    $(".section").css("height",screenHeight);
    console.log(screenHeight);
    $(".enroll-text").css("height",screenHeight*0.8)
}
//点击切换图片验证吗
function reloadcode(){
var verify=document.getElementById('captcha');
verify.setAttribute('src','http://127.0.0.1/mingqiyoucai/index.php/captcha.html?'+Math.random());
//这里必须加入随机数不然地址相同我发重新加载
}
//调用封装的AjaxPost方法来进行数据传递
$('#btn').click(function(){
	//console.log(2222);
	//声明要传递给服务器的json数据
	var postData = $('#logop').serialize();
	//AjaxPost方法传递数据
	AjaxPost('index.php/sso/login/loginp',postData,succCallback,errorCallback,"post","json");
})
//登录成功后执行的方法
function succCallback(date){
	//console.log(555);
	//console.log(date.status);
	//显示登录成功！
		$('.tixoin').css({
			"display":"block"
		})
		//三秒后跳转下一个页面
  	setTimeout(function(){
			location.href='../index.html'
		},3000);
		
		//console.log(333333);
		
		
	}
//登录过程出现错误后执行的方法
function errorCallback(date){
		$('#spantx').text(date.message);
		$(this).css('boderColor','red');
	
		//$('#span').text('网络错误');
	
}