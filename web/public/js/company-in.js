window.onload=function(){
    //获取屏幕高度
    var screenHeight=$(document).height();
    $(".section").css("height",screenHeight);
    $(".information-Box").css("height",screenHeight*0.8)
}
//调用接口发送信息给后台设置公司基本信息
$('#next').click(function(){
	//声明要传递给服务器的json数据
	var postData = {"companyname":$("#companyname").val(),"hremail":$("#hremail").val(),"thumburl":$("#thumburl").val(),"comphone":"","city":$("#city").val(),"hrname":"","hrphone":"","nature":$("#nature").val(),"scale":$("#scale").val(),"description":"","isrz":""};
	//AjaxPost方法传递数据
	AjaxPost('index.php/cuser/profile/setinfo',postData,succCallback,errorCallback,"post","json");
});
function succCallback(date){
     //跳转页面
    	setTimeout(function(){
			location.href="Conpany-about.html"
		},1000);
}
function errorCallback(date){
			$('.tixoin').css({
			"display":"block"
		})
	
}