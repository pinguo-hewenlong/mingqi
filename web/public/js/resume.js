$("#jod-editor").click(function(){
	$("#job-practice").toggleClass("job-practice")
})
window.onload = function(){
    
    
    var postData = '';
    
    
    //获取基本信息
    var info = AjaxPost('index.php/puser/profile/getinfo',postData,succCallback,errorCallback,"post","json");
    
	function succCallback(date){
		//console.log(1111);
		//alert(date[0].realname);
		//alert(date[0].thumburl)
		$(".head-portrait>img").attr("src",date[0].thumburl); 
		//$("td:eq(2)") 选择所有的td元素中序号为2的那个td元素 
		//.html() 取出或设置html内容
		//.text() 取出或设置text内容
		//.attr() 取出或设置某个属性的值
		//.attr(“属性名”,”属性值”) 设置标签的属性值
		//.attr(“属性名”)获取标签的属性值
		//.width() 取出或设置某个元素的宽度
		//.height() 取出或设置某个元素的高度
		//.val() 取出某个表单元素的值
		$(".name1").html(date[0].realname);
		$(".simple-little1").html(date[0].gender);
		$(".simple-little2").html(date[0].eduction);
		//根据出生年月算当前年龄
		var ages=agefun(date[0].birth);
		$(".simple-little3").html(ages+"岁");	
//		$(".simple-little4").html(date[0].gender);
		$(".simple-little5").html(date[0].city);	
		$(".info-phone").html(date[0].phone);
		$(".info-email").html(date[0].email);
	}
	
	//获取工作经历
	var work	=	AjaxPost('index.php/puser/profile/getwork',postData,succCallbackwork,errorCallback,"post","json");
	
	function succCallbackwork(date)
	{
		$(".work-company").html(date[0].company);
		$(".work-position").html(date[0].position);
//		var date = new Date(时间戳); 
		//alert(date[0].begintime);
		var begintime = new Date();
		begintime.setTime(date[0].begintime*1000);
		//alert(begintime.Format("yyyy-MM-dd"));
		var endtime = new Date();
		endtime.setTime(date[0].endtime*1000);
		//alert(endtime.setTime(date[0].endime*1000));
		var begintime = begintime.Format("yyyy-MM-dd");
		var endtime	  = endtime.Format("yyyy-MM-dd");
		//alert(begintime);
		$(".begin-endtime").html(begintime +"-"+ endtime);
		$(".work-description").html(date[0].description);
	}
	
	
	//获取教育经历
	var edu	=	AjaxPost('index.php/puser/profile/getedu',postData,succCallbackedu,errorCallback,"post","json");
	
	function succCallbackedu(date){
		$(".edu-school").html(date[0].school);
		$(".edu-major").html(date[0].major + "." + date[0].record);
		//这里还缺少毕业时间计算毕业年份的算法
	}
	
	
//过程出现错误后执行的方法
	function errorCallback(date){
		//alert(date);
	}  
	
	
	//获取期望工作
	var expectwork	=	AjaxPost('index.php/puser/profile/getExpectWork',postData,succCallbackedu,errorCallback,"post","json");
	
	function succCallbackedu(date){
		//console.log(1111)
		var jjj = '小马哥';
		$.each(date,function(n,obj){
			var html;
			html = '<option value="">'+jjj+'</option>';
			//console.log(html);
			$('#expect-pname').append(html);
		})
		
		$(".expect-pname").html='<option value="">'+jjj+'</option>';
		$(".expect-city").html(date[0].city);
		$(".expect-salary").html(date[0].salary);
	}
	
	
//过程出现错误后执行的方法
	function errorCallback(date){
		//alert(date);
	}
}

//添加工作经历

$('#jod-editor').click(function()
{
	//alert(111);
var edu	=	AjaxPost('index.php/puser/profile/getwork',postData,succCallbackwork,errorCallback,"post","json");

})

//出生年月计算如今年纪的计算方法

var agefun=function  (birth) 
{
// 获得今天的时间
var date = new Date();
//获取数据库出生的时间戳
var birthday = birth;
//alert(birthday);
//var startDate = new Date(birthday);
//当前时间减去出生年月的时间
var newDate = date.getTime() - birthday;
// 向下取整  例如 10岁 20天 会计算成 10岁
// 如果要向上取整 计算成11岁，把floor替换成 ceil
var age = Math.ceil(newDate / 1000 / 60 / 60 / 24 /365);
    if (isNaN(age)){
        age = "";
    }
    return age;
// $(".simple-little2").html(age);
};


Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}       