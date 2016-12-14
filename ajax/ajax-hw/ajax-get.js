/**
 * Created by Administrator on 2016/4/15.
 */
function ajax(url,data,fnSucc,fnFaild){


    /*1创建对象-----并兼容ie*/
    var oAjax = null;
    if(window.XMLHttpRequest){
        oAjax = new XMLHttpRequest();
    }else{
        /*ie*/
        oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    /*2链接服务器*/
    oAjax.open("get",url+"?"+data,true);

    /*3发生请求     参数数据怎么办*/
    oAjax.send(data);

    /*4监听请求的进度*/
    oAjax.onreadystatechange=function(){
        if(oAjax.readyState==4){
            /*ajax请求完成了*/
            if(oAjax.status==200){
                /*服务器给你返回了，你想要的数据*/
                fnSucc(oAjax.responseText)

            }else{
                /*服务器没给你返回了，你想要的数据*/
                fnFaild(oAjax.status)

            }

        }
    }

}