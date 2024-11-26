function reverse(text){
    const array = text.split("")
    const reverse = array.reverse()
 
 return reverse.join("")
 }
 
 
 function addUpto(n) {
     let total = 0;
 
     for(i = 0; i <= n; i++){
         total += i
     }
     return total;
 }
 
 function addUptoSeconds(n){
     return n * (n + 1) / 2
 }