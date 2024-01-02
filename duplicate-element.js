// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

function duplicateElement(nums) {
    // Option 1: Sort array, then iterate once over array comparing i to i + 1, return if they are the same
    // Option 2, iterate over array and place into dictionary; if value > 1, return true
    let dictionary = { };

    for (let i = 0; i < nums.length; i++) {
        if (!dictionary[nums[i]]) {
            dictionary[nums[i]] = 1;
        } else {
            console.log(true);
            return true;
        };
    };
    console.log(false);
    return false;
};

duplicateElement([1,2,3,1]);
duplicateElement([1,2,3,4]);
duplicateElement([1,1,1,3,3,4,3,2,4,2]);