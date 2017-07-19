<?php

namespace	app\index\controller;
use think\Session;

class Base

{
	public function index()
	{
		if(Session::has('UID') == 1)
		{
			$return['status']	= 1;
			$return['message']	=	'success Login';
			
			if(request()->isAjax())
			{
				return $return;
			}
			else
			{
				return json($return);
			}
			
		}
		else
		{
			$return['status']	= 0;
			$return['message']	=	'success noLogin';
			
			if(request()->isAjax())
			{
				return $return;
			}
			else
			{
				return json($return);
			}			
			
		}
	}	
}