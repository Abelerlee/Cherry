/**
 * Created by hasee on 2016/4/13.
 */


/*通过id获取元素*/
function $(str){
    return  document.getElementById(str);
    /*把获取到的元素返回出来*/
}


/*通过class获取元素*/
function getClass(str,obj){

    /*创建一个检测包含独立的str的正则表达式*/
    var re =  new RegExp("\\b"+str+"\\b");
    /*再obj下面找到所有的标签*/
    obj = obj||document;
    var arr = obj.getElementsByTagName("*");
    /*创建一个新的数组*/
    var elements = [];
    /*循环数组的每一项*/
    for(var i=0;i<arr.length;i++){
        if(arr[i].className.search(re)!=-1){
            /*如果符合正则的要求就，把这个元素添加在elements数组里面*/
            elements.push(arr[i])
        }
    }
    /*返回所有 包含className是 str的元素*/
    return elements

}

/*获取css样式*/
function getStyle(obj,attr){//获取css样式
    if(obj.currentStyle){//ie
        return obj.currentStyle[attr];
    }
    else{
        return window.getComputedStyle(obj,null)[attr];
    }
}