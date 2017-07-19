window.onload=function(){
    //获取屏幕高度
    var screenHeight=$(document).height();
    $(".section").css("height",screenHeight);
    //console.log(screenHeight);
    $(".information-Box").css("height",screenHeight*0.8);
    $("#event-time").datepicker();
	   var postData = '';
				    var info = AjaxPost('index.php/cuser/profile/getinfo',postData,succCallback,errorCallback,"post","json");
					function errorCallback(date){
//						//console.log(date);
					$("#thumburl1").html('<img src="'+host+'public/uploads/'+date[0].thumburl+'"/>');
					$(".in-header").addClass("in-header2")
					}    
}
// textarea输入字数判断
function textlen(x,y){ 
            var thelength = x.value.length; 
            window.status=thelength+' of '+y+' maximum characters.'; 
} 
function maxtext(x,y){ 
          tempstr = x.value 
          if(tempstr.length>y){ 
                x.value = tempstr.substring(0,y); 
          } 
          textlen(x,y); 
}

//调用接口发送信息给后台设置企业信息
$('#next').click(function(){
	var postData = $('#company-h').serialize();
	AjaxPost('index.php/cuser/profile/setmilepost',postData,succCallback,errorCallback,"post","json");
})
function succCallback(date){
setTimeout(function(){
		var postData1 = '';
		AjaxPost('index.php/cuser/pre/setFirst',postData1,succCallback,errorCallback,"post","json");
		function succCallback(date){
			location.href='Company-information.html'
		}
		function errorCallback(date){
		}
	},500);	
}
//添加信息过程出现错误后执行的方法
function errorCallback(date){
    
		$('#errmessage').text(date.message);
		$(this).css('boderColor','red');
//		//$('#span').text('网络错误');
}
