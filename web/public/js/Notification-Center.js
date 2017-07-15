window.onload=function(){
    islogin();
    alllist();
}
function alllist(){
    var postData={"page":1,"perpage":5,"status":"all"};
    AjaxPost('index.php/puser/resume/getsendlist',postData,succCallback,errorCallback,"post","json");
    function succCallback(data){
    //  alert("111111")
    $("#all-numbers").text(data.count)
      var datalist=data.list;
      $.each(datalist,function(n,obj){
            var salary;
            var eduction;
            var workexp;
            var status;
            if(obj.salary==101){
               salary="3k以下"
            }else if(obj.salary==102){
                salary="4-8k"
            }else if(obj.salary==103){
              salary="8-10k"
            }else if(obj.salary==104){
                salary="10k以上"
            }
            if(obj.status==1){
                status="邀面试"
            }else if(obj.status==2){
                status="已查看"
            }else if(obj.status==3){
              status="不合适"
            }
              var html='<div class="first-conent the-one">'+
                                     '<div class="conent-heade"><img src="'+obj.thumburl+'" /></div>'+
                                     '<div class="conent-box">'+
                                         '<div class="position"> <span class="p-postin">'+obj.title+'</span> <span class="p-pay">('+salary+')</span></div>'+
                                         '<div>'+obj.companyname+'【成都】</div>'+
                                         '<div class="Rem-resume">'+
                                             '<div> 使用简历 ：在线简历</div>'+
                                             '<div class="p-postin">'+status+'</div>'+
                                         '</div>'+
                                     '</div>'+
                                 '</div>'
                $("#Rem-conent").append(html)
      })
    }
    function errorCallback(){
     //alert("2222222")
    }
}
$("#allist").bind('click',function(){
    alllist()
})
// 被查看
$("#Be-viewed").bind('click',function(){
    //console.log(3333)
    $(".number3").css({
        "display":"block"
    })
    var postData={"page":1,"perpage":5,"status":2};
    AjaxPost('index.php/puser/resume/getsendlist',postData,succCallback,errorCallback,"post","json");
    function succCallback(data){
    //  alert("111111")
    $("#be-numbers").text(data.count)
      var datalist=data.list;
      $("#Rem-conent").empty()
      $.each(datalist,function(n,obj){
            var salary;
            var eduction;
            var workexp;
            var status;
            if(obj.salary==101){
               salary="3k以下"
            }else if(obj.salary==102){
                salary="4-8k"
            }else if(obj.salary==103){
              salary="8-10k"
            }else if(obj.salary==104){
                salary="10k以上"
            }
            if(obj.status==1){
                status="邀面试"
            }else if(obj.status==2){
                status="已查看"
            }else if(obj.status==3){
              status="不合适"
            }
              var html='<div class="first-conent the-one">'+
                                     '<div class="conent-heade"><img src="'+obj.thumburl+'" /></div>'+
                                     '<div class="conent-box">'+
                                         '<div class="position"> <span class="p-postin">'+obj.title+'</span> <span class="p-pay">('+salary+')</span></div>'+
                                         '<div>'+obj.companyname+'【成都】</div>'+
                                         '<div class="Rem-resume">'+
                                             '<div> 使用简历 ：在线简历</div>'+
                                             '<div class="p-postin">'+status+'</div>'+
                                         '</div>'+
                                     '</div>'+
                                 '</div>'
                $("#Rem-conent").append(html)
      })
    }
    function errorCallback(){
     //alert("2222222")
    }
})
// 不合适
$("#Inappropriate").bind('click',function(){
     $(".number4").css({
        "display":"block"
    })
    var postData={"page":1,"perpage":5,"status":3};
    AjaxPost('index.php/puser/resume/getsendlist',postData,succCallback,errorCallback,"post","json");
    function succCallback(data){
    //  alert("111111")
    $("#in-numbers").text(data.count)
    $("#Rem-conent").empty()
      var datalist=data.list;
      $.each(datalist,function(n,obj){
            var salary;
            var eduction;
            var workexp;
            var status;
            if(obj.salary==101){
               salary="3k以下"
            }else if(obj.salary==102){
                salary="4-8k"
            }else if(obj.salary==103){
              salary="8-10k"
            }else if(obj.salary==104){
                salary="10k以上"
            }
            if(obj.status==1){
                status="邀面试"
            }else if(obj.status==2){
                status="已查看"
            }else if(obj.status==3){
              status="不合适"
            }
              var html='<div class="first-conent the-one">'+
                                     '<div class="conent-heade"><img src="'+obj.thumburl+'" /></div>'+
                                     '<div class="conent-box">'+
                                         '<div class="position"> <span class="p-postin">'+obj.title+'</span> <span class="p-pay">('+salary+')</span></div>'+
                                         '<div>'+obj.companyname+'【成都】</div>'+
                                         '<div class="Rem-resume">'+
                                             '<div> 使用简历 ：在线简历</div>'+
                                             '<div class="p-postin">'+status+'</div>'+
                                         '</div>'+
                                     '</div>'+
                                 '</div>'
                $("#Rem-conent").append(html)
      })
    }
    function errorCallback(){
     //alert("2222222")
    }
})
// 要面试
$("#an-audition").bind('click',function(){
     $(".number5").css({
        "display":"block"
    })
    var postData={"page":1,"perpage":5,"status":1};
    AjaxPost('index.php/puser/resume/getsendlist',postData,succCallback,errorCallback,"post","json");
    function succCallback(data){
    //  alert("111111")
    $("#an-numbers").text(data.count)
      var datalist=data.list;
       $("#Rem-conent").empty()
      $.each(datalist,function(n,obj){
            var salary;
            var eduction;
            var workexp;
            var status;
            if(obj.salary==101){
               salary="3k以下"
            }else if(obj.salary==102){
                salary="4-8k"
            }else if(obj.salary==103){
              salary="8-10k"
            }else if(obj.salary==104){
                salary="10k以上"
            }
            if(obj.status==1){
                status="邀面试"
            }else if(obj.status==2){
                status="已查看"
            }else if(obj.status==3){
              status="不合适"
            }
              var html='<div class="first-conent the-one">'+
                                     '<div class="conent-heade"><img src="'+obj.thumburl+'" /></div>'+
                                     '<div class="conent-box">'+
                                         '<div class="position"> <span class="p-postin">'+obj.title+'</span> <span class="p-pay">('+salary+')</span></div>'+
                                         '<div>'+obj.companyname+'【成都】</div>'+
                                         '<div class="Rem-resume">'+
                                             '<div> 使用简历 ：在线简历</div>'+
                                             '<div class="p-postin">'+status+'</div>'+
                                         '</div>'+
                                     '</div>'+
                                 '</div>'
                $("#Rem-conent").append(html)
      })
    }
    function errorCallback(){
     //alert("2222222")
    }
})