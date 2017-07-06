
window.onload=function(){
	islogin();
    var postData = '';
    //获取基本信息
    var info = AjaxPost('index.php/puser/profile/getinfo',postData,succCallback,errorCallback,"post","json");
    var b=document.getElementById("Mastery-select").value;
	function succCallback(date){
		$(".head-portrait>img").attr("src",date[0].thumburl); 
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
	var work	=	AjaxPost('index.php/puser/profile/getwork',postData,succCallbackwork,errorCallbackwork,"post","json");
	function succCallbackwork(date)
	{	
		$.each(date,function(n,obj){
			var html	=	'<div>'+
                            	'<div class="company-an">'+
                                    '<div>'+
                                        '<div class="company-com class= work-company">'+obj.company+'</div>'+
                                        '<div id="job" class="work-position">'+obj.position+'</div>'+
                                    '</div>'+
                                    '<div>'+             
                                    '</div>'+
                                '</div>'+
                                '<div id="job-time" class="begin-endtime">'+obj.begintime +"-"+ obj.endtime
                                                        
                                '</div>'+
                                '<div class="describe work-description">'+  obj.description
                                                
                                '</div>'+ 
                                '<div class="delete">'+'删除'+'</div>'+
                            '</div>';
	  		
	  		$("#company-an1").append(html);
	  		$(".delete-skill").click(function(){
	//    console.log(11111);
             $(this).parent().remove()
         })
			
		})

	
	}
	function errorCallbackwork(date)
	{
		
	}
	
	//获取教育经历
	var edu	=	AjaxPost('index.php/puser/profile/getedu',postData,succCallbackEdu,errorCallbackEdu,"post","json");
	function succCallbackEdu(date){
		$("#schooledu").html(date[0].school);
		$("#major").html(date[0].major + "." + date[0].record);
	}
	function errorCallbackEdu(date)
	{
		
	}  
		//获取自我描述
	var desc	=	AjaxPost('index.php/puser/profile/getDesc',postData,succCallbackDesc,errorCallbackDesc,"post","json");
	function succCallbackDesc(date){
//		alert(111)
		$("#describe").html(date[0].self);
	}
	function errorCallbackDesc(date)
	{
		
	} 
	
	//获取期望工作
	var expectwork	=	AjaxPost('index.php/puser/profile/getExpectWork',postData,succCallbackExpectWork,errorCallbackExpectWork,"post","json");
	
	function succCallbackExpectWork(date){
        $("#pname").val(date[0].pname);
        $("#zhiwei").val(date[0].description);
        $("#city").val(date[0].city);
        $("#salary").val(date[0].salary);
	}
	function errorCallbackExpectWork(date)
	{
		
	}

	//获取技能评价
	var skills	=	AjaxPost('index.php/puser/profile/getskills',postData,succCallbackskills,errorCallbackskills,"get","json");
	
	function succCallbackskills(date){
		
		$.each(date,function(n,obj){
			var html	=	'<div>'+'<h3 class="progress-title">'+obj.pname +'</h3>'+
	  		'<div class="progress">' +
	        '<div class="progress-bar" style="width:'+obj.mastery+'%; background:#7ad396;">'+
	           '<div class="progress-value">'+obj.mastery+'%'+'</div>'+ 
	        '</div>'+
            '</div>'+
	  	 	'<div class="delete-skill">删除</div>'+
	  		'</div>';
	  		
	  		$("#skill-box").append(html);
	  		$(".delete-skill").click(function(){
	//    console.log(11111);
             $(this).parent().remove()
         })
			
		})

	}
	function errorCallbackskills(date)
	{
		
	}



$("#jod-editor").click(function(){
	$("#job-practice").toggleClass("job-practice")
})
//添加编辑按钮click事件
$("#jod-editor").click(function(){
	$("#job-practice").toggleClass("job-practice")
});
$("#quxiao").click(function(){
	$("#job-practice").toggleClass("job-practice")
});
$("#editor").click(function(){
	$("#job-practice-bianji").toggleClass("job-practice")
});
$("#e-qixiao").click(function(){
	$("#job-practice-bianji").toggleClass("job-practice")
});
$("#edu-editor").click(function(){
	$("#geteducational").toggleClass("job-practice")
});
$("#edu-quxiao").click(function(){
	$("#geteducational").toggleClass("job-practice")
});
$("#edu-tainjia").click(function(){
	$("#geteducational2").toggleClass("job-practice")
});
$("#edu-quxiao2").click(function(){
	$("#geteducational2").toggleClass("job-practice")
});
$("#ping-editor").click(function(){
	$("#pingjia").toggleClass("job-practice")

})
$("#edu-quxiao3").click(function(){
	$("#pingjia").toggleClass("job-practice")
})
$("#skill-editor").click(function(){
	$("#tinajia-skill").toggleClass("tinajia-skill")
})
$("#edu-quxiao4").click(function(){
	$("#tinajia-skill").toggleClass("tinajia-skill")
})
//添加技能
$("#baocun-skill").click(function(){
	let a=document.getElementById("input-text").value;
	let b=document.getElementById("Mastery-select").value;
	let options=$("#Mastery-select option:selected");
	// console.log(options.text())
	// let texts=options.innerHTML();
	// console.log(a)
	if(a != 0){
      $("#skill-box").append('<div>'+
	  '<h3 class="progress-title">'+$("#input-text").val() +'</h3>'+
	  '<div class="progress">' +
	     '<div class="progress-bar" style="width:'+b+'%; background:#7ad396;">'+
	           '<div class="progress-value">'+ options.text()+'</div>'+ 
	     '</div>'+
      '</div>'+
	  '<div class="delete-skill">删除</div>'+
	  '</div>')
	  $(".delete-skill").click(function(){
	//    console.log(11111);
      $(this).parent().remove()
     })
	}else{
		$(".skill-language").append('<span>*</span>')
	}
	
})
 $(".delete").click(function(){
	//    console.log(11111);
      $(this).parent().remove()
     })

	//获取目前状态
	
	var arrival	=	AjaxPost('index.php/puser/profile/getarrival',postData,succCallbackarrival,errorCallbackarrival,"get","json");
	
	function succCallbackarrival(date)
	{
		  $("#arrival").val(date[0].time);
	}
	function errorCallbackarrival(date)
	{
		
	}
}
//获取信息到此结束啦啦啦！！！



//出生年月计算如今年纪的计算方法
var agefun=function  (birth) 
{
var date = new Date();
var birthday = birth;
var newDate = date.getTime() - birthday;
var age = Math.ceil(newDate / 1000 / 60 / 60 / 24 /365);
    if (isNaN(age)){
        age = "";
    }
    return age;
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

//开始所有的编辑信息了！
//编辑工作信息
$('#next').click(function(){
	//声明要传递给服务器的json数据
	var postData = $('#personal-information').serialize();
	//AjaxPost方法传递数据
	AjaxPost('index.php/puser/profile/setinfo',postData,succCallback,errorCallback,"post","json");
})
//添加信息成功后执行的方法
function succCallback(date){
	//显示登录成功！
//		$('.tixoin').css({
//			"display":"block"
//		})
		//三秒后跳转下一个页面
  	setTimeout(function(){
			location.href='Educational.html'
	},1000);	
}
//添加信息过程出现错误后执行的方法
function errorCallback(date){
//		$('#spantx').text(date.message);
//		$(this).css('boderColor','red');
//		//$('#span').text('网络错误');
}
//工作经历的添加按钮事件
$("#jod-editor").click(function(){
	$("#job-practice").toggleClass("job-practice")
	$('#keep').click(function(){
	var postData = $('#job-practice-bianji').serialize();
	AjaxPost('index.php/puser/profile/setwork',postData,succCallback,errorCallback,"post","json");
})
//添加信息成功后执行的方法
function succCallback(date)
{
	
}
//添加信息过程出现错误后执行的方法
function errorCallback(date)
{
	
}	
});








//添加技能
$("#baocun-skill").click(function(){
	let a=document.getElementById("input-text").value;
	let b=document.getElementById("Mastery-select").value;
	let options=$("#Mastery-select option:selected");
	// console.log(options.text())
	// let texts=options.innerHTML();
	// console.log(a)
	if(a != 0){
      $("#skill-box").append('<div>'+
	  '<h3 class="progress-title">'+$("#input-text").val() +'</h3>'+
	  '<div class="progress">' +
	     '<div class="progress-bar" style="width:'+b+'%; background:#7ad396;">'+
	           '<div class="progress-value">'+ options.val()+'%'+'</div>'+ 
	     '</div>'+
      '</div>'+
	  '<div class="delete-skill">删除</div>'+
	  '</div>')
	  $(".delete-skill").click(function(){
	//    console.log(11111);
      $(this).parent().remove()
     })
	}else{
		$(".skill-language").append('<span>*</span>')
	}
	
})
 $(".delete").click(function(){
	//    console.log(11111);
      $(this).parent().remove()
    })