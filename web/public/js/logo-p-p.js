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
//点击切换图片验证码
function reloadcode(){
var verify=document.getElementById('captcha');
//这里必须加入随机数不然地址相同我发重新加载
verify.setAttribute('src','http://127.0.0.1/mingqi/index.php/captcha.html?'+Math.random());
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
	$('.tixoin').text(date.message)
	//显示登录成功！
		
		//三秒后跳转下一个页面
  	setTimeout(function(){
  		
  		//判断信息填写状态选择跳转的路径
  		var postData = '';
  		AjaxPost('index.php/puser/pre/getfirst',postData,succCallback,errorCallback,"post","json");  
  		//1执行的方法去首页
  		function succCallback(date){ 
			location.href='../index.html'
		}
  		function errorCallback(date){
			location.href='personal-information.html'
	
		}
	},500);
}
//登录过程出现错误后执行的方法
function errorCallback(date){
       	$('.tixoin').text(date.message)

	//console.log("OK1")
	//$('#span').text('网络错误');
	
}