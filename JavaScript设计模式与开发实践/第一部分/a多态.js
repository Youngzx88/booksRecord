// 不使用多态
// class Dog {
// }
// class Cat {
// }
// var dahuang = new Dog;
// var xiaomi = new Cat;
// var shout = function(animal){
//     if(animal instanceof Dog){
//     console.log("汪汪汪")
//     }
//     if(animal instanceof Cat){
//     console.log("喵喵喵")
//     }
// }
// shout(dahuang)//汪汪汪
// shout(xiaomi)//喵喵喵

//使用多态
class Dog {
  shout = () =>{
    console.log("汪汪汪")
  }
}
class Cat {
  shout = () =>{
    console.log("喵喵喵")
  }
}
var dahuang = new Dog;
var xiaomi = new Cat;
var shout = function(animal){
  animal.shout();
}
shout(dahuang)//汪汪汪
shout(xiaomi)//喵喵喵