window.onload=function(){
    islogin()
    var request = (function (){
    var obj = {};
    var arr = window.location.search.slice(1).split("&");
    for (var i = 0, len = arr.length; i < len; i++) {
        var nv = arr[i].split("=");
        obj[unescape(nv[0]).toLowerCase()] = unescape(nv[1]);
    }
    return obj;   
   })()
    var cid=request.cid;
    // 获取基本信息
     $.ajax({
         type:'post',
         url:host+'index.php/cuser/profile/getInfoFromUser',
         data:{"uid":cid},
         dataType:'json',
         async : true,
         success:function(data){
                $("#title").text(data[0].companyname);
              $("#description").text(data[0].description);
         }
     })
      //获取公司发展历程
     $.ajax({
         type:'post',
         url:host+'hindex.php/cuser/profile/getFromUser',
         data:{"uid":cid},
         dataType:'json',
         async : true,
         success:function(data){
                $('#milepost').empty();
				$.each(data,function(n,obj){
                    //var thetime=obj.time;
                    function getLocalTime(nS) {     
                    return time= new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
                }     
                getLocalTime(obj.time);
				 
				var html		=   '<div class="passages">'+
                                            '<div class="first-passages">'+
                                                    '<div>'+time+'<i class="iconfont dian">&#xe61d;</i></div>'+
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
     })
    
}