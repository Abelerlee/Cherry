function $(objStr){return document.getElementById(objStr);}
window.onload = function(){
  //分析cookie值，显示上次的登陆信息
  var userNameValue = getCookieValue("userName");
   $("userName").value = userNameValue;
  var passwordValue = getCookieValue("password");
   $("password").value = passwordValue;  
  //写入点击事件
   $("submit").onclick = function()
   {
    var userNameValue = $("userName").value;
    var passwordValue = $("password").value;
    //服务器验证（模拟）  
    var isAdmin = userNameValue == "admin" && passwordValue =="123456";
    var isUserA = userNameValue == "userA" && passwordValue =="userA";
    var isMatched = isAdmin || isUserA;
    if(isMatched){
      if( $("saveCookie").checked){ 
         setCookie("userName",$("userName").value,24,"/");
         setCookie("password",$("password").value,24,"/");
       }  
       alert("登陆成功,欢迎你," + userNameValue + "!");
       self.location.replace("welcome.html");
     }
    else alert("用户名或密码错误，请重新输入！");  
   }
}