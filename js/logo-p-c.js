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
verify.setAttribute('src','http://www.scmqyc.com/test/tp/index.php/captcha.html?'+Math.random());
}
//调用封装的AjaxPost方法来进行数据传递
$('#btn').click(function(){
	var postData = $('#logop').serialize();
	AjaxPost('index.php/sso/login/loginp',postData,succCallback,errorCallback,"post","json");
})
//登录成功后执行的方法
function succCallback(date){
	//显示登录成功！
		$('.tixoin').css({
			"display":"block"
		})
		//三秒后跳转下一个页面
  	setTimeout(function(){
  		var postData = '';
  		AjaxPost('index.php/cuser/pre/getfirst',postData,succCallback,errorCallback,"post","json");
  		function succCallback(date){
  			
			location.href='../index.html'
		}
  		function errorCallback(date){
			location.href='company-in.html'
		}
	},500);
}
//登录过程出现错误后执行的方法
function errorCallback(date){
	$('.tixoin').text(date.message);
	
}