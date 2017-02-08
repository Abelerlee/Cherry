/**
 * Created by hasee on 2016/6/15.
 */



var fnBase={
    setUserId:function(username){

        if(localStorage.getItem("rememberPW")=="true"){
            localStorage.setItem("userID",username)
        }else {
            sessionStorage.setItem("userID",username)
        }
    },
    getUserId:function(){
        var uId = sessionStorage.getItem("userID") || localStorage.getItem("userID")

        /*判断有没有获取的用户ui，若果没有的话，就跳转到login页面*/
        if(uId){
            return uId
        }else {
            window.location.href = "login.html"
        }

    },
    getTime: function(nS){//时间戳转换
        var val = parseInt(nS)>10000000000?parseInt(nS):parseInt(nS)*1000
        var time =  new Date(val)
        var oY = time.getFullYear();
        var oM = time.getMonth()+1;
        var oD = time.getDate();

        var str = oY+"-"+(oM>9?oM:"0"+oM)+"-"+(oD>9?oD:"0"+oD);
        return str;
        //120393453945934
        //2016-06-17
    },
    myalert:function(){

    },
    request: function(name){
        /*用来获取url里面的参数*/
        /*可能存在中文乱码，？如何解决？可以参考cookie的方法*/
        var url = window.location.href;
        if(url){
            var valArray = url.split("?")[1];
            if(valArray && valArray.length >0){
                var valArr = valArray.split("&");
                if(valArr && valArr.length > 0){
                    for(var i in valArr){
                        if(valArr[i].split("=")[0] == name){
                            return valArr[i].split("=")[1];
                        }
                    }
                }
            }
        }
    },
    //乘法计算
    accMul:function(arg1, arg2) {
        var m = 0,
            s1 = arg1.toString(),
            s2 = arg2.toString();
        try {
            m += s1.split(".")[1].length
        } catch (e) {}

        try {
            m += s2.split(".")[1].length
        } catch (e) {}

        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)

    },
    //加法计算
    accAdd:function (arg1, arg2) {
        var r1, r2, m, c;
        try {
            r1 = arg1.toString().split(".")[1].length
        } catch (e) {
            r1 = 0
        }

        try {
            r2 = arg2.toString().split(".")[1].length
        } catch (e) {
            r2 = 0
        }

        c = Math.abs(r1 - r2);
        m = Math.pow(10, Math.max(r1, r2))
        if (c > 0) {
            var cm = Math.pow(10, c);
            if (r1 > r2) {
                arg1 = Number(arg1.toString().replace(".", ""));
                arg2 = Number(arg2.toString().replace(".", "")) * cm;
            } else {
                arg1 = Number(arg1.toString().replace(".", "")) * cm;
                arg2 = Number(arg2.toString().replace(".", ""));
            }
        } else {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", ""));
        }
        return (arg1 + arg2) / m
    },
    itemRemove:function(obj,fn){
        obj.height(obj.height())
        obj.addClass('itemRemove');

        obj.on('animationend',function(){
            fn && fn()
        })
    }

}

