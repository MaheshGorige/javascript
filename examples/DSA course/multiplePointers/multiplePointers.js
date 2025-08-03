// function countUniqueValues(arry){
//   var count = 1;
//   var current = arry[0]
  
//   for(var i = 0; i < arry.length; i++){
//     if(current !== arry[i]){
//       count += 1
//     }
//     current = arry[i]
//   }
  
//   return count;
// }


function addTwo(arry){
  var left = 0;
  var right = arry.length -1;
  
  while(left < right){
    var sum = arry[left] + arry[right];
    console.log(sum)
    if(sum === 0){
      return [arry[left], arry[right]]
    } else if(sum > 0){
      right--
    } else {
      left++
    }
  }
}

console.log(addTwo([-2,-1, 0, 1, 2, 3]))

// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,13, 9]))