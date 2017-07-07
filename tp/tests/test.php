<?php
	session_start();
	$_SESSION['UID']	=	'1';	
?>	
<!doctype html>
<html>
	<head>
		<title>交互测试</title>
		<script src="http://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
	</head>
	<body>
		<div class="setInfo">
			<form id="setInfo">
				真实姓名<input type="text" name="realname">
				手机号<input type="text" name="phone">
				最高学历<input type="text" name="eduction">
				工作经验<input type="text" name="workexp">
				邮箱<input type="text" name="email">
				所在城市<input type="text" name="city">
				性别<input type="text" name="gender">										
			</form>
			<button id="setInfoBtn">设置个人信息</button>
		</div>	
	</body>
</html>
<script type="text/javascript">

	$('#setInfoBtn').bind('click',function(){
		$.ajax({
			type:'post',
			url:'http://127.0.0.1/mingqi/index.php/puser/profile/setinfo',
			data:'',
			dataType:'json',
			success:function(data){
				alert('OK');
			}
		});		
	})
</script>	
