window.onload=function(){
    islogin();
    var postData={"page":1,"perpage":5,"status":"all"};
    AjaxPost('index.php/puser/resume/getsendlist',postData,succCallback,errorCallback,"post","json");
    function succCallback(data){
    //  alert("111111")
    console.log(data)
    }
    function errorCallback(){
     alert("2222222")
    }
}