//https://leetcode.com/problems/missing-number/

/*

Given an array nums containing n distinct numbers in the range [0, n],
 return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity 
and O(n) runtime complexity?
Input: nums = [3,0,1]// [1,0,3] // [0, 1,3]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
 2 is the missing number in the range since it does not appear in nums.
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2].
2 is the missing number in the range since it does not appear in nums.
*/
var missingNumber = function (nums) {
  let i = 0;
  let j = 0;
  while (i < nums.length) {
    j = i;
    if (nums[i] > nums.length - 2) {
      // index starts at 0 and we are missing a number
      nums[i] = nums[i] - nums[nums.length - 1];
      nums[nums.length - 1] = nums[nums.length - 1] + nums[i];
      nums[i] = nums[nums.length - 1] - nums[i];
      //swapping in place
    } else if (nums[i] != i) {
      //nums[i] = nums[nums[i]]
      [nums[i], (nums[nums[i]] = [nums[nums[i]], nums[i]])];
      //[nums[i], nums[j]] = [nums[j], nums[i]];
      if (nums[i] != i) {
        return i;
      }
    }
    i += 1;
  }
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
