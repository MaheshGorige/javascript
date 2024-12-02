function findFactorial(nmbr){
    if(nmbr == 0 || nmbr == 1){
        return 1
    } else {
        console.log(nmbr * findFactorial(nmbr - 1))
        return nmbr * findFactorial(nmbr - 1)
    }
}

console.log(findFactorial(4))