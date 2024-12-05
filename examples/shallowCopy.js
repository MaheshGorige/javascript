const arry = [1,2,3,[4,5]]

const shallowCopy = [...arry];

shallowCopy[3][0] = 10

console.log("shallow...",arry)



// const deepCopy = JSON.parse(JSON.stringify(arry));

// deepCopy[3][0] = 10;

// console.log("deep...", arry)


