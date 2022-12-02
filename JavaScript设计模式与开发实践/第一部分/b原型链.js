
var obj = {name:'seven'}
var A = function() {}
A.prototype = obj
var a = new A();
console.log(a.name);//seven