$(document).ready(function(){
    //判断信息填写状态选择跳转的路径
    var postData = '';
    AjaxPost('index.php/sso/login/islogin',postData,succCallback,errorCallback,"post","json");
    //判断是否登录，等于零不可以访问
    function succCallback(date){

        if(date.status==0){
            location.href = 'www,baidu.com'
        }
    }
    function errorCallback(date){
        if(date.status==0){
            location.href = '../index.html'
        }
    }
})



window.onload = function(){

    //console.log(333333);
}
//登录过程出现错误后执行的方法
function errorCallback(date){
    //console.log("OK1")
    //$('#span').text('网络错误');

}
