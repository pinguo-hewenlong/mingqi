

var AjaxPost = function(url, postData, succCallback, errorCallback, type,dataType){
		//alert("ccc");
        /**
         * ajax封装
         * url 发送请求的地址
         * data 发送到服务器的数据，数组存储，如：{"username": "张三", "password": 123456}
         * succCallback 成功回调函数
         * errorCallback 失败回调函数
         * type 请求方式("POST" 或 "GET")， 默认已经设置为 "POST"
         */
    var demiain="http://127.0.0.1/mingqi/"
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
            $(".right-text").html('<span class="little-text"><a href="Message-center.html">消息</a></span>'+
                             '<span class="little-text"><a href="personal-resume.html">我的简历</a></span>'+
                             '<span class="little-text"><a href="Resume-status.html">投递箱</a></span>'+
                             '<span class="little-text" id="login-out"><a href="../index.html">注销</a></span>');
                             //退出登陆
                              $("#login-out").bind('click',function(){
                               
                                  var postData3="";
                                  AjaxPost('index.php/sso/logout',postData3,succCallback,errorCallback,"post","json");
                                  function succCallback(data){
                                    if(data.status==1){
                                        $(".right-text").html('<span class="little-text"><a href="enroll-p">注册</a></span>'+
                                                          '<span class="little-text"><a href="logo-p-p.html">登陆</a></span>')
                                    }
                                    
                                  }
                                  function errorCallback(data){
                                    if(data.status==0){
                                      $(".right-text").html('<span class="little-text"><a href="Message-center.html">消息</a></span>'+
                                                          '<span class="little-text"><a href="personal-resume.html">我的简历</a></span>'+
                                                          '<span class="little-text"><a href="Resume-status.html">投递箱</a></span>'+
                                                          '<span class="little-text" id="login-out"><a href="../index.html">注销</a></span>')
                                    }
                                  }
                              })
        }
    }
    function errorCallback(date){
        if(date.status==0){
            $(".right-text").html('<span class="little-text"><a href="enroll-p">注册</a></span>'+
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
  
 
