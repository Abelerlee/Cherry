var a = {name: "zhangliguo",age: "18"};
var b = a;
b.name = "good good study,day day up";
console.log(a); //{name: "good good study,day day up",age: "18"}
console.log(b); //{name: "good good study,day day up",age: "18"}
console.log(a.name); // good good study,day day up

var javascript =  "JavaScript中数据的变化，深拷贝浅拷贝的理解"