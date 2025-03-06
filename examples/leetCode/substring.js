// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var str = "abcabcbb";

function longestSubstr() {
  var maxLength = 0;
  var currentLength = 0;
  var subStr = {};

  for (var i = 0; i < str.length; i++) {
    console.log(subStr);
    if (subStr[str[i]] === undefined) {
      subStr[str[i]] = i;
      currentLength = currentLength + 1;
      maxLength = Math.max(currentLength, maxLength);
    } else {
      currentLength = 0;
      subStr = { [str[i]]: i };
    }
  }

  return maxLength;
}

console.log(longestSubstr());
