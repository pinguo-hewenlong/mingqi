
function getremoteurl(){
    // alert(window.location.host);
    var host = window.location.host;
    if (host == '127.0.0.1') {
        //线下环境
        return host= 'http://'+host+'/mingqi/';
    } else {
        host = 'http://www.scmqyc.com/mingqi/';
        return host;
    }
}
var host = getremoteurl()
var AjaxPost = function(url, postData, succCallback, errorCallback, type,dataType){
        /**
         * ajax封装
         * url 发送请求的地址
         * data 发送到服务器的数据，数组存储，如：{"username": "张三", "password": 123456}
         * succCallback 成功回调函数
         * errorCallback 失败回调函数
         * type 请求方式("POST" 或 "GET")， 默认已经设置为 "POST"
         */
    var demiain=host
        //console.log(url);
        //function $ajax(url, postData, succCallback, errorCallback, type,dataType){
        var type = type || "post";
          var dataType = dataType || "json";              	
            $.ajax({
                type: type,
                url: demiain+url,
                data: postData,
                dataType: dataType,
                success: function(res){
                    if(res.status){
                        if(succCallback){
                            succCallback(res);
                        }                     
                    }else{
                        if(errorCallback){
                            errorCallback(res);
                        }
                    }                   
                },
//            error:
//             console.log("OK1")
            });
        //}
    };

    //文件上传ajax        $(function () {
               



function islogin(){
   //判断是否登陆
  var postData2 = '';
    AjaxPost('index.php/sso/login/islogin',postData2,succCallback,errorCallback,"post","json");
    function succCallback(date){

        if(date.status==1){
            $(".right-text").html(
                             '<span class="little-text"><a href="personal-resume.html">我的简历</a></span>'+
                             '<span class="little-text"><a href="Notification-Center.html">投递箱</a></span>'+
                             '<span class="little-text" id="login-out"><a href="../index.html">注销</a></span>');
                             //退出登陆
                              $("#login-out").bind('click',function(){
                               
                                  var postData3="";
                                  AjaxPost('index.php/sso/logout',postData3,succCallback,errorCallback,"post","json");
                                  function succCallback(data){
                                    if(data.status==1){
                                        $(".right-text").html('<span class="little-text"><a href="enroll-p.html">注册</a></span>'+
                                                          '<span class="little-text"><a href="logo-p-p.html">登陆</a></span>')
                                    }
                                    
                                  }
                                  function errorCallback(data){
                                    if(data.status==0){
                                      $(".right-text").html(
                                                          '<span class="little-text"><a href="personal-resume.html">我的简历</a></span>'+
                                                          '<span class="little-text"><a href="Notification-Center.html">投递箱</a></span>'+
                                                          '<span class="little-text" id="login-out"><a href="../index.html">注销</a></span>')
                                    }
                                  }
                              })
        }
    }
    function errorCallback(date){
        if(date.status==0){
            $(".right-text").html('<span class="little-text"><a href="enroll-p.html">注册</a></span>'+
                             '<span class="little-text"><a href="logo-p-p.html">登陆</a></span>')
        }
    }
}
function islogin2(){
    var postData2 = '';
    AjaxPost('index.php/sso/login/islogin',postData2,succCallback,errorCallback,"post","json");
    function succCallback(){
      
    }
    function errorCallback(){
         $(".success-box>h4").text("还没登陆呢....");
         $("#succes-status").text("不能投递哦");
         $(".success-btn").html('<a href="logo-p-p.html">返回登录</a>')
    }
}
$(".phone-input").change(function(){
    var phone=$(".phone-input").val();
    if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone))){ 
        $(".tixoin").text("请输入正确的手机号码"); 
        // document.mobileform.mobile.focus(); 
        return false; 
    } else{
           $(".tixoin").text(""); 
    }
})
$(".name").change(function(){
    var name=$(".name").val();
    if(!(/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/ .test(name))){ 
        $(".tixoin").text("姓名格式有误"); 
        // document.mobileform.mobile.focus(); 
        return false; 
    } else{
           $(".tixoin").text(""); 
    }
})
 $(".email").change(function(){
    var email=$(".email").val();
    if(!(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/ .test(email))){ 
        $(".tixoin").text("邮箱格式有误"); 
        // document.mobileform.mobile.focus(); 
        return false; 
    } else{
           $(".tixoin").text(""); 
    }
})
$(".school-name").change(function(){
    var school=$(".school-name").val();
    if(!(/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/ .test(school))){ 
        $(".tixoin").text("学校格式有误"); 
        // document.mobileform.mobile.focus(); 
        return false; 
    } else{
           $(".tixoin").text(""); 
    }
})
$(".adj").change(function(){
    var adj=$(".adj").val();
    if(!(/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/ .test(adj))){ 
        $(".tixoin").text("专业格式有误"); 
        // document.mobileform.mobile.focus(); 
        return false; 
    } else{
           $(".tixoin").text(""); 
    }
})
$(".com-name").change(function(){
    var com=$(".com-name").val();
    if(!(/^[a-zA-Z\u4e00-\u9fa5 ]{2,20}$/ .test(com))){ 
        $(".tixoin").text("公司格式有误"); 
        // document.mobileform.mobile.focus(); 
        return false; 
    } else{
           $(".tixoin").text(""); 
    }
})
$(".com-postion").change(function(){
    var com=$(".com-postion").val();
    if(!(/^([\u4E00-\u9FA5]|[A-Za-z]){2,20}$/ .test(com))){ 
        $(".tixoin").text("所在职位格式有误"); 
        // document.mobileform.mobile.focus(); 
        return false; 
    } else{
           $(".tixoin").text(""); 
    }
})
// $(".maioshu").change(function(){
//     var com=$(".maioshu").val();
//     if(!(/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,50}$/ .test(com))){ 
//         $(".tixoin").text("工作描述格式有误"); 
//         // document.mobileform.mobile.focus(); 
//         return false; 
//     } else{
//            $(".tixoin").text(""); 
//     }
// })
// $(".maioshu2").change(function(){
//     var com=$(".maioshu2").val();
//     if(!(/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,80}$/ .test(com))){ 
//         $(".tixoin").text("自我格式有误"); 
//         // document.mobileform.mobile.focus(); 
//         return false; 
//     } else{
//            $(".tixoin").text(""); 
//     }
// })
$(".wangzhi").change(function(){
    var com=$(".wangzhi").val();
    if(!(/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/ .test(com))){ 
        $(".tixoin").text("公司网址格式有误"); 
        // document.mobileform.mobile.focus(); 
        return false; 
    } else{
           $(".tixoin").text(""); 
    }
})
$("#company-address").change(function(){
    var com=$("#company-address").val();
    if(!(/[^a-z|A-Z|0-9|\-|_|\.]/g  .test(com))){ 
        $(".tixoin").text("公司地址格式有误"); 
        // document.mobileform.mobile.focus(); 
        return false; 
    } else{
           $(".tixoin").text(""); 
    }
})
// $("#jieshao").change(function(){
//     var com=$("#jieshao").val();
//     if(!(/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,80}$/ .test(com))){ 
//         $(".tixoin").text("工司介绍格式有误"); 
//         // document.mobileform.mobile.focus(); 
//         return false; 
//     } else{
//            $(".tixoin").text(""); 
//     }
// })
$(".biaoti").change(function(){
    var com=$(".biaoti").val();
    if(!(/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,50}$/ .test(com))){ 
        $(".tixoin").text("请正确填写标题"); 
        // document.mobileform.mobile.focus(); 
        return false; 
    } else{
           $(".tixoin").text(""); 
    }
})


