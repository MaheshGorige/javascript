var str = "ab@c!de";

var strArray = str.split("")
console.log("strArray", strArray)

// console.log(str.replace(/[^a-zA-Z0-9]/g, ""))

const result = []


for(var i = 0; i < strArray.length; i++){
  // console.log("..", strArray[i].match(/[a-zA-z0-9]/))
  if(strArray[i].match(/[a-zA-z0-9]/)){
    console.log("strArray[6 - i]", 6 - i, i)
    result.push(strArray[(strArray.length -1) - i])
  } else {
     result.push(strArray[i])
  }
}

console.log(result.join(""))