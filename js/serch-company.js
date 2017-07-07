$("#more").bind('click',function(){
    $("#more-box").toggleClass("more-box")
});
$("#four-more").bind('click',function(){
    $("#more-box2").toggleClass("more-box")
});
// 初始化分页
var GG = {
        "kk":function(mm){
            console.log(1111);
        }
    }
$("#page").initPage(71,1,GG.kk);