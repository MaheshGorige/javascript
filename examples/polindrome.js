function checkPallindrome(str){
    for(i = 0; i <= str.length / 2; i++){
        if(str[i] === str[str.length - 1]){
            return "Pallindrome"
        }

        return "Non Pallindrome"
    }
}

checkPallindrome("madam")