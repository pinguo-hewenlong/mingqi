/**
 * Created by zzt on 2017/7/6 0006.
 * 1、关键词模糊搜索
 * 2、首页最新职位加载
 * 3、首页行业精英加载
 */
var BASE_URL    =   host+'index.php/';
$(document).ready(function(){
	

	searchElite('1');
	
	$('#sort1').bind('mouseover',function(){
		searchElite('1');
		$(this).addClass('first-name2')
	})
	$('#sort2').bind('mouseover',function(){
		searchElite('2');
		$(this).addClass('first-name2')
	})
	$('#sort3').bind('mouseover',function(){
		searchElite('3');
		$(this).addClass('first-name2')
	})
	$('#sort4').bind('mouseover',function(){
		searchElite('4');
		$(this).addClass('first-name2')
	})
	$('#sort5').bind('mouseover',function(){
		searchElite('5');
		$(this).addClass('first-name2')
	})
	
	
	$('#sort1').bind('mouseleave',function(){
		$(this).removeClass('first-name2')
	})
	$('#sort2').bind('mouseleave',function(){
		$(this).removeClass('first-name2')
	})
	$('#sort3').bind('mouseleave',function(){
		$(this).removeClass('first-name2')
	})
	$('#sort4').bind('mouseleave',function(){
		$(this).removeClass('first-name2')
	})
	$('#sort5').bind('mouseleave',function(){
		$(this).removeClass('first-name2')
	})	

	//查询行业精英
	var html =	'';
	function searchElite(sortid)
	{
		$('#elite').empty();
		$.ajax({
			type:"get",
			url:BASE_URL+"index/info/getelite",
			async:true,
			data:{'sortid':sortid},
			success:function(data)
			{
				html	=	''
				$.each(data, function(n,obj) {
					
					html	+=	'<div class="fb-img">'+
                                        '<div class="body-img">'+
                                              '<img src="'+obj.imgurl+'" alt="">'+
                                        '</div>'+
                                        '<div class="fb-text">'+
                                             '<h4>'+obj.realname+'</h4>'+
                                             '<div>职位：'+obj.position+'</div>'+
                                             '<p>'+obj.description+'</p>'+
                                        '</div>'+
                                    '</div>'
                                   
				});
				console.log(html);
				$('#elite').html(html);
			}
				
		});
	}


    //查询随机职位
    $.ajax({
        type:"get",
        url:BASE_URL+"index/index/getLatestPosition",
        async:true,
        success:function(data)
        {

        var id;
            $.each(data, function(n,obj) {

                var html;
                // var begintime	=	new Date();
                // begintime.setTime(obj.begintime*1000);
                // begintime = begintime.Format("hh:mm");
               function getLocalTime(nS) {     
                return begintime= new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
            }     
            getLocalTime(obj.begintime);

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
            //console.log(obj.poid)
                html ='<div class="jobs-first jods-poid" title="'+obj.poid+'">'+
                    '<div class="job-first-text">'+
                    '<div><span>'+obj.title+'</span><span>【成都】</span><span>'+begintime+'发布</span></div>'+
                    '<div class="job-com">'+obj.companyname+'</div>'+
                    '</div>'+
                    '<div class="job-first-text job-first-text2">'+
                    '<div>'+
                    '<span class="jobs-money">'+salary+'</span>'+
                    '<span>'+workexp+'/'+eduction+'</span>'+
                    '</div>'+
                    '<div>'+
                    '（'+nature+'/'+scale+'）'+
                    '</div>'+
                    '</div>'+
                    '<div class="job-first-text job-first-text2">'+
                    '<div class="little-text">'+
                    // '<span>中级</span>'+
                    // '<span>web</span>'+
                    // '<span>软件开发</span>'+
                    '</div>'+
                    '<div>"'+obj.content+'"</div>'+
                    '</div>'+
                    '</div>';
                
                $('#jobs').append(html);
            $(".jods-poid").bind('click',function(){
                //console.log($(this).attr("title"))   
                location.href ='pages/Job-description.html?id='+$(this).attr("title");
            })
            });
            
        }
    });



    $('<ul id="fuzzySearch"></ul>').hide().insertAfter("#search-input");

    $('#search-input').bind('input propertychange',function(){
        fuzzySearch();
    });

    function fuzzySearch()
    {
        $('#fuzzySearch').empty();

        var word;
        word =	$('#search-input').val();


        $.ajax({
            type:'get',
            url:BASE_URL+'search',
            data:{'word':word,"page":1,"size":10},
            async:true,
            success:function(data)
            {
                console.log(BASE_URL);
                $('#fuzzySearch').show();
                var html	=	'';
                $.each(data,function(n,obj){
                    console.log(obj.poid)
                    html	=	'<li><span class="li-des">'+obj.des+'</span><span class="li-span">共<span class="li-num">50</span>个职位</span></li>';

                    $('#fuzzySearch').append(html);

                    $('#fuzzySearch>li').click(function(){
                        $('#search-input').val($(this).find('.li-des').text());
                    });

                })
            },
        });

    }

});


$('#search-btn').bind('click',function(){
    var word    =   $('#search-input').val();
    $.cookie('search_res',word);
    window.location.href	=	'pages/serch-job.html'
})






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
