function lengthOfLongestSubstring(s) {
    let charMap = new Map(); // To store the last seen index of each character
    let maxLength = 0;
    let start = 0; // Starting index of the sliding window

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        console.log(charMap, start, maxLength)

        // If the character is already in the window, update start
        if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
            console.log(charMap.get(currentChar))
            start = charMap.get(currentChar) + 1;
        }

        // Update the character's last seen index
        charMap.set(currentChar, i);

        // Calculate the maximum length
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
}

// Example usage
// console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
// console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
// console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3
// console.log(lengthOfLongestSubstring(""));         // Output: 0