function sumOfthird(arry){
    let sum = 0;

    for(let i = 0; i < arry.length; i+=3){
        sum += arry[i]
    }

    return sum;
}

console.log("...", sumOfthird([1,2,3,4,5,6]))