function charCount(str){
    var results = {}

    for(var i = 0; i < str.length; i++){
        if(results[str[i]] > 0){
            results[str[i]] += 1
        } else {
            results[str[i]] = 1
        }
    }

    return results;
    
}

// console.log(charCount("Hello"))


function angram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    
    const fre1 = {}
    const fre2 = {}

    for(var i = 0; i< str1.length; i++){
        const val = str1[i];
        if(fre1[val] > 0){
            fre1[val] += 1
        } else {
            fre1[val] = 1
        }
    }

    for(var i = 0; i< str2.length; i++){
        const val = str2[i];
        if(fre1[val] <= 0){
           return false;
        } else {
            fre1[val] -= 1
        }
    }

    console.log(fre1)

    // for(let val of Object.values(fre1)){
    //     if(fre2[val] <= 0){
    //         return false
    //     }
    //     else {
    //         fre2[val] = fre2[val] - 1
    //     }
    // }
    //  console.log(fre2)

    return true;
}


// console.log("..", angram("hello", "lhloe"))



function mine(str1, str2){
     if(str1.length !== str2.length){
        return false;
    }
    
    for(let i = 0; i < str1.length; i++){
        if(str2.indexOf(str1[i]) === -1){
            return false;
        }
    }

    return true;
}

// console.log("..", mine("anagram", "gramana"))



function pol(str1){
  
    
    for(let i = 0; i < str1.length / 2; i++){
        console.log(str1[str1.length - 1 - i ])
        if(str1[i] !== str1[str1.length - 1 - i]){
            return false;
        }
    }

    return true;
}

 console.log("..", pol("acdcba"))