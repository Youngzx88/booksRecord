var Dog = function (name) {
  this.name = name
}
var wuhu = new Dog("anne");
console.log(wuhu.name)//anne

var Cat = function (name) {
  this.name = name
  return {
    name: "heihei"
  }
}
var wuhu2 = new Cat();
console.log(wuhu2)//{ name: 'heihei' }

var obj1 = {
  name: 'youngzx',
  getName: function(){
    return this.name
  }
}

var Young = {
  name: "Youngzx"
}
var Yu = {
  name: 'Yu'
}
var say = function(){
    console.log(this.name)
}
say();//undefined
say.call(Young)//Youngzx
say.call(Yu)//Yu
