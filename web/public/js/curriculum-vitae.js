
$(".t-btn").onclick=function(){//添加点击事件
//console.log(11111)
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
     islogin();
     var poids=new Array();
     var counts;
    // 获取职位id
    var postData="";
    AjaxPost('index.php/cuser/profile/getpost',postData,succCallback,errorCallback,"post","json");
    function succCallback(data){
     alert("111111")
    }
    function errorCallback(data){
        $.each(data,function(n,obj){
            var html= '<option value="'+obj.poid+'">'+obj.title +'</option>' ;
            $("#job-category").append(html);
            let poidss=obj.poid;
            poids[n]=poidss;
            return poidss;
        })
        //获取简历信息 
                var postData2={"poid":poids[0],"page":1,"perpage":5};
                AjaxPost('index.php/inner/Resume/resumeList',postData2,succCallback,errorCallback,"post","json");
                 function succCallback(data2){
                  //console.log(data2.count); 
                    var datas=data2.data;
                    //console.log(datas[0].uid);
                    $.each(datas,function(i,obj){
                        if(obj.uInfo.arrival==0){
                            obj.uInfo.arrival="目前我已离职，可快速到岗"
                        }
                        else if(obj.uInfo.arrival==1){
                            obj.uInfo.arrival="目前我正在职，正考虑换个环境"
                        } else if(obj.uInfo.arrival==2){
                            obj.uInfo.arrival="我暂时不想找工作"
                        }else if(obj.uInfo.arrival==3){
                            obj.uInfo.arrival="我是应届毕业生"
                        }
                        if(obj.uInfo.thumburl==undefined){
                        $(".v-circle").empty()  
                    } 
                     //console.log(obj.uid); 
                        var html='<div class="first-vconent">'+
                                        '<div class="v-heade">'+
                                            '<div class="v-circle"><img src="http://127.0.0.1/mingqi/public/uploads/'+obj.uInfo.thumburl+'"/></div>'+
                                            '<div class="v-heade-text">'+obj.uInfo.expect_salary+'k'+'</div>'+
                                        '</div>'+
                                        '<div class="vaite-text">'+
                                                '<div class="v-imformation">'+
                                                    '<div id="name">'+obj.uInfo.realname+'</div>'+
                                                    '<div>'+'期望职位'+obj.uInfo.expect_name+'</div>'+
                                                    '<div>'+obj.uInfo.city+'</div>'+
                                                '</div>'+
                                                '<div class="v-imformation">'+
                                                    '<div>'+'曾在'+obj.uInfo.company+'</div>'+
                                                    '<div>'+'任职'+obj.uInfo.position+'</div>'+
                                                    '<div>'+obj.uInfo.expAge+'年.'  +obj.uInfo.eduction+'</div>'+
                                                '</div>'+
                                                '<div class="v-imformation">'+
                                                    '<div>'+obj.uInfo.school+'</div>'+
                                                    '<div>'+obj.uInfo.major+'</div>'+
                                                    '<div>'+obj.uInfo.arrival+'</div>'+
                                                '</div>'+
                                        '</div>'+
                                        '<div class="v-line"></div>'+
                                        '<div class="three-btn">'+
                                        '<form id="three-btns"><div class="t-btn">不合适<input type="radio" value="0"  class="t-btn" name="'+obj.uid+'"></div>'+
                                        '<div class="t-btn">邀面试<input type="radio" value="1"  class="t-btn" name="'+obj.uid+'"></div>'+
                                        '<div class="t-btn">已查看<input type="radio" value="2"  class="t-btn" name="'+obj.uid+'"></div>'+
                                        '</form>'+
                                        '</div>'+
                                    '</div>'
                                    $("#vaite-conent").append(html);
                                    $("#three-btns>div>input").change(function(){
                                        $("input[name='"+obj.uid+"']:checked").parent().addClass("active").siblings().removeClass("active");
                                        var status;
                                        if($("input[name='"+obj.uid+"']:checked").val()==0){
                                            status=0
                                        }else if($("input[name='"+obj.uid+"']:checked").val()==1){
                                        status=1
                                        }else if($("input[name='"+obj.uid+"']:checked").val()==2){
                                            status=2
                                        }
                                        var uids=$("input[name='"+obj.uid+"']:checked").attr("name");
                                        //console.log(uids);
                                        //console.log("status"+status)
                                        var feedbacktime = Date.parse(new Date());
                                        //console.log(obj.uInfo.uid)
                                        var postData4={"poid":poids[0],"feedbacktime":feedbacktime,"status":status,"uid":uids};
                                        AjaxPost('index.php/cuser/Resume/feedback',postData4,succCallback,errorCallback,"post","json");
                                        function succCallback(data4){
                                        //alert(11111)
                                        }
                                        function errorCallback(data4){
                                        //alert(222);
                                        //console.log(obj.uid)
                                        }
                                    });
                                   
                    })
                    
                    // 分页
                    let countss=data2.count;
                    counts=countss
                    //console.log(counts); 
                    //return countss;
                        var GG = {
                            "kk":function(mm){
                              listCount=counts*5
                            }
                        }
                        $("#page").initPage(71,1,GG.kk);
                 }
                function errorCallback(data2){
                  alert("222222")
                }
               
    }    
}
 //根据职位类别获取简历信息
