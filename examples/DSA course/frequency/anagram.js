

function validAnagram(ang1, ang2){
  
  const frequency1 = {}
  const frequency2 = {};
  
  for(var i = 0; i < ang1.length; i++){
    frequency1[ang1[i]] = frequency1[ang1[i]] ? frequency1[ang1[i]] + 1 : 1;
  }
  
   for(var i = 0; i < ang2.length; i++){
    frequency2[ang2[i]] = frequency2[ang2[i]] ? frequency2[ang2[i]] + 1 : 1;
  }
  
  // {a:2, z: 1}. {z: 2, a: 1}
  
  for(var key in frequency1){
    if(!key in frequency2){
      return false;
    }
    
    if(frequency1[key] !== frequency2[key]){
      return false
    }
  }
  
  
  return true;
}



function validAnagram2(ang1, ang2){
  
  if(ang1.length !== ang2.length){
    return false
  }
  
  const frequency1 = {}
  
  for(var i = 0; i < ang1.length; i++){
    frequency1[ang1[i]] = frequency1[ang1[i]] ? frequency1[ang1[i]] + 1 : 1;
  }
  
  console.log("...", frequency1)
  
   for(var i = 0; i < ang2.length; i++){
    if(!frequency1[ang2[i]]){
      return false
    } else {
      frequency1[ang2[i]] -= 1
    }
  }
  
  return true;
}



console.log(validAnagram('texttwisttime', 'timetwisttext'))


// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true


