var str = "ab@c!de";

var strArray = str.split("")
// console.log("strArray", strArray)

const result = []

var i;

for(i = 0; i < strArray.length; i++){
  // console.log("..", strArray[i].match(/[a-zA-z0-9]/))
  if(strArray[i].match(/[a-zA-z0-9]/)){
    result.push(strArray[(strArray.length -1) - i])
  } else {
     result.push(strArray[i])
  }
}

// console.log(result.join(""))


const person = { name: 'Mike', email: 'mike@email.com', addr: {city: "hyd"} };

const clonedPerson = Object.assign({}, person);

clonedPerson.addr.pin = 20;
clonedPerson.age = 18

Object.freeze(clonedPerson)

clonedPerson.id = 2

console.log(clonedPerson)


















