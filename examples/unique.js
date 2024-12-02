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

console.log(duplicateAry(strArray))

console.log(new Set(numArray))

const unique = strArray.filter((str, i) => {
    if(strArray.indexOf(str) === i){
        return str;
    }
})

console.log("unique", unique)