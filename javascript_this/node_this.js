var name = 'LiLi';

console.log(this.name); //nudefined

var foo = function() {
    var name = 'GoGo'
    console.log(name);
    console.log(this.name);
}

foo();//undefined