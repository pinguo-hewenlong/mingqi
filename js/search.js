// $(".more").onclick=function(){
//     $(".more-box").css({
//         "display":"block"
//     })
// }
$("#more").bind('click',function(){
    $("#more-box").toggleClass("more-box")
});
$("#four-more").bind('click',function(){
    $("#more-box2").toggleClass("more-box")
})

