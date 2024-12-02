function longestWord(str){

    const strs = str.split(" ");

    const arry = [];

    for (i = 0; i <= strs.length - 1; i++){
        const value = strs[i]
        arry.push(value.length)
    }

    const long =  Math.max(...arry);

    return strs.find(str => str.length === long)
    
}

function longestWord2(str){

    const strs = str.split(" ");

    let longestWord = "";

    for (i = 0; i <= strs.length - 1; i++){
        if(strs[i].length > longestWord.length){
            longestWord = strs[i];
        }
    }

    return longestWord;
    
}

console.log(longestWord("Hi Iam Saikrishna Iam a UI Developer"))
console.log(longestWord2("Hi Iam Saikrishna Iam a UI Developer"))