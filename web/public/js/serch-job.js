


var BASE_URL	=	host+'index.php/';

$(document).ready(function(){
    //初始化分页
var GG = {
       "kk":function(mm){
           console.log(1111);
       }
   }
$("#page").initPage(71,1,GG.kk);	
	
	islogin()
	search($.cookie('search_res'));
	
	
$('#search-btn').bind('click',function(){
    search($('#search-input').val());
})
	
	
	function search(word){
    $('#search-input').val(word);
	$.ajax({
		type:'get',
		url:BASE_URL+'search/index/byword',
		data:{'word':word,"page":1,"size":10},
		async:true,
		success:function(data){
			console.log(data)
			$.each(data,function(n,obj){
				
				var html	=	'';
                // var begintime	=	new Date();
                // begintime.setTime(obj.begintime*1000);
                // begintime = begintime.Format("hh:mm");
                
                
                $.ajax({
                    type:"get",
                    url:BASE_URL+"index/index/getCompanyByPosition",
                    async:false,
                    data:{'uid':obj.uid},
                    success:function(data)
                    {
                        obj.companyname=data.companyname;
                        obj.nature	=	data.nature;
                        obj.scale	=	data.scale;
                        //console.log(obj.scale);
                    },
                });                
				
				 function getLocalTime(nS) {     
                    return begintime= new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
                }     
                getLocalTime(obj.begintime);
				
				var salary;
            var eduction;
            var workexp;
            var scale;
            var nature;
            if(obj.salary==101){
               salary="3k以下"
            }else if(obj.salary==102){
                salary="4-8k"
            }else if(obj.salary==103){
              salary="8-10k"
            }else if(obj.salary==104){
                salary="10k以上"
            }
            if(obj.eduction==101){
              eduction="高中"
            }else if(obj.eduction==102){
                 eduction="大专以上"
            }else if(obj.eduction==103){
                 eduction="本科以上"
            }
            if(obj.workexp==101){
                workexp="1年以下"
            }else if(obj.workexp==102){
                workexp="1-3年"
            }else if(obj.workexp==103){
                workexp="3-5年"
            }else if(obj.workexp==104){
                workexp="5年以上"
            }
            if(obj.scale==101){
               scale="20人以下"
            }else if(obj.scale==102){
                 scale="20-50人"
            }else if(obj.scale==103){
                 scale="50-100人"
            }else if(obj.scale==104){
                 scale="100-500人"
            }else if(obj.scale==105){
                 scale="500人以上"
            }
            if(obj.nature==101){
               nature="互联网"
            }else if(obj.nature==102){
                 nature="移动互联网"
            }
				
				html	=	'<div class="first-job jods-poid" title="'+obj.poid+'">'+'<div class="first-job-title">'+
							'<div><span class="job-podtions">'+obj.title+'</span>'+
                                       '<span class="job-time">'+begintime+'发布</span>'+
                                       '<span class="news"><i class="iconfont">&#xe622;</i></span>'+
                                   '</div>'+
                                   '<div class="company-name">'+obj.companyname+'</div>'+
                               '</div>'+
                               '<div class="first-job-title first-job-section">'+
                                    '<div>'+
                                        '<span class="salary">'+salary+'</span>'+
                                       '<span>经验'+workexp+'年/'+eduction+'</span>'+
                                    '</div>'+
                                    '<div class="company-name first-job-section-text">'+
                                        nature+'/'+scale+'）'+
                                    '</div>'+
                               '</div>'+
                               '<div class=" job-first-text job-first-text2">'+
                                         '<div class="little-text">'+
                                            //   '<span>中级</span>'+
                                            //   '<span>web</span>'+
                                            //   '<span>软件开发</span>'+
                                        '</div>'+
                                        '<div class="company-name first-job-section-text">'+obj.content+'</div>'+
                                '</div>'+
                           '</div>';
            $('#search_res').append(html);   
            $(".jods-poid").bind('click',function(){
                //console.log($(this).attr("title"))   
                location.href ='Job-description.html?id='+$(this).attr("title");
            })            
			})
		}
	})
	}
	
	
});	

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


//if($.cookie('search_res') == '') {
//    $("#search_res").html('无搜索结果');
//} else {
//    $("#search_res").innerHTMLhtml('有结果');
//}
//$("#search-btn").click(function(){
//    var data=new Array();
//    data=$("#search-input").val()==''?'web':$("#search-input").val();
//        $.get("http://127.0.0.1/mingqi/index.php/search/index/byword?word="+data, function(result){
//
//        });
//});