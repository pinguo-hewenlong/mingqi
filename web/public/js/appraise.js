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

//调用接口发送信息给后台设置个人描述
$('#next').click(function(){
	var postData = $('#personalAppraise').serialize();
	AjaxPost('index.php/puser/profile/setdesc',postData,succCallback,errorCallback,"post","json");
})
function succCallback(date){
	setTimeout(function(){
		var postData1 = '';
		AjaxPost('index.php/puser/pre/setFirst',postData1,succCallback,errorCallback,"post","json");
		function succCallback(date){
			alert(111)
			location.href='../index.html'
		}
		function errorCallback(date){
			//location.href='personal-information.html'
		}
	},500);
	}
//添加信息过程出现错误后执行的方法
function errorCallback(date){
		$('#spantx').text(date.message);
	
}