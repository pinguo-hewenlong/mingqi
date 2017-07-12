
window.onload=function (){
    islogin()
    $(".success-btn").click(function(){
        $(".success-box").toggleClass("heinn-btn");
    })
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
    var x;
    var pids;
     $.ajax({
         type:'get',
         url:'http://127.0.0.1/mingqi/index.php/index/index/getPostionView',
         data:{"poid":'5053b6ffdd59b1ef85598010f69f231b'},
         dataType:'json',
         async : false,
         success:function(data){
             $(".job-name").text(data[0].title);
            $("#salary").text(data[0].salary+'/');
            $("#city").text(data[0].city+'/');
            $("#workexp").text(data[0].workexp+'/');
            $("#eduction").text(data[0].eduction+'/');
            $("#begintime").text(data[0].begintime+'发布');
            $(".responsibility-text").text(data[0].content);
           $("#ask").text(data[0].content);
           var  y=data[0].uid;
           x=y;
          return y
         }
     })
       var postData2={"uid":x}
       
       AjaxPost('index.php/index/index/getinfo',postData2,succCallback,errorCallback,"get","json");
       function succCallback(data){
        
       }
       function errorCallback(data){
           $("#companyname").text(data[0].companyname);
           $("#address").text(data[0].address);
       }
       //简历投递
    $("#Job-Details-title-btn").bind('click',function(){
        islogin2();
    let postData={"poid":"02bf8ead9f4cd51a25593d637d1eba54"};
    AjaxPost('index.php/puser/resume/send',postData,succCallback,errorCallback,"post","json");
    function succCallback(data){
         $(".success-box").toggleClass("heinn-btn");
         $(".success-box>h4").text("恭喜你....");
         $("#succes-status").text("投递成功了");
         $(".success-btn").text("确定");
    }
    function errorCallback(data){
         $(".success-box").toggleClass("heinn-btn");
         $(".success-box>h4").text("很遗憾....");
         $("#succes-status").text("投递失败了");
         $(".success-btn").text("再试一下");
    }

})
  
}

//成功时
function onSuccess(position){
    //使用百度地图API
    //创建地图实例
    var map =new BMap.Map('min-map');
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
