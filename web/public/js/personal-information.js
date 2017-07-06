window.onload=function(){
	   $(".select label").click(function() {
    $(this).siblings("span").addClass("active");
    $(this).parent().siblings("div").find("span").removeClass("active");
});
    //获取屏幕高度
    var screenHeight=$(document).height();
    $(".section").css("height",screenHeight);
    console.log(screenHeight);
    $(".information-Box").css("height",screenHeight*0.8)
}
//头像文件上传
// $('#thumburl1').change(function(){
//        var data = new FormData();
// 25         //为FormData对象添加数据
// 26         //
// 27         $.each($('#inputfile')[0].files, function(i, file) {
// 28             data.append('upload_file', file);
// 29         });
//     //alert(111）
//     Ajaxfile('index.php/file/upload/upsingle',postData,filesuccCallback,fileerrorCallback,"post","json");
//     function filesuccCallback(date){
//         var postdata="";
//         Ajaxfile('index.php/file/upload/upsingle',postData,filesuccCallback,fileerrorCallback,"post","json");
//         console.log(date)
// }
// //添加信息过程出现错误后执行的方法
//     function fileerrorCallback(date){

//     }

// })
//调用接口发送信息给后台设置个人信息
$('#next').click(function(){
    
	//声明要传递给服务器的json数据
	var postData = $('#personal-information').serialize();
	AjaxPost('index.php/puser/profile/setinfo',postData,succCallback,errorCallback,"post","json");
})
//添加信息成功后执行的方法
function succCallback(date){
		//三秒后跳转下一个页面
  	setTimeout(function(){
           
			location.href='personal-Educational.html'
		},500);	
}
//添加信息过程出现错误后执行的方法
function errorCallback(date){
    
		$('#errmessage').text(date.message);
		$(this).css('boderColor','red');
}