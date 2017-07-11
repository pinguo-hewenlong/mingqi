<?php
$config = array (	
		//应用ID,您的APPID。
		'app_id' => "2017061507497923",

		//商户私钥
		'merchant_private_key' => "MIIEpAIBAAKCAQEAwyI4n9fRk8PNkexy0M83ZESYolcyamcnCuR7gy/fv5toeWaSNGjgS1Z98wDt0RsQrj1SDm/sDcin8pHg3jXdDyMST0r40hJxXMaJmDft8n/9lbYfyjDQY+DWfrlgyQqzlVFG06MX2/ivfuBq67ZZ9FC/jHyZ4rSoKwqHTbbFZhM8FSMBu+idlr0Foaoww9dVm+AF+NpMDezgbvw//t4iM2fCw6j1cubRwEP8ZEjneS/jQVY14ErOQ8eRMv3/qfYJ+wvQSylm/QKMceOor/KQwj1f22S+hvidYUch6yINJjm33n2SP/aSGoGhEdv+xxF8IdlIPVbcpNCkIB9UOkesEwIDAQABAoIBADyTjhKJFCWUHmgTiB0shtyYsu2Ktjrz5NnrzjAOl55K52bwoaileiPJKPZcLnfAuC/vF18l/ZjV1tVl1fIFtKdzUsbM1muYkBqmA6b+jd6/PwDP9hR1jOvEq7HRaKtgqBlNjvg6ZDjEfe6cSnT8Ofavbpd1Quxu+tnJvfExMRybhrp7e4ljn3wpmvkXmH2w99dimSP5EXISzaswsSzVFViuARqa9Th3UhT1rTsFWy6g8CbtEIeCQcPYsPR2q/8IA8jUmt+0QrJqH3inSE+ffXXb7KTdpNM3FpocKHzH3J5W/SKma6Sot83hj2HH3XlUGFgSfkWTklroIRr4C2sHxkECgYEA89okAyw21nStvjLsF/DI+C7DVZ0bhcamRLIFQc7VFkOii3xnPV1pXOuMHbqVlNZf7ua/buR36Kcl+tCubheLnfEcRs6TXEFYqG1mSOVdbXEQH53VBBxYB2KDp/+R1k76ObLrV+sT45hsZqQZ72CFd5Y2tuK2GZTxTdXZ44w+crMCgYEAzNrFiljLBVVPEqakNN5DAVo0+t4NMuFJtP4AY0W815HCP8OgMarn3QoSrbGiCAG5VUgwosNEI9VMje0kpHZxlYOe1XItphYP0GDdPnxICoyqASb4r7kIX1HdRr8As2Jet73g8WzNFWD1xH9CABWuiXHEPERryeN2CvemVidvESECgYEA1XbOM6DO2GkHdwpotoRnySpWgGmpoC/HeTdFdtgynOzUK7rZPVS6WUcxPw0IyGPpUt7YEaEafqVjj+6B44nlBHv+vtUzFn11uOsbsRBn+tgQvzyRLqoJPV211qjY53v3e+7uKeZ1YLUbn7ZjpbMe4xKyDuLjef1yRyq/NHyeZhUCgYAeFSJdJpzps5VhD8edW+ZLFIwjKuiVSDAivAoiieMpZOY5puinYomaFBiaGTPKKTamJ2u8+x/Og0wyq1huLlaPtjxk69d4RFUeLJtQyb9qjS2J7ccnRuzL0qHD+diIfzGZmfCmg2u6b/qnWGjAym5PEL3Ye9O4WgbDpYpvrGrLAQKBgQDRBAqu+qfSM3RIhhe/iFk2kD3fRTtxTX6R9Px3ndlKkzlCHsxh87RORsrrxSCPhBHmPYkQcxF1aZuRO5Q6TT++fknfHKp2guPn4pZoaJQ4aQ5LNwZ5kJnE/cCIR/rsHEmKjk2vZ+7BorD6WOFwMP5NUR4kA5yCZNzCJKYSTDjtdQ==",
		
		//异步通知地址
		'notify_url' => "http://test.scmqyc.com/extend/alipaysdk/notify_url.php",
		
		//同步跳转
		'return_url' => "http://test.scmqyc.com/extend/alipaysdk/return_url.php",

		//编码格式
		'charset' => "UTF-8",

		//签名方式
		'sign_type'=>"RSA2",

		//支付宝网关
		'gatewayUrl' => "https://openapi.alipay.com/gateway.do",

		//支付宝公钥,查看地址：https://openhome.alipay.com/platform/keyManage.htm 对应APPID下的支付宝公钥。
		'alipay_public_key' => "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhjSso66OyuhJknXSLDD/1MdOb4IXRPwQk96sw1U7ps2JTpi4pQir8mjtzk9S41vNAE2wCiXUizNT6/ZvEs7HzNSuTnQuwqJ0mIHYr/GNSYn1ODTDz/0O1A18fyZWhu6M44nY1fPBFICeTa/RwKN5rYElWWtEkzOpNp7C+rsYdzNQMq0y/odhJg1ii3R3GMhVqHHNMLfaaPAAyu9Uf8ZmXUllT4YjPyiAL13IoiSC1cEd8KyNYC3vtVNFUX4hqPiorQ+a9sx+pSwWqoWFfOvWuPyfuBt5KE2y4tJE2VAcEWPOccP9ZIMIbXtGlceAYyUI6yRRJM6QNyA8R5eP5R8/wwIDAQAB",
);