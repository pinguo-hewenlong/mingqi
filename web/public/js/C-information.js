//创建初始地图完毕
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
    //ajax请求
    var postData="";
    AjaxPost('index.php/cuser/profile/getInfo',postData,succCallback,errorCallback,"post","json");
    function succCallback(date){
        
    }
    function errorCallback(date){
       console.log(date[0].companyname)
      $(".head>img").attr("src",date[0].thumburl);
      $("#name").html(date[0].companyname);
      $(".number-pople").html(date[0].nature) ;
      $(".passages>p").html(date[0].description)
    }
}
$(".the-xiu").click(function(){
    $("form").toggleClass("chenge-form")
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