在JavaScript中this的指向一直是一个非常让人脑袋大的事情，本文就归纳总结一下这个神秘而贴近的this
1 this指向直接调用函数的物件
        <input type='text' name = 'this' value = 'this' onclick='foo()' />
        var foo  = function(){
            console.log('this');
        }
2 this指向全局物件（浏览器中：window；nodejs：golbal对象）
        var x = 30;
        var obj = {
            x: 20,
            f: function(){
                console.log(this.x); //this指向的是obj,属于第一种情况
            }
        }
        obj.f(); //20
        var foo = function(){
            console.log(this.x); //thi是指向的是window
        }
        foo(); //30