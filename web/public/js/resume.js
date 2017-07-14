//添加编辑按钮click事件
$("#jod-editor").click(function()
{
	$("#job-practice").toggleClass("job-practice")
});
$("#quxiao").click(function()
{
	$("#job-practice").toggleClass("job-practice")
});

$("#e-qixiao").click(function()
{
	$("#job-practice-bianji").toggleClass("job-practice")
});

$("#edu-quxiao").click(function()
{
	$("#geteducational").toggleClass("job-practice")
});
$("#edu-tainjia").click(function()
{
	$("#geteducational2").toggleClass("job-practice")
});
$("#edu-quxiao2").click(function()
{
	$("#geteducational2").toggleClass("job-practice")
});
$("#ping-editor").click(function()
{
	$("#pingjia").toggleClass("job-practice")
})
$("#edu-quxiao3").click(function()
{
	$("#pingjia").toggleClass("job-practice")
})
$("#skill-editor").click(function()
{
	$("#tinajia-skill").toggleClass("tinajia-skill")
})
$("#edu-quxiao4").click(function()
{
	$("#tinajia-skill").toggleClass("tinajia-skill")
})
//页面开始加载的
window.onload=function()
{
//判断是否登录
	islogin();
	$("#company-begintime").datepicker();
	$("#company-endtime").datepicker();
	$("#company-begintime1").datepicker();
	$("#company-endtime1").datepicker();
	$("#edu-endtime").datepicker();
	$("#edu-endtime1").datepicker();
    var postData = '';
//获取基本信息
    var info = AjaxPost('index.php/puser/profile/getinfo',postData,succCallback,errorCallback,"post","json");
    //var b	 = document.getElementById("Mastery-select").value;
	function succCallback(date)
	{
		$(".head-portrait>img").attr("src","http://127.0.0.1/mingqi/public/uploads/"+date[0].thumburl); 
		$(".name1").html(date[0].realname);
		$(".simple-little1").html(date[0].gender);
		$(".simple-little2").html(date[0].eduction);
		//根据出生年月算当前年龄
        //出生日期
		var birth	  =	  date[0].birth;
		//现在的时间
		var newdata   =  Math.round(new Date().getTime()/1000)
        //年龄
			var ages  =  newdata - birth;
			var  age  =  Math.ceil(ages /3600/24/365);
		$(".simple-little3").html(age+"岁");
		$(".simple-little4").html(date[0].Workxp);
		$(".simple-little5").html(date[0].city);	
		$(".info-phone").html(date[0].phone);
		$(".info-email").html(date[0].email);
	}
	function errorCallback(date)
	{		
	}
	
//获取工作经历
	var work	=	AjaxPost('index.php/puser/profile/getwork',postData,succCallbackwork,errorCallbackwork,"post","json");
	function succCallbackwork(date)
	{
		$.each(date,function(n,obj)
		{
			//console.log(obj)
			var begintime	=	new Date();
			var endtime		=	new Date();
			begintime.setTime(obj.begintime*1000);
			endtime.setTime(obj.endtime*1000);
			begintime 	= 	begintime.Format("yyyy-MM-dd");
			endtime		= 	endtime.Format("yyyy-MM-dd");
			var html	=	"";
			var editor	=	"editor"+obj.id;
			var delwork =	"delwork"+obj.id;
			html	=	'<div>'+
                            	'<div class="company-an">'+
                                    '<div>'+
                                        '<div class="company-com class= work-company">'+obj.company+'</div>'+
                                        '<div id="job" class="work-position">'+obj.position+'</div>'+
                                    '</div>'+
                                    '<div>'+
                                    '</div>'+
                                '</div>'+
                                '<div id="job-time" class="begin-endtime">'+begintime +"---"+ endtime+'</div>'+
                                '<div class="describe work-description">'+  obj.description+'</div>'+
                                '<span class="editor" id="'+editor+'" ><span style="display:none">'+obj.id+'</span><i class="iconfont rem-icon">&#xe68b;</i>编辑</span>'+
                                '<div class="delete" id= "'+delwork+'"><span style="display:none">'+obj.id+'</span>'+'删除'+'</div>'+
                            '</div>';
	  		$("#company-an1").append(html);
	  		$("#"+editor).click(function(){
	  			var id	=	$(this).find('span').text();
	  			$("#job-practice-bianji").find("#company-id").remove();
	  			$("#job-practice-bianji").toggleClass("job-practice");
				$("#job-practice-bianji").append('<input id="company-id" name="id" type="hidden" value="'+id+'" />');
				$("#job-practice-bianji").find('#company-name').val(obj.company);
				$("#job-practice-bianji").find('#company-position').val(obj.position);
				$("#job-practice-bianji").find('#company-begintime').val(begintime);
				$("#job-practice-bianji").find('#company-endtime').val(endtime);
				$("#job-practice-bianji").find('#company-desc').val(obj.description);
				
	  		})

			$("#"+delwork).click(function(){
			var id = $(this).find("span").text();
			var postData	=	{"poid":id};
			var work	=	AjaxPost('index.php/puser/profile/delWork',postData,succCallbackworkdel,errorCallbackworkdel,"post","json");
				function errorCallbackworkdel(){
				}
				function succCallbackworkdel(){
				}
		})
	  		
	  		
//	  		//编辑工作经历
//	  		$("#editor").click(function(){
//	               $("#job-practice-bianji").toggleClass("job-practice");
//	               $("#company-name").val(obj.company);
//	               $("#company-position").val(obj.position);
//	               $("#begintime").val(obj.begintime);
//	               $("#company-desc").val(obj.description);
//          });


	  		$(".delete").click(function()
	  		{
             $(this).parent().remove()
            })

		})
	}
	function errorCallbackwork(date)
	{	
	}
	
//获取教育经历
	var edu	=	AjaxPost('index.php/puser/profile/getedu',postData,succCallbackEdu,errorCallbackEdu,"post","json");
	function succCallbackEdu(date)
	{
		$.each(date,function(n,obj)
		{
			console.log(obj);
			var endtime		=	new Date();
			endtime.setTime(obj.endtime*1000);
			endtime			= 	endtime.Format("yyyy-MM-dd");
			var html = "";
			var edu_editor	=	"edu_editor"+obj.id;
			html		=	'<div>'+
                                '<div class="company-an">'+
                                    '<div>'+
                                        '<div id="schooledu" class="company-com edu-school">'+obj.school+'</div>'+
                                        '<div id="major" class="edu-major">'+obj.major+'.'+obj.record+'</div>'+
                                    '</div>'+
                                        '<div>'+       
                                    '</div>'+
                                '</div>'+
                                '<div id="major-time" class="edu-majortime">'+
                                    endtime+'毕业'+
                                '</div>'+ 
                                '<span class=" editor" id="'+edu_editor+'"><span style="display:none">'+obj.id+'</span><i class="iconfont rem-icon">&#xe68b;</i>&nbsp;编辑</span>'+
                                '<div class="delete">'+'删除'+'</div>'+
                            '</div>';
                            
	  		$("#company-an2").append(html);



	  		$("#"+edu_editor).click(function(){
				var id	=	$(this).find('span').text();
				$("#geteducational").find("#edu-id").remove();
				$("#geteducational").toggleClass("job-practice");
				$("#geteducational").append('<input id="edu-id" name="id" type="hidden" value="'+id+'" />');
				$("#geteducational").find('#school').val(obj.school);
				$("#geteducational").find('#major').val(obj.major);
				$("#geteducational").find('#record').val(obj.record);
				$("#geteducational").find('#edu-endtime').val(endtime);
				console.log($("#geteducational").html())
            });
	  		$(".delete").click(function()
	  		{
            	$(this).parent().remove()
           })	
		})
	}
	function errorCallbackEdu(date)
	{	
	}

//获取自我描述
	var desc	=	AjaxPost('index.php/puser/profile/getDesc',postData,succCallbackDesc,errorCallbackDesc,"post","json");
	function succCallbackDesc(date)
	{
		$("#describe").html(date[0].self);
	}
	function errorCallbackDesc(date)
	{
		//$("#geteducational").toggleClass("job-practice")
	} 
	
	//修改个人描述
    $('#descbtn').bind('click',function(){
    	$.ajax({
    		type:"post",
    		url:"http://127.0.0.1/mingqi/index.php/puser/profile/setdesc",
    		async:true,
    		data:$('#desc').serialize(),
    		success:function(data){
    		$("#pingjia").toggleClass("job-practice")
     				//获取个人描述
    			$.ajax({
    				type:"get",
    				url:"http://127.0.0.1/mingqi/index.php/puser/profile/getDesc",
    				async:true,
    				success:function(data)
    				{
    					$(".describe").html(date[0].self);

    				}
    			});
    		}
    	});
    })
	
	
	
	
	
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
	function succCallbackskills(date)
	{
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
	  		$(".delete-skill").click(function()
	  		{
            	$(this).parent().remove()
           })	
		})
	}
	function errorCallbackskills(date)
	{	
	}
