// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

var polindroms = [];

function isPolindram(s) {
  return s == s.split("").reverse().join("");
}

function longestPolindrom(string) {
  var subStr = "";

  for (var i = 0; i < string.length; i++) {
    var newStr = subStr + string[i];
    subStr = newStr;
    if (isPolindram(newStr)) {
      polindroms.push(newStr);
    }
  }
}

var str = "babad";

function getPlondroms() {
  for (var i = 0; i < str.length; i++) {
    longestPolindrom(str.slice(i, str.length));
  }

  console.log(polindroms, Math.max(...polindroms.map((s) => s.length)));
}

getPlondroms();
