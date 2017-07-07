


var BASE_URL	=	'http://www.scmqyc.com/test/tp/index.php/';

$(document).ready(function(){
    //初始化分页
var GG = {
       "kk":function(mm){
           console.log(1111);
       }
   }
$("#page").initPage(71,1,GG.kk);

	//判断是否登录	
  var postData = '';
    AjaxPost('index.php/sso/login/islogin',postData,succCallback,errorCallback,"post","json");
    function succCallback(date){

        if(date.status==1){
            $(".right-text").html('<span class="little-text"><a href="pages/Message-center.html">消息</a></span>'+
                             '<span class="little-text"><a href="pages/personal-resume.html">我的简历</a></span>'+
                             '<span class="little-text"><a href="pages/Resume-status.html">投递箱</a></span>')
        }
    }
    function errorCallback(date){
        if(date.status==0){
            $(".right-text").html('<span class="little-text"><a href="">注册</a></span>'+
                             '<span class="little-text"><a href="">登陆</a></span>')
        }
    }	
	
	
	search($.cookie('search_res'));
	
	
$('#search-btn').bind('click',function(){
    search($('#search-input').val());
})
	
	
	function search(word){
    $('#search-input').val(word);
	$.ajax({
		type:'get',
		url:BASE_URL+'search/index/byword',
		data:{'word':word},
		async:true,
		success:function(data){
			
			$.each(data,function(n,obj){
				
				var html	=	'';
                var begintime	=	new Date();
                begintime.setTime(obj.begintime*1000);
                begintime = begintime.Format("hh:mm");
                
                
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
				
				
				
				
				
				html	=	'<div class="first-job">'+'<div class="first-job-title">'+
							'<div><span class="job-podtions">'+obj.title+'</span>'+
                                       '<span class="job-time">'+begintime+'发布</span>'+
                                       '<span class="news"><i class="iconfont">&#xe622;</i></span>'+
                                   '</div>'+
                                   '<div class="company-name">'+obj.companyname+'</div>'+
                               '</div>'+
                               '<div class="first-job-title first-job-section">'+
                                    '<div>'+
                                        '<span class="salary">12-21k</span>'+
                                       '<span>经验'+obj.workexp+'年/'+obj.eduction+'</span>'+
                                    '</div>'+
                                    '<div class="company-name first-job-section-text">'+
                                        obj.nature+'/'+obj.scale+'）'+
                                    '</div>'+
                               '</div>'+
                               '<div class=" job-first-text job-first-text2">'+
                                         '<div class="little-text">'+
                                              '<span>中级</span>'+
                                              '<span>web</span>'+
                                              '<span>软件开发</span>'+
                                        '</div>'+
                                        '<div class="company-name first-job-section-text">'+obj.content+'</div>'+
                                '</div>'+
                           '</div>';
            $('#search_res').append(html);               
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