var arry = [1, 1, 2, 2, 3, 4, 5, 5]

// function count(){
//   var count = [];
  
//   for(let i = 0; i < arry.length; i++){
//     if(count.indexOf(arry[i]) === -1){
//       count.push(arry[i])
//     }
//   }
  
//   return count.length;
// }

// console.log(count())

function count(ary){
  var i = 0;
  // var j = i + 1;
  
  for(var j = 1; j < ary.length; j++){
    if(ary[i] !== ary[j]){
     i++
      ary[i] = ary[j]
    }
  }
  
  console.log(i)
}

// console.log(count(arry))


// Find max sum of given n

var arry1 = [1, 8, 2, 9, 3, 4, 5, 5]

function findMaxSumOfN(arry, num){
  var max = 0;
  var temp = 0;
  
  for(var i = 0; i < num; i++){
    max += arry[i]
  }
  
  temp = max;
  
  for(var j = num; j < arry.length; j++){
    temp = temp - arry[j - num] + arry[j]
    max = Math.max(temp, max)
  } 
  
  console.log(max)
  
}
findMaxSumOfN(arry1, 3)



