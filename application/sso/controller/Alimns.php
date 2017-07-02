<?php
	
/*
 * 阿里云短信接口
 * 调用:Alimns->postMessage($phone),参数为手机号
 * 返回:成功返回包含状态，短信id，短信值的数组,失败返回错误信息
 */	
	

namespace app\sso\controller;

use think\Controller;

require_once(ROOT_PATH.'extend/alimns/mns-autoloader.php');

use AliyunMNS\Client;
use AliyunMNS\Topic;
use AliyunMNS\Constants;
use AliyunMNS\Model\MailAttributes;
use AliyunMNS\Model\SmsAttributes;
use AliyunMNS\Model\BatchSmsAttributes;
use AliyunMNS\Model\MessageAttributes;
use AliyunMNS\Exception\MnsException;
use AliyunMNS\Requests\PublishMessageRequest;
class Alimns
{
	private	$endPoint;
	private	$accessId;
	private $accessKey;
	private $topicName;
	private $smsSignName;
	private $smsTemplateCode;
	private $phone;
	
	public function __construct($phone)
	{
        $this->endPoint			= "http://1362692154639237.mns.cn-shenzhen.aliyuncs.com"; // eg. http://1234567890123456.mns.cn-shenzhen.aliyuncs.com
        $this->accessId			= "LTAIr1F87mcksAWX";
        $this->accessKey		= "KS9wAgkj88a6NC1XPw9NLmouCM24gG";
        $this->topicName		= "sms.topic-cn-shenzhen";
        $this->smsSignName		= "四川名企优才";
        $this->smsTemplateCode	= 'SMS_71155251';
        $this->phone			=	$phone;			
	}
	
	
    public function postMessage()
    {
        /**
         * Step 1. 初始化Client
         */
           
        $this->client = new Client($this->endPoint, $this->accessId, $this->accessKey);
        /**
         * Step 2. 获取主题引用
         */
        $topic = $this->client->getTopicRef($this->topicName); 
        /**
         * Step 3. 生成SMS消息属性
         */
        // 3.1 设置发送短信的签名（SMSSignName）和模板（SMSTemplateCode）
        $batchSmsAttributes = new BatchSmsAttributes($this->smsSignName, $this->smsTemplateCode);
        // 3.2 （如果在短信模板中定义了参数）指定短信模板中对应参数的值
        //生成验证码
        $msgCode	=	(string)(mt_rand(123456,987654));        
        $batchSmsAttributes->addReceiver($this->phone, array("name" => $msgCode));
        $messageAttributes = new MessageAttributes(array($batchSmsAttributes));
        /**
         * Step 4. 设置SMS消息体（必须）
         *
         * 注：目前暂时不支持消息内容为空，需要指定消息内容，不为空即可。
         */
         $messageBody = "smsmessage";
        /**
         * Step 5. 发布SMS消息
         */
        $request = new PublishMessageRequest($messageBody, $messageAttributes);
     
        try
        {
            $res = $topic->publishMessage($request);
            $return['status']		=	$res->isSucceed();
			$return['messageId']	=	$res->getMessageId();
			$return['msgCode']		=	$msgCode;
			return $return;
        }
        catch (MnsException $e)
        {
			return $e;
        }
    }
} 
