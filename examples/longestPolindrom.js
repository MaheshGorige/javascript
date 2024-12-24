
function longestPalindrome(s) {
    var maxLength = 0;
     var substr = "";
 
     for(var i = 0; i < s.length; i++){
         for(var j = 0; j < s.length; j++){
             const st = s.slice(i, j + 1)
             if(isPalindrome(st) && st.length > maxLength){
                 maxLength = st.length;
                 substr = st
             }
         }
     }
 
     return maxLength;
 }
 
 function isPalindrome(str) {
     return str === str.split('').reverse().join('');
 }
 
 // Example usage
 const inputString = "babad";
 console.log(longestPalindrome(inputString)); // Output: "bab" or "aba"