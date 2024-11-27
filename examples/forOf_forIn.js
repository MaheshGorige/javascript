
const obj = {name: "mahesh", age: 20};
const str = "Hello";
const num = [1,2,4,6,5]


for(const key of obj){ // Error
       console.log(key) 
}

for(const key of num){ // values
       console.log(key) 
}

for(const key in num){  // index
    console.log(key)
}

