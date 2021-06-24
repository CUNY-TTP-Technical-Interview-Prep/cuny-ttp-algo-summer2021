// Problem Statement
// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

/*
inputs: an array of positive numbers and a positive number k
outputs: maximum sum of a contiguous subarray of size k

edge case: if k is larger than the size of the given array, return 0

steps:
init start, end, max sum, and current sum
loop through the nums array
    add the number at the end index to the current sum
    if end is greater than or equal to one less than k (exceeded window size),
        compare current and max to set a new max
        subtract the start num from current and move the window forward
    increment the end
return the max
*/

function max_sum(nums, k) {
  if (k > nums.length) return 0;

  let start = 0,
    end = 0,
    max = 0,
    current = 0;

  while (end < nums.length) {
    current += nums[end];

    if (end >= k - 1) {
      if (current > max) max = current;
      current -= nums[start];
      start++;
    }

    end++;
  }

  return max;
}

console.log("Max for [1, 1, 1, 4] with k=2:\t", max_sum([1, 1, 1, 4], 2));
console.log("Max for [0, 0] with k=2:\t", max_sum([0, 0], 2));
console.log("Max for [2, 3, 4, 1] with k=3:\t", max_sum([2, 3, 4, 1], 3));
console.log("Max for [1, 1] with k=5:\t", max_sum([1, 1], 5));
