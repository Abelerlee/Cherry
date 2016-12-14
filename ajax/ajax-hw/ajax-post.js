function ajax (url,data, fnSucc, fnFaild)
{
	//1.创建ajax对象
	var oAjax=null;
	
	if(window.XMLHttpRequest)
	{
		oAjax=new XMLHttpRequest();
	}
	else
	{
		oAjax=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	//2.连接服务器
	//open(方法, url, 是否异步)
	oAjax.open('post', url, true);
	//get的数据参数在url里面

	
	//3.发送请求

	/*post方式的数据参数是单独提交的*/
	oAjax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
	/*请求头信息*/
	/*一般来说，向服务器发送POST请求由于解析机制的原因，需要进行特别的处理。因为POST请求和Web表单提交是不同的，需要使用XHR来模仿表单提交。
	 oAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');*/
	oAjax.send(data);


	//4.接收返回
	//OnReadyStateChange
	oAjax.onreadystatechange=function ()
	{
		if(oAjax.readyState==4)/*数据响应完成*/
		{
			if(oAjax.status==200)/*响应完成以后，返回了咱们想要的结果*/
			{
				//alert('成功：'+oAjax.responseText);
				fnSucc(oAjax.responseText);
			}
			else/*没有返回了咱们想要的结果*/
			{
				if(fnFaild)
				{
					fnFaild();
				}
			}
		}
	};
}