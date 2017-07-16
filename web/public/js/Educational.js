window.onload=function(){
    //获取屏幕高度
    var screenHeight=$(document).height();
    $(".section").css("height",screenHeight);
    console.log(screenHeight);
    $(".information-Box").css("height",screenHeight*0.8)
	  //继承前面设置好的头像
	  //获取基本信息
	var postData = '';
		var info = AjaxPost('index.php/puser/profile/getinfo',postData,succCallback,errorCallback,"post","json");
		function errorCallback(date){
		//console.log(date);
			$("#thumburl1").html('<img src="'+host+'public/uploads/'+date[0].thumburl+'"/>');
		}
}
//调用接口发送信息给后台设置教育信息
$('#next').click(function(){
	var postData = $('#geteducational').serialize();
	AjaxPost('index.php/puser/profile/setedu',postData,succCallback,errorCallback,"post","json");	
})
function succCallback(date){
  	setTimeout(function(){
			location.href='personal-express.html'
		},1000);	
}
function errorCallback(date){
	alert("555")
		$('#errmessage').text(date.message);
}