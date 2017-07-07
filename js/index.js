var carousels = $('.carousel');
carousels.each(function() {
  var $obj = $(this);
  var $inner = $obj.find('.carousel-inner');
   
  var id = 'uuid' + new Date().getTime();
  $obj.addClass(id);
 
  if ($obj.data('shift') === 1) {
    var items = $obj.find('.item > [class*="col-"]'),
        visibleCnt = $obj.find('.item:first [class*="col-"]').length,
        wrapper = "";
     
    // 内置CSS样式
    var rule_base = '.carousel.' + id + ' .carousel-inner > .item',
        styles = $('<style></style>'),
        rules = [];
        rules[0] = rule_base + '.next {left: ' + (100 / visibleCnt) + '%; transform: none;}';
        rules[1] = rule_base + '.active {left: 0;}';
        rules[2] = rule_base + '.active.left {left: -' + (100 / visibleCnt) + '%; transform: none;}';
        rules[3] = rule_base + '.next.left {left: 0;}';
        rules[4] = rule_base + '.active.right {left: ' + (100 / visibleCnt) + '%; transform: none;}';
        rules[5] = rule_base + '.prev.right {left: 0;}';
        rules[6] = rule_base + '.prev {left: -' + (100 / visibleCnt) + '%; transform: none;}';
    for (var i = 0; i < rules.length; i++) {
      styles.append(rules[i]);
    }
    $obj.prepend(styles);
 
    // 重构旋转木马的HTML结构
    for (var i = 0; i < $(items).length; i++) {
      var $item = $(items[i]);
      var parent = $item.parent();
      if (parent.hasClass('item')) {
        if (!wrapper.length) {
          wrapper = parent.clone().removeClass('active').html('');
        }
        $item.unwrap();
      }
       
      var itemGroup = [$item];
      for (var x = 1; x < visibleCnt; x++) {
        var a = i + x;
        var next = $(items[a]);
        if (!next.length) {
          next = $(items[(a - $(items).length)]);
        }
        itemGroup[x] = next.clone();
      }
      var newSet = wrapper.clone().html(itemGroup);
      if (i == 0) {
        newSet.addClass('active');
      }
      newSet.appendTo($inner);
    }
  }
});

window.onload=function(){
  //判断是否登陆
    //判断是否登录
    $.ajax({
        type:"get",
        url:"tp/index.php/index/base",
        async:true,
        success:function(data)
        {
            if(data.status == 1)
            {
                $(".heiiden-header").css({
                    "display":"block"
                });
                $(".block-header").css({
                    "dispaly":"none"
                })
            }
            else
            {

            }
        }

    });

  var postData = '';
    AjaxPost('/index.php/sso/login/islogin',postData,succCallback,errorCallback,"post","json");
    function succCallback(date){

        if(date.status==1){
            $(".right-text").html('<span class="little-text"><a href="pages/Message-center.html">消息</a></span>'+
                             '<span class="little-text"><a href="pages/personal-resume.html">我的简历</a></span>'+
                             '<span class="little-text"><a href="pages/Resume-status.html">投递箱</a></span>'+
                             '<span class="little-text" id="login-out"><a href="index.html">注销</a></span>');
                             //退出登陆
                              $("#login-out").bind('click',function(){
                                console.log(1111)
                                  var postData="";
                                  AjaxPost('/tp/index.php/sso/logout',postData,succCallback,errorCallback,"post","json");
                                  function succCallback(data){
                                    if(data.status==1){
                                        $(".right-text").html('<span class="little-text"><a href="pages/enroll-p">注册</a></span>'+
                                                          '<span class="little-text"><a href="pages/logo-p-p.html">登陆</a></span>')
                                    }
                                    
                                  }
                                  function errorCallback(data){
                                    if(data.status==0){
                                      $(".right-text").html('<span class="little-text"><a href="pages/Message-center.html">消息</a></span>'+
                                                          '<span class="little-text"><a href="pages/personal-resume.html">我的简历</a></span>'+
                                                          '<span class="little-text"><a href="pages/Resume-status.html">投递箱</a></span>'+
                                                          '<span class="little-text" id="login-out"><a href="index.html">注销</a></span>')
                                                          
                                    }
                                  }
                              })
        }
    }
    function errorCallback(date){
        if(date.status==0){
            $(".right-text").html('<span class="little-text"><a href="pages/enroll-p">注册</a></span>'+
                             '<span class="little-text"><a href="pages/logo-p-p.html">登陆</a></span>')
        }
    }
} 

