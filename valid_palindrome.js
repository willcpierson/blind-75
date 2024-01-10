// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

var isPalindrome = function(s) {
    let newString = ""
    let reversedString = ""
    const nonAlpha = [".", ",", ":", ";","!","?"," "]
    for (let i = 0; i < s.length; i++) {
        if (!nonAlpha.includes(s[i])) {
            newString += s[i];
        };
    };
    for (let i = s.length - 1; i >= 0; i--) {
        if (!nonAlpha.includes(s[i])) {
            reversedString += s[i];
        };
    };
    console.log(newString.toLowerCase() === reversedString.toLowerCase());
    return newString.toLowerCase() === reversedString.toLowerCase();
};

isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("race a car");
isPalindrome(" ");

// Notes: Be aware that second loop has to have the condition of less than or EQUAL to zero for it to continue
// Otherwise it will end before the last character gets added
// Apparently there is also a reverse method for ARRAYS, not strings