//获取目前状态
	var arrival	=	AjaxPost('index.php/puser/profile/getarrival',postData,succCallbackarrival,errorCallbackarrival,"get","json");
	function succCallbackarrival(date)
	{
		$("#arrival").val(date.time);
	}
	function errorCallbackarrival(date)
	{
	}
}
//获取信息END

function succCallback(date){
	
}
function errorCallback(date){
}
//出生年月计算如今年纪的计算方法
var agefun=function  (birth) 
{
	var date = new Date();
	var birthday = birth;
	var newDate = date.getTime() - birthday;
	var age = Math.ceil(newDate / 1000 / 60 / 60 / 24 /365);
    if (isNaN(age))
    {
        age = "";
    }
    return age;
};
//时间戳与年月日的转换
Date.prototype.Format = function (fmt)
{
    var o =
    {
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

//添加工作经历
$('#workbtn').bind('click',function()
{
    $.ajax({
    	type:"post",
    	url:"http://127.0.0.1/mingqi/index.php/puser/profile/setwork",
    	async:true,
    	data:$('#job-practice').serialize(),
    	success:function(data)
    	{
    		$.ajax({
    		type:"get",
    		url:"http://127.0.0.1/mingqi/index.php/puser/profile/getwork",
    		async:true,
    		success:function(data)
    		{	
				$('#company-an1').empty();
				$.each(data,function(n,obj)
				{
					var html	=	"";
					html		=   '<div>'+
                            		'<div class="company-an">'+
                                    '<div>'+
                                        '<div class="company-com class= work-company">'+obj.company+'</div>'+
                                        '<div id="job" class="work-position">'+obj.position+'</div>'+
                                    '</div>'+
                                    '<div>'+             
                                    '</div>'+
                                	'</div>'+
                                	'<div id="job-time" class="begin-endtime">'+obj.begintime +"-"+ obj.endtime+'</div>'+
                                	'<div class="describe work-description">'+  obj.description+'</div>'+ 
                                    '<div class="delete">'+'删除'+'</div>'+
                                    '<div class="sets">'+'编辑'+'</div>'+
                            		'</div>';                 
                	$('#company-an1').append(html);                    
				})
    		}
    		});    				
    	}
    });
})


//添加教育经历
$('#edubtn').bind('click',function()
{
    $.ajax({
    	type:"post",
    	url:"http://127.0.0.1/mingqi/index.php/puser/profile/setedu",
    	async:true,
    	data:$('#geteducational2').serialize(),
    	success:function(data)
    	{
    		$.ajax({
    		type:"get",
    		url:"http://127.0.0.1/mingqi/index.php/puser/profile/getedu",
    		async:true,
    		success:function(data)
    			{	
					$('#company-an').empty();
					$.each(data,function(n,obj)
					{
						var html	=	"";
						html		=   '<div>'+
                                		'<div class="company-an">'+
                                    	'<div>'+
                                        '<div id="schooledu" class="company-com edu-school">'+obj.school+'</div>'+
                                        '<div id="major" class="edu-major">'+obj.major+'.'+obj.record+'</div>'+
                                    	'</div>'+
                                        '<div>'+       
                                    	'</div>'+
                                		'</div>'+
                                		'<div id="major-time" class="edu-majortime">'+
                                    	'2016年毕业'+
                                		'</div>'+
                               			'<div class="delete">'+'删除'+'</div>'+
                            			'</div>';                 
                	$('#company-an1').append(html);                    
					})
    			}
    		});    				
    	}
    });
})

//添加技能
$("#baocun-skill").click(function()
{
	var a=document.getElementById("input-text").value;
	var b=document.getElementById("Mastery-select").value;
	var options		=		$("#Mastery-select option:selected");
	if(a != 0)
	{
      	$("#skill-box").append
      	('<div>'+
	  	'<h3 class="progress-title">'+$("#input-text").val() +'</h3>'+
	  	'<div class="progress">' +
	    '<div class="progress-bar" style="width:'+b+'%; background:#7ad396;">'+
	    '<div class="progress-value">'+ options.val()+'%'+'</div>'+ 
	    '</div>'+
      	'</div>'+
	  	'<div class="delete-skill">删除</div>'+
	  	'</div>')
	  	$(".delete-skill").click(function()
	  	{
      		$(this).parent().remove()
     	})
	}
	else
	{
		$(".skill-language").append('<span>*</span>')
	}
})
$(".delete").click(function()
	{
      	$(this).parent().remove()
    })
 
//修改到岗时间
function Change(){
    var strvalue=$("#arrivalselect").val();
    $.ajax({
    	type:"post",
        url:"http://127.0.0.1/mingqi/index.php/puser/profile/setarrival",
        async:"true",
        dataType: "json",
        data:$('#arrival').serialize(),
        success: function (data) {
            //console.log(data)
        }
    });
}

//修改期望工作
function Changework(){
    var strvalue=$("#arrivalselect").val();
    $.ajax({
    	type:"post",
        url:"http://127.0.0.1/mingqi/index.php/puser/profile/setExpectwork",
        async:"true",
        dataType: "json",
        data:$('#Expectwork').serialize(),
        success: function (data) {
            //console.log(data)
        }
    });
}
//修改工作经历


function Change(){
	var strvalue=$("#arrivalselect").val();
	$.ajax({
		type:"post",
		url:"http://127.0.0.1/mingqi/index.php/puser/profile/setarrival",
		async:"true",
		dataType:"json",
		data:$('#')
	})
}


//修改工作经历
$("#keep").click(function(){

	var url = "http://127.0.0.1/mingqi/index.php/puser/profile/setwork?update=1";

	$.ajax({
	type:"post",
	url:url,
	async:true,
	data:$('#job-practice-bianji').serialize(),
	success:function(data){
	  	//console.log(data);
	  	}
	});
	$("#job-practice-bianji").toggleClass("job-practice");
	location.reload();
})

//修改教育经历
$("#keepedu").click(function(){

	var url = "http://127.0.0.1/mingqi/index.php/puser/profile/setedu?update=1";

	$.ajax({
		type:"post",
		url:url,
		async:true,
		data:$('#geteducational').serialize(),
		success:function(data){
			//console.log(data);
		}
	});
	$("#geteducational").toggleClass("job-practice");
	//location.reload();
})



