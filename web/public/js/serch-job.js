// 初始化分页
//var GG = {
//        "kk":function(mm){
//            console.log(1111);
//        }
//    }
//$("#page").initPage(71,1,GG.kk);
console.log($.cookie('search_res'));
if($.cookie('search_res') == '') {
    $("#search_res").html('无搜索结果');
} else {
    $("#search_res").innerHTMLhtml('有结果');
}
$("#search-btn").click(function(){
    var data=new Array();
    data=$("#search-input").val()==''?'web':$("#search-input").val();
        $.get("http://127.0.0.1/mingqi/index.php/search/index/byword?word="+data, function(result){

        });
});