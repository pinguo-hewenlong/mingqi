var quan;
window.onload=function(){
     islogin();
     var GG = {
       "kk":function(mm){
//console.log(1111);
       }
   }
$("#page").initPage(71,1,GG.kk);
 var  postData="";
 AjaxPost('index.php/cuser/profile/getpost',postData,succCallback,errorCallback,"post","json");
 function succCallback(){
    //alert("5555")
 }
 function errorCallback(date){
   //alert("给老子滚");
   var timestamp = Math.round(new Date() / 1000)
   //alert(timestamp)
   $("#vaite-conent").empty()
        $.each(date,function(n,obj){
             var days=timestamp-obj.begintime;
             var thimes=obj.begintime;
             var  thedays = Math.ceil(days/ 60 / 60 / 24);
             //console.log(thedays);
             function getLocalTime(nS) {     
                return a=new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
            }
            getLocalTime(thimes);
			var html	=	    '<div class="first-job">'+
                                '<div class="first-job-title">'+
                                '<div>'+
                                '<span class="job-podtions">'+obj.title+
                                '</span>'+
                                '</div>'+
                                '<div class="company-name">'+
                                '</div>'+
                                '</div>'+
                                '<div class="first-job-title first-job-section">'+
                                '<div>'+
                                '<span class="salary">'+
                                obj.city+
                                '</span>'+
                                '<span>'+'经验'+obj.workexp+'年/'+obj.eduction+
                                '</span>'+
                                '<span>'+
                                obj.salary+
                                '</span>'+
                                '</div>'+
                                '<div class="company-name first-job-section-text">'+
                                thedays+'天前发布'+
                                '</div>'+
                                '</div>'+
                                '<div class=" job-first-text job-first-text2">'+
                                '<div class="little-text">'+
                                '<span>'+
                                '在线'+thedays+'天'+
                                '</span>'+
                                '<span>'+
                                a+'发布'+
                                '</span>'+
                                '</div>'+
                                '</div>'+
                                '<div class="delet">'+
                                '删除'+
                                '</div>'+
                                '</div>';
	  		
	  		$("#vaite-conent").append(html);
              $(".delet").click(function(){
	//    console.log(11111);
             $(this).parent().remove()
         })
        });
 }
}
$(".nominate").bind('click',function(){
    $("#release-job").toggleClass("release-job");
})
$(".quxiao").bind('click',function(){
    $("#release-job").toggleClass("release-job")
});

$("#fabu-position").bind('click',function(){
    var x;
    // alert("11111")
    //var postData={"$('#position-form')":seriailize()}
    var postData={"title":$("#position-title").val(),"content":$('#position-maioshu').val(),"city":$("#position-city").val(),"workexp":$("#workexp").val(),"eduction":$("#eduction").val(),"salary":$("#salary").val(),"qc":$("#qc").val()};
    AjaxPost('index.php/cuser/profile/setpost',postData,succCallback,errorCallback,"post","json");
       //alert("11111")
    function succCallback(data){
       alert("1111")
    }
    function errorCallback(data){
       alert("5555")
         var y=9;
         x=y;
         console.log(x)
        return y;

      // $.each(data,function(n,obj){
        //   var postData=""
        //   AjaxPost('index.php/cuser/profile/getpost',postData,succCallback,errorCallback,"post","json");
        //   function succCallback(data){
        //    $.each(function(n,data){
		// 	var html	=	    '<div class="first-job">'+
        //                         '<div class="first-job-title">'+
        //                         '<div>'+
        //                         '<span class="job-podtions">'+'ui设计师'+
        //                         '</span>'+
        //                         '</div>'+
        //                         '<div class="company-name">'+
        //                         '</div>'+
        //                         '</div>'+
        //                         '<div class="first-job-title first-job-section">'+
        //                         '<div>'+
        //                         '<span class="salary">'+
        //                         '成都 锦江区'+
        //                         '</span>'+
        //                         '<span>'+'经验3-5年/本科'+
        //                         '</span>'+
        //                         '<span>'+
        //                         '3-6k'+
        //                         '</span>'+
        //                         '</div>'+
        //                         '<div class="company-name first-job-section-text">'+
        //                         '12天前发布'+
        //                         '</div>'+
        //                         '</div>'+
        //                         '<div class=" job-first-text job-first-text2">'+
        //                         '<div class="little-text">'+
        //                         '<span>'+
        //                         '在线2天'+
        //                         '</span>'+
        //                         '<span>'+
        //                         '2017-12-25发布'+
        //                         '</span>'+
        //                         '</div>'+
        //                         '<div class="delet">'+
        //                         '删除'+
        //                         '</div>'+
        //                         '</div>'+
        //                         '</div>';
	  		
	  	// 	$("#vaite-conent").append(html);
			
		// })
        // }
	}
     //console.log(x);
          var postData2= ""
          AjaxPost('index.php/cuser/profile/getpost',postData2,succCallback,errorCallback,"post","json");
          function succCallback(data){
        //    alert("1111")
      }
        function errorCallback(data){
            
        // var maxId=eval(jsonArray)[eval(jsonArray).length-1]["id"]; 
        // console.log(maxId)
            //$("#vaite-conent").empty()
             //$.each(data,function(n,obj){
                //  var jsons=eval(data);
                //  //console.log(jsons)
                //  console.log(jsons[jsons.length-1]);
                //  console.log(jsons[jsons.length-1].title)
			// var html	=	    '<div class="first-job">'+
            //                     '<div class="first-job-title">'+
            //                     '<div>'+
            //                     '<span class="job-podtions">'+jsons[jsons.length-1].title+
            //                     '</span>'+
            //                     '</div>'+
            //                     '<div class="company-name">'+
            //                     '</div>'+
            //                     '</div>'+
            //                     '<div class="first-job-title first-job-section">'+
            //                     '<div>'+
            //                     '<span class="salary">'+
            //                     '成都 锦江区'+
            //                     '</span>'+
            //                     '<span>'+'经验3-5年/本科'+
            //                     '</span>'+
            //                     '<span>'+
            //                     '3-6k'+
            //                     '</span>'+
            //                     '</div>'+
            //                     '<div class="company-name first-job-section-text">'+
            //                     '12天前发布'+
            //                     '</div>'+
            //                     '</div>'+
            //                     '<div class=" job-first-text job-first-text2">'+
            //                     '<div class="little-text">'+
            //                     '<span>'+
            //                     '在线2天'+
            //                     '</span>'+
            //                     '<span>'+
            //                     '2017-12-25发布'+
            //                     '</span>'+
            //                     '</div>'+
            //                     '<div class="delet">'+
            //                     '删除'+
            //                     '</div>'+
            //                     '</div>'+
            //                     '</div>';
	  		
	  		// $("#vaite-conent").append(html);
			
		 //})
        }
        // }
})