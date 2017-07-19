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
    var demiain="http://www.scmqyc.com/mingqi/tp/index.php/"
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
                    if(res){
                        if(succCallback){
                            succCallback(res);
                        }                     
                    }else{
                        if(errorCallback){
                            errorCallback(res);
                        }
                    }                   
                },
//              error:
//             console.log("OK1")
            });
        //}
    };