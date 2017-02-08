/**
 * Created by hasee on 2016/6/13.
 */


var ReactBridge={
    reg:function(name,fn){
        if(this[name]) {
            console.warn(name+" is used");
            return
        }
        this[name] = fn
    },
    use:function(name,data){
        if(!this[name]) {
            console.warn(name+"is not defined");
            return
        }
        this[name](data)
    },
    regList:function(name,fn){
        name="ReactBridgeListFn"+name;
        this[name]||(this[name]=[]);
        this[name].push(fn)
    },
    useList:function(name,data){
        name="ReactBridgeListFn"+name;

        if(!this[name]) {
            console.warn(name+" is not defined");
            return
        }
        this[name].forEach(function(fn,i,fnList){
            fn(data)
            console.log(name+i);
        })
    }
};

//
//
//(function (){
//    var A = {
//        name:"A",
//        num:1,
//        changeNum:function(){
//            ReactBridge.regList("change",function(num){
//                this.num =num;
//                console.log(this)
//                console.log(this.name+"的num是："+this.num)
//            }.bind(this))
//        }
//    };
//    A.changeNum();
//
//})();
//
//
//(function (){
//    var X = {
//        name:"X",
//        num:1,
//        changeNum:function(){
//            ReactBridge.regList("change",function(num){
//                this.num =num;
//                console.log(this)
//                console.log(this.name+"的num是："+this.num)
//            }.bind(this))
//        }
//    };
//    X.changeNum();
//
//
//
//})();
//
//(function (){
//    var B = {
//
//
//    }
//    // B.changeNum(2)
//    ReactBridge.useList("change",20)
//})();
