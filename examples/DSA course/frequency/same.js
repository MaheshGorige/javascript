

// Big O
function sameBigO(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  
  for(var i = 0; i < arr1.length; i++){
    var current = arr1[i] ** 2;
    var index = arr2.indexOf(current);
    
    if(index === -1){
      return false
    }
    
    arr2.splice(index, 1)
  }
   return true;
}

// Frequency pattern
function same(arr1, arr2){
   if(arr1.length !== arr2.length){
    return false;
  }
  
  const frequency1 = {}
  const frequency2 = {}
  
  for(var i = 0; i < arr1.length; i++){
    frequency1[arr1[i]] = frequency1[arr1[i]] ? frequency1[arr1[i]] + 1 : 1
  }
  
  for(var i = 0; i < arr2.length; i++){
    frequency2[arr2[i]] = frequency2[arr2[i]] ? frequency2[arr2[i]] + 1 : 1
  }
  
  for(var key in frequency1){
    if(!(key ** 2 in frequency2)){
      return false
    }
    
    if(frequency2[key ** 2] !== frequency1[key]){
      return false
    }
  }
  
  return true
}


console.log(same([1,2,3, 2], [1, 9, 4, 4]))