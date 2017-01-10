for (var i = 0; i < 3; i++) {
   setTimeout(function (){
        console.log(i);
        alert("time"+i);
   }, 100)
};


// settimeout 
// setTimeout( ) 是属于 window 的 method, 但我们都是略去 window 这顶层物件名称, 这是用来设定一个时间, 时间到了, 就会执行一个指定的 method。请先看以下一个简单, 这是没有实际用途的例子, 只是用来示范 setTimeout( ) 的语法。