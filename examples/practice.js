const animal = {
    eats: true
}

const rabbit = Object.create(animal);
// console.log(rabbit)
rabbit.jumps = true;

// console.log(Object.getPrototypeOf(rabbit))


function debounce(callback, delay){
    var id;

    return function(...args){

        clearTimeout(id)

        id  = setTimeout(() => {
            callback(args);
        }, delay)
    }
}

const db = debounce((args) => {
    console.log(args ?? "rendered")
}, 3000)

// console.log(db("initial"))

// setTimeout(() => {
//    console.log(db("world delay")) 
// }, 1000)


let throttleTimeout;

function throttle(callback, delay){
    if(!throttleTimeout){
        callback();
        throttleTimeout = setTimeout(() => {
            throttleTimeout = null
        }, delay)
    }
}


// console.log(throttle(() => {
//     console.log("hello")
// }, 1000))

// setTimeout(() => {
//     throttle(() => {
//         console.log("hello-500")
//     }, 1000)
// }, 900)

// console.log(throttle(() => {
//     console.log("hello")
// }, 1000))


function areAnagrams(str1, str2){
    str1 = str1.replace(" ", "").toLowerCase();
    str2 = str2.replace(" ", "").toLowerCase();

    if(str1.length !== str2.length){
        return false;
    }

    const sortStr1 = str1.split('').sort().join('');
     const sortStr2 = str2.split('').sort().join('');

    console.log(sortStr2)

    return sortStr1 === sortStr2;
    
}


// console.log(areAnagrams('listen', 'siletn'))


function findMissingNumber(array, n){
    const expectedSum = n * (n + 1) / 2;

    const actualSum = array.reduce((self, current) => self  + current, 0)

    return expectedSum - actualSum;
}

const arr = [1, 2, 4, 5, 6];
const n = 6;
console.log(findMissingNumber(arr, n));



function twoSum(array, target){
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j< array.length; j++){
            if(array[i] + array[j] === target){
                return [i, j]
            }
        }
    }

    return []
}


console.log(twoSum([2,5,7,6,8,4], 8))



