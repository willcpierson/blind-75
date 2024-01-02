// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function majorityElement(nums) {
    let dictionary = { };
    let majority = null;
    let majorityCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (dictionary[nums[i]]) {
            dictionary[nums[i]] += 1;
        } else {
            dictionary[nums[i]] = 1;
        };
    };

    for (element in dictionary) {
        if (!majority || majorityCount < dictionary[element]) {
            majority = element;
            majorityCount = dictionary[element];   
        }
    }
    console.log(majority);
    return majority;
}


majorityElement([3,2,3]);
majorityElement([2,2,1,1,1,2,2]);