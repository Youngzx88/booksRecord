const fun = function(){
  var a = 1;
  return function() {
    console.log(a++)
  }
}
var f = fun();
f();//1
f();//2
f();//3
f();//4
f();//5
fun()();//1
fun()();//1
fun()();//1