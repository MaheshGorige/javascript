const numArray = [1,2,3,4,3,2,2,7];
const strArray = ["mahesh", "Venky", "Raj", "Nikki", "Venky", "Raj"]

function duplicateAry(ary){
    const unique = []
    for(i = 0; i <= ary.length - 1; i++){
      if(unique.indexOf(ary[i]) === -1){
          unique.push(ary[i])
      }  
    }

    return unique;
}

// console.log(duplicateAry(strArray))

// console.log(new Set(numArray))

const unique = strArray.filter((str, i) => {
    if(strArray.indexOf(str) === i){
        return str;
    }
})

// console.log("unique", unique)

const unq = [];

function uniqueRecursive(arry){
    if(arry.length <= 0){
        return;
    }

    var value = array[0]

    if(unq.some(v => v !== value)){
        unq.push(value)
        unique(arry.slice(1))
    } else {
        unique(arry.slice(1)) 
    }

    return unq;
}


// console.log(uniqueRecursive(strArray))


function same(arr1, arr2){

    var result = [];
    for(var i = 0; i < arr1.length; i++){
        if(arr2.indexOf(arr1[i]) !== -1){
             console.log(arr1[i])
            result.push(arr1[i])
        }
    }

    return result;
}

var array1 = [1, 2, 3, 5, 7, 8]
var array2 = [2, 3, 5, 9, 0]

// console.log(same(array1, array2))


function diff(arr1, arr2){

     var result = [];
    for(var i = 0; i < arr1.length; i++){
        if(arr2.indexOf(arr1[i]) === -1){
             console.log(arr1[i])
            result.push(arr1[i])
        }
    }

     for(var i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) === -1){
            result.push(arr2[i])
        }
    }

    return result;
}


console.log(diff(array1, array2))



