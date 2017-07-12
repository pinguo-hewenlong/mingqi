window.onload=function(){
    // 获取基本信息
    var postData="";
     AjaxPost('index.php/cuser/profile/getinfo',postData,succCallback,errorCallback,"get","json");
     function succCallback(data){
         alert("1111")
     }
     function errorCallback(data){
          //alert("2222");
          $("#title").text(data[0].companyname);
          $("#description").text(data[0].description);
     }
     //获取公司发展历程
     var postData2="";
     AjaxPost('index.php/cuser/profile/getmilepost',postData2,succCallback,errorCallback,"get","json");
     function succCallback(data){
         alert("1111")
     }
     function errorCallback(data){
          //alert("2222");
          console.log(data)
         $('#milepost').empty();
				$.each(data,function(n,obj){
                    var thetime=obj.time;
                    
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

}