$("#job-category").change(function(){
    //var postData=$('#job-category option:selected').val();
    var postData3={"poid":$('#job-category option:selected').val(),"page":1,"perpage":5};
            AjaxPost('index.php/inner/Resume/resumeList',postData3,succCallback,errorCallback,"post","json");
            function succCallback(data3){
            //console.log(data2.count); 
                var datas=data3.data;
                    $("#vaite-conent").empty()  ;
                $.each(datas,function(i,obj){
                    if(obj.uInfo.arrival==0){
                        obj.uInfo.arrival="目前我已离职，可快速到岗"
                    }
                    else if(obj.uInfo.arrival==1){
                        obj.uInfo.arrival="目前我正在职，正考虑换个环境"
                    } else if(obj.uInfo.arrival==2){
                        obj.uInfo.arrival="我暂时不想找工作"
                    }else if(obj.uInfo.arrival==3){
                        obj.uInfo.arrival="我是应届毕业生"
                    }
                    if(obj.uInfo.thumburl==undefined){
                    $(".v-circle").empty()    
                    } 
                    var html='<div class="first-vconent">'+
                                    '<div class="v-heade">'+
                                        '<div class="v-circle"><img src="http://127.0.0.1/mingqi/public/uploads/'+obj.uInfo.thumburl+'"/></div>'+
                                        '<div class="v-heade-text">'+obj.uInfo.expect_salary+'k'+'</div>'+
                                    '</div>'+
                                    '<div class="vaite-text">'+
                                            '<div class="v-imformation">'+
                                                '<div id="name">'+obj.uInfo.realname+'</div>'+
                                                '<div>'+'期望职位'+obj.uInfo.expect_name+'</div>'+
                                                '<div>'+obj.uInfo.city+'</div>'+
                                            '</div>'+
                                            '<div class="v-imformation">'+
                                                '<div>'+'曾在'+obj.uInfo.company+'</div>'+
                                                '<div>'+'任职'+obj.uInfo.position+'</div>'+
                                                '<div>'+obj.uInfo.expAge+'年.'  +obj.uInfo.eduction+'</div>'+
                                            '</div>'+
                                            '<div class="v-imformation">'+
                                                '<div>'+obj.uInfo.school+'</div>'+
                                                '<div>'+obj.uInfo.major+'</div>'+
                                                '<div>'+obj.uInfo.arrival+'</div>'+
                                            '</div>'+
                                    '</div>'+
                                    '<div class="v-line"></div>'+
                                    '<div class="three-btn">'+
                                        '<form id="three-btns"><div class="t-btn">不合适<input type="radio" value="0"  class="t-btn" name="'+obj.uid+'"></div>'+
                                        '<div class="t-btn">邀面试<input type="radio" value="1"  class="t-btn" name="'+obj.uid+'"></div>'+
                                        '<div class="t-btn">已查看<input type="radio" value="2"  class="t-btn" name="'+obj.uid+'"></div>'+
                                        '</form>'+
                                    '</div>'+
                                '</div>'
                                $("#vaite-conent").append(html)
                                $("#three-btns>div>input").change(function(){
                                        $("input[name='"+obj.uid+"']:checked").parent().addClass("active").siblings().removeClass("active");
                                        var status;
                                        if($("input[name='"+obj.uid+"']:checked").val()==0){
                                            status=0
                                        }else if($("input[name='"+obj.uid+"']:checked").val()==1){
                                        status=1
                                        }else if($("input[name='"+obj.uid+"']:checked").val()==2){
                                            status=2
                                        }
                                        var uids=$("input[name='"+obj.uid+"']:checked").attr("name");
                                        //console.log(uids);
                                        //console.log("status"+status)
                                        var feedbacktime = Date.parse(new Date());
                                        //console.log(obj.uInfo.uid)
                                        var postData4={"poid":$('#job-category option:selected').val(),"feedbacktime":feedbacktime,"status":status,"uid":uids};
                                        AjaxPost('index.php/cuser/Resume/feedback',postData4,succCallback,errorCallback,"post","json");
                                        function succCallback(data4){
                                        //alert(11111)
                                        }
                                        function errorCallback(data4){ 
                                        }
                                    });
                })
                // 分页
                let countss=data3.count;
                counts=countss
                //console.log(counts); 
                //return countss;
                    var GG = {
                        "kk":function(mm){
                        listCount=counts*5
                        }
                    }
                    $("#page").initPage(71,1,GG.kk);
            }
            function errorCallback(data3){
            alert("222222")
            }
})

