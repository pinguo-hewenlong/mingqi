window.onload=function(){
    // islogin()
    //获取个人简历信息
    //获取基本信息
    var postData = '';
    var info = AjaxPost('index.php/puser/profile/getinfo',postData,succCallback,errorCallback,"post","json");
    //var b	 = document.getElementById("Mastery-select").value;
    function succCallback(date)
    {
        $(".head-portrait>img").attr("src","http://127.0.0.1/mingqi/public/uploads/"+date[0].thumburl);
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
}

