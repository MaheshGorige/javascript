function findConsuctive(arry){
    var maxCount = 0;
    var consuctiveCount = 0;

    for(let i = 0; i <= arry.length - 1; i++){
       if(arry[i] === 1){
           consuctiveCount++
           maxCount = Math.max(consuctiveCount, maxCount)
       } else {
           consuctiveCount = 0;
       }
    }

    return maxCount;
}


console.log(findConsuctive([1, 1, 9, 1, 9, 19, 7, 1, 1, 1, 2, 5, 1]))