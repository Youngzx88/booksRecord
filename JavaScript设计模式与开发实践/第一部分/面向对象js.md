## 1. 多态的作用
- 避免修改旧代码
- 让代码自适应新加的代码
```js
// 不使用多态的方法
class Dog {
}
class Cat {
}
var dahuang = new Dog;
var xiaomi = new Cat;
var shout = function(animal){
    if(animal instanceof Dog){
    console.log("汪汪汪")
    }
    if(animal instanceof Cat){
    console.log("喵喵喵")
    }
}
shout(dahuang)//汪汪汪
shout(xiaomi)//喵喵喵
// 使用多态
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
```

## 2. 封装
- 封装不应该仅仅看为是数据层面的封装
- 还包括隐藏实现细节，设计细节，以及隐藏对象的类型等等

## 3. 原型模式
- js中没有类，有的是原型编程的思想
- 原型模式是用于创建对象的一种模式(克隆)
- ECMAscript5提供了Object.create方法
```js
var cloneobj = Object.create(oldObj)
```
- js中所有对象都是克隆于object(原型链)
- 当对象无法响应某个请求的时候，会把请求委托给它自己的原型
- 所以原型的编程应该满足❗️❗️❗️
  - 所有的数据都是对象：number->Number
  - 要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆他
  - 对象会记住他的原型
  - 如果对象无法相遇某个请求，会把请求委托给自己的原型
  <img src='https://img-blog.csdnimg.cn/img_convert/516f73db997267259eab36da7079911a.png'></img>
```js
//尝试访问a的name，没找到
//去a.__proto__找
//a.__proto__ == A.prototype
//最终找到seven
var obj = {name:'seven'}
var A = function() {}
A.prototype = obj
var a = new A();
console.log(a.name);//seven
```
```js
//b找不到name
//去b的__proto__上找
//b的__protp__等于A的匿名对象
//匿名对象上找不到，去A的原型上找，seven
var A = function(){}
A.prototype = { name: 'seven' }

var B = function(){}
B.prototype = new A();

var b = new B();
console.log(b.name);//seven
```
