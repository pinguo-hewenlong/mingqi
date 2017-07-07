window.onload=function(){
     islogin();
     var GG = {
       "kk":function(mm){
           console.log(1111);
       }
   }
$("#page").initPage(71,1,GG.kk);
}
$(".nominate").bind('click',function(){
    $("#release-job").toggleClass("release-job")
})
$(".quxiao").bind('click',function(){
    $("#release-job").toggleClass("release-job")
})