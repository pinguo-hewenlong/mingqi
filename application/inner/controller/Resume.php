<?php
	
namespace app\inner\controller;

class Resume extends Base
{
	public function __construct()
	{
		parent::__construct();			
	}
	//简历列表
	public function resumeList(){
		//职位id
		$poid    = request()->post('poid');
		//分页页码
		$page    = request()->post('page');
		//每页条数
		$perpage = request()->post('perpage');
		//开始查询的游标
		$start   = ($page - 1) * $perpage;
		//获取已投递简历总条数
		$total   =	db('puser_resumesend')  ->where('poid',$poid)
											->count();
		//计算总页数
		$count   = ceil($total/$perpage);
		//根据职位id 查询已投递的简历
		$dbData  =	db('puser_resumesend') ->where('poid',$poid)
			    ->order('sendtime desc')
				->limit($start,$perpage)
				->select();
		//var_dump($dbData);exit;
		//查询有结果
		if ($dbData) {
			//循环查询个人简历情况
			foreach ($dbData as $id => $value) {
				$uid    = $value['uid'];
				//查询个人信息 userinfo
				$uInfo  =	db('puser_info') ->where('uid',$uid)
						->find();
						// if($uid!=15){var_dump($uInfo,$uid);}
				if ($uInfo) {
					$dbData[$id]['uInfo']['thumburl'] = $uInfo['thumburl'];
					$dbData[$id]['uInfo']['realname'] = $uInfo['realname'];
					$dbData[$id]['uInfo']['eduction'] = $uInfo['eduction'];
					$dbData[$id]['uInfo']['city'] = $uInfo['city'];
					$dbData[$id]['uInfo']['city'] = $uInfo['city'];
				}
				//查询期望工作信息
				$expire = db('puser_expectwork') ->where('uid',$uid)
						->find();
				if ($expire) {
					$dbData[$id]['uInfo']['expect_name'] = $expire['pname'];
					$dbData[$id]['uInfo']['expect_salary'] = $expire['salary'];
				}
				//查询学历信息
				$edu = db('puser_edu') ->where('uid',$uid)
						->order('endtime desc')
						->limit(0,1)
						->select();
//				 print_r($edu);exit;
				if ($edu) {
					$dbData[$id]['uInfo']['school'] = $edu[0]['school'];
					$dbData[$id]['uInfo']['major'] = $edu[0]['major'];
				}
				//查询工作经历
				$work = db('puser_work') ->where('uid',$uid)
						->order('endtime desc')
						->select();
//				print_r($work);exit;
				if ($work) {
					//计算工作年限 （当前时间 -第一份工作时间）/一年的秒数  向下取整
					$dbData[$id]['uInfo']['expAge'] = floor((time() - $work[count($work)-1]['begintime'])/31536000);
					$dbData[$id]['uInfo']['company'] = $work[0]['company'];
					$dbData[$id]['uInfo']['position'] = $work[0]['position'];
				}
				//查询到岗时间
				$arrival = db('puser_arrival') ->where('uid',$uid)
						->find();
//				print_r($arrival);exit;
				if ($arrival) {
					$dbData[$id]['uInfo']['arrival'] = $arrival['time'];
				}

			}
			//unset($dbData[0]);
			$return['status']	=	1;
			$return['message']	=	'获取简历列表成功';
			$return['count']	=	$count;
			$return['data']     =   $dbData;
			return json($return);
		}else {
			//查询无结果 返回空数组
			$return['status']	=	1;
			$return['message']	=	'获取简历列表成功';
			$return['count']	=	$count;
			$return['data']     =   array();
			return json($return);
		}
	}
	
	//简历投递
	public function resumeSend()
	{
		//个人用户uid
		$data['uid']		=	request()->post('uid');
		//投递的职位id
		$data['poid']		=	request()->post('poid');
		//投递时间
		$data['sendtime']	=	request()->post('sendtime');
		//反馈状态
		$data['status']		=	0;
		
		$request	=	db('puser_resumesend')->insert($data);
		
		if($request == 1)
		{
			$return['status']	=	1;
			$return['message']	=	'职位申请成功';
			return json($return);
		}
		else
		{
			$return['status']	=	0;
			$return['message']	=	'职位申请失败';
			return json($return);
		}
		
	}
	//简历反馈
	public function resumeFeedback()
	{
		//个人用户uid
		$data['uid']			=	request()->post('userid');
		//投递的职位id
		$data['poid']			=	request()->post('poid');
		//投递时间
		$data['feedbacktime']	=	request()->post('feedbacktime');
		//反馈状态
		$data['status']			=	request()->post('status');
		$request	=	db('puser_resumesend')->where('uid', $data['uid'])
											  ->where('poid',$data['poid'])
    										  ->update(['status' => $data['status'],'feedbacktime'=>$data['feedbacktime']]);
		// var_dump($request);exit;
		if($request == 1)
		{
			$return['status']	=	1;
			$return['message']	=	'职位申请成功';
			return json($return);
		}
		else
		{
			$return['status']	=	0;
			$return['message']	=	'职位申请失败';
			return json($return);
		}
		
	}	

}
