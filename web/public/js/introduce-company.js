window.onload=function(){
    // 获取基本信息
    var postData="";
     AjaxPost('index.php/cuser/profile/getinfo',postData,succCallback,errorCallback,"post","json");
     function succCallback(data){
         alert("1111")
            
    		// $("#industry").html(data[0].industry);
    		// $("#description").html(data[0].description);
    		// $("#position").html(data[0].address);
     }
     function errorCallback(data){
          //alert("2222");
          $("#title").text(data[0].companyname);
     }
}