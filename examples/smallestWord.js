function smallest(str){
    const strArray = str.split(" ");
    let small = strArray[0];

    for(i = 1; i < strArray.length; i++){
        if(strArray[i].length < small.length){
            small = strArray[i]
        }
    }

    return small;
}

console.log("smallest", smallest("Find the smallest word"))