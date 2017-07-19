var http = require('http');  
  
var qs = require('querystring');  
   
  
var options = {  
    hostname: 'localhost',  
    port: 80,
    path: 'index.php?m=Home&c=Main&a=everyday_business_update',  
    method: 'GET'  
};  
 setInterval(function(){
	 var date=new Date();
		var h=date.getHours();
		var m=date.getMinutes();
		var s=date.getSeconds();
		if(h==1&&m==0&s==0){
			 var req = http.request(options, function (res) {  
				//console.log('STATUS: ' + res.statusCode);  
				//console.log('HEADERS: ' + JSON.stringify(res.headers));  
				res.setEncoding('utf8');  
				res.on('data', function (chunk) {  
					console.log('BODY: ' + chunk);  
				});  
			});  
			  
			req.on('error', function (e) {  
				console.log('problem with request: ' + e.message);  
			});  
			  
			req.end();
																	  
		}
      
 },1000);
 