// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

const validAnagram = ((s, t) => {
    let anagramObject = { };

    for (let i = 0; i < s.length; i++) {
        if (anagramObject[s[i]]) {
            anagramObject[s[i]] += 1;
        } else {
            anagramObject[s[i]] = 1;
        };
    };

    for (let i = 0; i < t.length; i++) {
        if (anagramObject[t[i]]) {
            anagramObject[t[i]] -= 1;
        } else {
            return false;
        };
    };
    console.log(anagramObject);
    for (key in anagramObject) {
        console.log(key);
        if (anagramObject[key] != 0) {
            return false;
        };
    };
    return true;
});

console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));