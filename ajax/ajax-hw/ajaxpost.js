// JavaScript Document
  function ajax(url,data,fnSucc,fnFaild){
       var oAjax=null;
	//设置兼容
	if(window.XMLHttpRequest){
		oAjax=new XMLHttpRequest();
		}else{
			oAjax=new ActiveXObject("Microsof.XMLHTTP");
			};
   //连接服务器
   oAjax.open("post",url,true);
   oAjax.setRequestHeader('content-type', 'application/x-www-form-urlencoded')

   
   //发送请求
   oAjax.send(data);
   //监听事件进度
   oAjax.onreadystatechange=function(){
	   if(oAjax.readyState==4){
		   if(oAjax.status==200){
			   fnSucc(oAjax.responseText);
			   }else{
				   if(fnFaild)
			   fnFaild(oAjax.status);
				   }
		   }
	   };
}