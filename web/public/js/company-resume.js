window.onload=function(){
    // islogin()
    //获取个人简历信息
    //获取基本信息
    var postData = '';
    var info = AjaxPost('index.php/puser/profile/getinfo',postData,succCallback,errorCallback,"post","json");
    //var b	 = document.getElementById("Mastery-select").value;
    function succCallback(date)
    {
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
    function errorCallback(date)
    {
    }

    //获取工作经历
    var work	=	AjaxPost('index.php/puser/profile/getwork',postData,succCallbackwork,errorCallbackwork,"post","json");
    function succCallbackwork(date)
    {
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
    function errorCallbackwork(date)
    {
    }

    //获取教育经历
    var edu	=	AjaxPost('index.php/puser/profile/getedu',postData,succCallbackEdu,errorCallbackEdu,"post","json");
    function succCallbackEdu(date)
    {
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
    }

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
                '</div>';
            $("#skill-box").append(html);
        })
    }
    function errorCallbackskills(date)
    {
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
