//创建初始地图完毕
var BASE_URL	=	"http://127.0.0.1/mingqi/index.php/";

window.onload=function (){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    var options={
        enableHighAccuracy:true, //是否允许高精度
        maximumAge:1000  //接受新点位的时间
    }
    if(navigator.geolocation){
        //浏览器支持geolocation
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(onSuccess,onError,options);

    }else{
        //浏览器不支持geolocation
    }
    
    
    //获取基本信息
    $.ajax({
    	type:"get",
    	url:"http://127.0.0.1/mingqi/index.php/cuser/profile/getinfo",
    	async:true,
    	success:function(data)
    	{	
    		$("#title").html(data[0].companyname);
    		$("#industry").html(data[0].industry);
    		$("#description").html(data[0].description);
    		$("#position").html(data[0].address);
    	}
    });
    
    //获取发展历程
    $.ajax({
    	type:"get",
    	url:"http://127.0.0.1/mingqi/index.php/cuser/profile/getmilepost",
    	async:true,
    	success:function(data)
    	{	
			$.each(data,function(n,obj){
				var html	=	"";
				html		=   '<div class="passages">'+
                                            '<div class="first-passages">'+
                                                    '<div>'+obj.time+'<i class="iconfont dian">&#xe61d;</i></div>'+
                                                    '<div class="fp-text">'+
                                                        '<div>'+obj.title+'</div>'+
                                                        '<div>'+obj.description+'</div>'+
                                                    '</div>'+
                                            '</div>'+
                                           '<div class="delete">删除</div>'+
                                    '</div>';
                //alert(html);                    
                $('#milepost').append(html);                    
				
			})
    	}
    });
    
    //修改公司描述
    $('#desBtn').bind('click',function(){
    	$.ajax({
    		type:"post",
    		url:"http://127.0.0.1/mingqi/index.php/cuser/profile/setinfo",
    		async:true,
    		data:$('#des').serialize(),
    		success:function(data){ 				
    		$("#bianji-information").toggleClass("bianji-information");		
     				//获取基本信息
    			$.ajax({
    				type:"get",
    				url:"http://127.0.0.1/mingqi/index.php/cuser/profile/getinfo",
    				async:true,
    				success:function(data)
    				{	
    					$("#description").html(data[0].description);
    					
    				}
    			});		
    		}
    	});
    })
    //添加发展历程
    $('#mileBtn').bind('click',function(){
    	$.ajax({
    		type:"post",
    		url:"http://127.0.0.1/mingqi/index.php/cuser/profile/setmilepost",
    		async:true,
    		data:$('#mile').serialize(),
    		success:function(data)
    		{
    		$("#tianjia-herstory").toggleClass("bianji-information")	
    			//获取发展历程
    		$.ajax({
    		type:"get",
    		url:"http://127.0.0.1/mingqi/index.php/cuser/profile/getmilepost",
    		async:true,
    		success:function(data)
    		{	
				$('#milepost').empty();
				$.each(data,function(n,obj){
				var html	=	"";
				html		=   '<div class="passages">'+
                                            '<div class="first-passages">'+
                                                    '<div>'+obj.time+'<i class="iconfont dian">&#xe61d;</i></div>'+
                                                    '<div class="fp-text">'+
                                                        '<div>'+obj.title+'</div>'+
                                                        '<div>'+obj.description+'</div>'+
                                                    '</div>'+
                                            '</div>'+
                                           '<div class="delete">删除</div>'+
                                    '</div>';
                //alert(html);                    
                $('#milepost').append(html);                    
				
			})
    	}
    });    			
    			
    		}
    	});
    })
    
    
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
$(".bianji1").click(function(){
    $("#bianji-information").toggleClass("bianji-information")
})
$("#quxiao").click(function(){
    $("#bianji-information").toggleClass("bianji-information")
})
$(".delete").click(function(){
	//    console.log(11111);
      $(this).parent().remove()
})
$(".bianji2").click(function(){
    $("#boianji-herstory").toggleClass("bianji-information")
})
$("#quxiao2").click(function(){
    $("#boianji-herstory").toggleClass("bianji-information")
})
$(".fp-add").click(function(){
    $("#tianjia-herstory").toggleClass("bianji-information")
})
$("#guanbi-tianjia-herstory").click(function(){
    $("#tianjia-herstory").toggleClass("bianji-information")
})
//成功时
function onSuccess(position){
    //使用百度地图API
    //创建地图实例
    var map =new BMap.Map('container');
    //设置地图中心点
    map.centerAndZoom(new BMap.Point(104.06, 30.67), 11);
    //返回用户位置
    var mk = new BMap.Marker(position.point);
    map.addOverlay(mk);
    map.panTo(position.point);
    //经度
    var longitude =position.point.lng;
    //纬度
    var latitude = position.point.lat;

    //获取起点和终点的经纬度
    var p1 = new BMap.Point(longitude,latitude);
    var p2 = new BMap.Point(104.08993,30.658331);
    //规划驾车路线

    // var searchComplete = function (results){
    //     if (driving.getStatus() != BMAP_STATUS_SUCCESS){
    //         return ;
    //     }
    //     var plan = results.getPlan(0);
    //     var distance = plan.getDistance(true);
    //     document.getElementById("distance").innerHTML = distance;
    // }
    // var driving =new BMap.DrivingRoute(map, {
    //     renderOptions: {
    //         map: map,
    //     },
    //     onSearchComplete: searchComplete,
    // });
    // //绘制驾车路线
    // driving.search(p1, p2);
}


//失败时
function onError(error){
    switch(error.code){
        case 1:
            alert("位置服务被拒绝");
            break;

        case 2:
            alert("暂时获取不到位置信息");
            break;

        case 3:
            alert("获取信息超时");
            break;

        case 4:
            alert("未知错误");
            break;
    }

}
