
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


$(document).ready(function(){
	

	//判断是否登录
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/mingqiyoucai/index.php/index/base",
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
	
	//查询随机职位
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/mingqiyoucai/index.php/index/index/getLatestPosition",
		async:true,
		success:function(data)
		{
			
			
			$.each(data, function(n,obj) {				

					var html;
					var begintime	=	new Date();
					begintime.setTime(obj.begintime*1000);
					begintime = begintime.Format("hh:mm");
				
					
					$.ajax({
						type:"get",
						url:"http://127.0.0.1/mingqiyoucai/index.php/index/index/getCompanyByPosition",
						async:false,
						data:{'uid':obj.uid},
						success:function(data)
						{
								obj.companyname=data.companyname;
								obj.nature	=	data.nature;
								obj.scale	=	data.scale;
								console.log(obj.scale);
						},
					});
					
					console.log(obj.scale)
					
					html ='<div class="jobs-first">'+
                    '<div class="job-first-text">'+
                        '<div><span>'+obj.title+'</span><span>【成都】</span><span>'+begintime+'发布</span></div>'+
                          '<div class="job-com">'+obj.companyname+'</div>'+
                              '</div>'+
                                  '<div class="job-first-text job-first-text2">'+
                                     '<div>'+
                                        '<span class="jobs-money">'+obj.salary+'</span>'+
                                        '<span>'+obj.workexp+'/'+obj.eduction+'</span>'+
                                        '</div>'+
                                    '<div>'+
                                        ''+obj.nature+'/'+obj.scale+'）'+
                                    '</div>'+
                                '</div>'+
                                '<div class="job-first-text job-first-text2">'+
                                    '<div class="little-text">'+
                                        '<span>中级</span>'+
                                        '<span>web</span>'+
                                        '<span>软件开发</span>'+
                                    '</div>'+
                                    '<div>"'+obj.content+'"</div>'+
                                '</div>'+
                            '</div>';
        $('#jobs').append(html);                   
			});;
		}
	});
	
	
	
	$('<ul id="fuzzySearch"></ul>').hide().insertAfter("#search-input");
	
	$('#search-input').bind('input propertychange',function(){
		fuzzySearch();
	});
	
	function fuzzySearch()
	{
		$('#fuzzySearch').empty();
		
		var word;
		word =	$('#search-input').val();	
		
		
		$.ajax({
			type:'get',
			url:'http://127.0.0.1/mingqiyoucai/index.php/search',
			data:{'word':word},
			async:true,
			success:function(data)
			{
				$('#fuzzySearch').show();
				var html	=	'';
				$.each(data,function(n,obj){
					
					html	=	'<li><span class="li-des">'+obj.des+'</span><span class="li-span">共<span class="li-num">50</span>个职位</span></li>';
					
					$('#fuzzySearch').append(html);
					
					$('#fuzzySearch>li').click(function(){
						$('#search-input').val($(this).find('.li-des').text());
					});
				
				})
			},
		});
		
	}
	
});


$('#search-btn').bind('click',function(){
	window.location.href	=	'pages/search.html'	
})






Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}



