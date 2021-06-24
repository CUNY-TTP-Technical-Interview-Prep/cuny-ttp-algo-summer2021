// Given an array of positive numbers and a positive number ‘k,’
// find the maximum sum of any contiguous subarray of size ‘k’.

/*
Input: [3, 1, 2, 4], 2
Output: 6
Explanation: Since the size for k is 2, we are adding two numbers together at most.
             Looking at the array, the contiguous subarray that gives us the max is [2, 4].

-----

Analyzing the problem:
    1. Contiguous subarray means a portion in the array that is connected
    2. The maximum size of the "window" is determined by the input 'k'
    3. We are only given positive numbers

Possible constraints:
    1. The input 'k' should be a valid number (will be in the bounds of the array length)
    2. The input 'k' will always be a positive number
    3. The array will only contain positive numbers

Edge cases:
    1. If the array is empty, return 0

Approaching the problem:
    1. We can use the sliding window technique to form a "window" with a specific length over a portion of the array.
       To do so, we initialize two pointers starting at 0 and increment conditionally.
    2. We need to find the maximum sum, meaning we add the numbers in the "window" and take the max.
       So, we probably need a sum and a max variable as well.
    3. Loop through the array to get each value, and add it to our sum.
    4. Once we have the desired window length:
        - Take the max
        - Increment our pointers by 1, meaning we slide the window over
        - Decrement the sum by the left-most value
    5. At the very end, we can return the max
*/

const maxSubArray = function (nums, k) {
  let sum = 0;
  let max = 0;

  let leftPtr = 0;
  let rightPtr = 0;
  while (rightPtr < nums.length) {
    sum += nums[rightPtr];

    if (rightPtr >= k - 1) {
      max = Math.max(max, sum);
      sum -= nums[leftPtr];
      leftPtr++;
    }

    rightPtr++;
  }

  return max;
};

console.log(maxSubArray([3, 1, 2, 4], 2)); // 6 -> [2, 4]
console.log(maxSubArray([1, 9, 3, 5, 2, 7, 2], 4)); // 19 -> [9, 3, 5, 2]
console.log(maxSubArray([], 0)); // 0 -> []
