const obj = { name: "mahesh" }

console.log(obj)

obj.sayHello = function(){
    console.log("hello");
}

console.log(obj)

const newObj = Object.create(obj)

console.log("newObj", newObj) // empty
console.log(newObj.sayHello()) // inherited


newObj.sayHey = function(){
    console.log("Hey...")
}

console.log("newObj2", newObj)