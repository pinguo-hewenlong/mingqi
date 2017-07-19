window.onload=function(){
    //获取屏幕高度
    var screenHeight=$(document).height();
    $(".section").css("height",screenHeight);
    $(".enroll-text").css("height",screenHeight*0.8)
}
//点击切换图片验证码
function reloadcode(){
var verify=document.getElementById('captcha');
//这里必须加入随机数不然地址相同我发重新加载
verify.setAttribute('src',host+'index.php/captcha.html?'+Math.random());
}
$('#btn').click(function(){
	var postData = $('#logop').serialize();
	AjaxPost('index.php/sso/login/loginp',postData,succCallback,errorCallback,"post","json");
})
function succCallback(date){
	$('.tixoin').text(date.message)
	setTimeout(function(){
		var postData1 = '';
		AjaxPost('index.php/puser/pre/getfirst',postData1,succCallback,errorCallback,"post","json");
		function succCallback(date){
			//alert(111)
			location.href='../index.html'
		}
		function errorCallback(date){
			//alert(222)

			location.href='personal-information.html'

		}
	},500);
}
function errorCallback(date){
    $('.tixoin').text(date.message)
}