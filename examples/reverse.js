function reverse(str){
    let reverseString = "";

    for(i = str.length - 1; i >= 0; i--){
        reverseString += str[i]
    }

    return reverseString;
}

console.log("reverse", reverse("hello"))