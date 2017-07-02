window.onload=function(){
    //获取屏幕高度
    var screenHeight=$(document).height();
    $(".section").css("height",screenHeight);
    
    $(".information-Box").css("height",screenHeight*0.8);
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
//调用接口发送信息给后台设置公司基本信息
$('#next').bind("click",function(){
	//声明要传递给服务器的json数据
	var postData = {"companyname":"","hremail":"","thumburl":"","comphone":"","city":"","hrname":"","hrphone":"","nature":"","scale":"","description":$("#description"),"isrz":""};
	//AjaxPost方法传递数据
	AjaxPost('index.php/cuser/profile/setinfo',postData,succCallback,errorCallback,"post","json");
});
function succCallback(date){
     //跳转页面
   
    	
	 location.href="Company-H.html"
		
}
function errorCallback(date){
			$('.tixoin').css({
			"display":"block"
		})
	
}