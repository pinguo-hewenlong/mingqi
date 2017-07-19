window.onload=function(){
    // islogin()
    //获取个人简历信息
    //获取基本信息
    var request = (function (){
            var obj = {};
            var arr = window.location.search.slice(1).split("&");
            for (var i = 0, len = arr.length; i < len; i++) {
                var nv = arr[i].split("=");
                obj[unescape(nv[0]).toLowerCase()] = unescape(nv[1]);
            }
            return obj;   
   })()
    var postData = {"uid":request.id};
    var info = AjaxPost('index.php/cuser/profile/getUsersInfo',postData,succCallback,errorCallback,"post","json");
    //console.log(postData)
    
    //var b	 = document.getElementById("Mastery-select").value;
    function succCallback(date)
    {
       
    }
    function errorCallback(date)
    {
         //console.log(date)
        $(".head-portrait>img").attr("src",host+'public/uploads/'+date[0].thumburl);
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

    //获取工作经历
    var work	=	AjaxPost('index.php/cuser/profile/getUsersWork',postData,succCallbackworks,errorCallbackworks,"post","json");
    //console.log(postData)
    function succCallbackworks(date)
    {
        alert("2222")
        
    }
    function errorCallbackworks(date)
    {
        //alert("1111")
        $.each(date,function(n,obj)
        {
            var begintime	=	new Date();
            var endtime		=	new Date();
            begintime.setTime(obj.begintime*1000);
            endtime.setTime(obj.endtime*1000);
            begintime 	= 	begintime.Format("yyyy-MM-dd");
            endtime		= 	endtime.Format("yyyy-MM-dd");
            var html	=	'<div>'+
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
                '</div>';
            $("#company-an1").append(html);
        })
    }

    //获取教育经历
    var edu	=	AjaxPost('index.php/cuser/profile/getUsersEdu',postData,succCallbackEdu,errorCallbackEdu,"post","json");
    function succCallbackEdu(date)
    {
        //alert("1111")
    }
    function errorCallbackEdu(date)
    {
        //alert("222")
        $.each(date,function(n,obj)
        {
            var endtime		=	new Date();
            endtime.setTime(obj.endtime*1000);
            endtime			= 	endtime.Format("yyyy-MM-dd");

            var html		=	'<div>'+
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
                '</div>';

            $("#company-an").append(html);
        })
    }

    //获取自我描述
    var desc	=	AjaxPost('index.php/cuser/profile/getUsersDesc',postData,succCallbackDesc,errorCallbackDesc,"post","json");
    function succCallbackDesc(date)
    {
       
    }
    function errorCallbackDesc(date)
    {
         $("#describe").html(date[0].self);
    }

    //获取期望工作
    var expectwork	=	AjaxPost('index.php/cuser/profile/getUsersExpectWork',postData,succCallbackExpectWork,errorCallbackExpectWork,"post","json");
    function succCallbackExpectWork(date){
        alert("22")
    }
    function errorCallbackExpectWork(date)
    {
        var salary;
            var eduction;
            var workexp;
            var scale;
            var nature;
            //console.log(date[0].salary)
            if(date[0].salary==101){
               salary="3k以下"
            }else if(date[0].salary==102){
                salary="4-8k"
            }else if(date[0].salary==103){
              salary="8-10k"
            }else if(date[0].salary==104){
                salary="10k以上"
            }
            if(date[0].eduction==101){
              eduction="高中"
            }else if(date[0].eduction==102){
                 eduction="大专以上"
            }else if(date[0].eduction==103){
                 eduction="本科以上"
            }
            if(date[0].workexp==101){
                workexp="1年以下"
            }else if(date[0].workexp==102){
                workexp="1-3年"
            }else if(date[0].workexp==103){
                workexp="3-5年"
            }else if(date[0].workexp==104){
                workexp="5年以上"
            }
            
        //alert("11")
        $("#pname").text(date[0].pname);
        // $("#zhiwei").text(date[0].description);
        $("#city").text(date[0].city);
        $("#salary").text(salary);
    }

    //获取技能评价
    var skills	=	AjaxPost('index.php/cuser/profile/getUsersSkills',postData,succCallbackskills,errorCallbackskills,"post","json");
    function succCallbackskills(date)
    {
        alert("222")
    }
    function errorCallbackskills(date)
    {
        //alert("11")
        console.log(date)
        $.each(date,function(n,obj){
            var html	=	'<div>'+'<h3 class="progress-title">'+obj.pname +'</h3>'+
                '<div class="progress">' +
                '<div class="progress-bar" style="width:'+obj.mastery+'%; background:#7ad396;">'+
                '<div class="progress-value">'+obj.mastery+'%'+'</div>'+
                '</div>'+
                '</div>'+
                '</div>';
            $("#skill-box").append(html);
        })
    }


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
