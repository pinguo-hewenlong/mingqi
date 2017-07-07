$(".Eval-header>div").click(function(){
    $(".Eval-header>div").eq($(this).index()).addClass("active-ev").siblings().removeClass('active-ev');

})