
const numArray = [1,2,3,4,5,6,7,8];
function geEventNumbers(arry){
    const even = [];
    for (let i = 0; i <= arry.length; i++){
        if(arry[i] % 2 == 0){
            even.push(arry[i])
        }
    }

    return even;
}

console.log(geEventNumbers(numArray))


console.log(numArray.filter((number, i) => number % 2 === 0))