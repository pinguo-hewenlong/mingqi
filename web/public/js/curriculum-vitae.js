
$(".t-btn").onclick=function(){//添加点击事件
    console.log(11111)
    if($(".t-btn").className.indexOf('active')){ //说明已经是选中状态
        $(".t-btn").className = '';//清空class。
    }else{
       $(".t-btn").className = 'active';//否则选中它，给它添加active样式
    }
}
$(".t-btn").click(function(){
    $(this).toggleClass('active');//每次点击的时候，将当前的元素切换active样式
                                  //如果有，则去掉，否则添加
});
$(".t-btn").each(function(){
     $(this).click(function(){
            $(".t-btn").addClass("t-btn").removeClass("active");
            $(this).addClass("active").removeClass("t-btn");
        })
})
window.onload=function(){
    var postData="";
    AjaxPost(
        
    )
}
