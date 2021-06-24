// Problem Statement #

// We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’.
// Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

/*
Array: [0, 1, 3, 4]
Missing Number: 2 <- return

Observations:
  - No duplicate values
  - The range of numbers starts from 0 and is <= array length
  - Asking for me to find a single number

Edge Cases:
  1. If empty array, return the array length
  2. If every value matches it's index, return the array length

Solving the problem:
  1. Cyclic sort (every number is in correct index: index 0 -> 0, index 1 -> 1, ...)
  2. The outlier will be in an incorrect index (index 2 -> 4, which is wrong)
  3. After sorting, I can iterate through the array and just look for the number thats not in its correct index (arr[i] !== index)
  4. Once I find the number, return the index

Cyclic sort:
  1. startIdx = 0;
  2. Loop while startIdx < array length
    3. Condition to check if the arr[i] is not equal to the index
    4. swapIdx = arr[startIdx] - 1
    5. Check for duplicates (not necessary since every number is distinct)
    6. Swap using destructuring
    7. Increment startIdx

[1, 0, 3, 4]
Ideal: [0, 1, 2, 3]
Cyclic Sort: [0, 1, 4, 3]
*/

const find_missing_number = function (nums) {
  // TODO: Write your code here
  let startIdx = 0;
  while (startIdx < nums.length) {
    if (nums[startIdx] !== startIdx) {
      const swapIdx = nums[startIdx];
      if (nums[startIdx] < nums.length) {
        [nums[startIdx], nums[swapIdx]] = [nums[swapIdx], nums[startIdx]];
      } else {
        startIdx++;
      }
    } else {
      startIdx++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }

  return nums.length;
};

console.log(find_missing_number([4, 0, 3, 1])); // 2
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1])); // 7
console.log(find_missing_number([])); // 0
console.log(find_missing_number([1])); // 0
console.log(find_missing_number([0])); // 1

// Solution
// -----
// function find_missing_number(nums) {
//   let i = 0;
//   const n = nums.length;
//   while (i < n) {
//     j = nums[i];
//     if (nums[i] < n && nums[i] !== nums[j]) {
//       [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
//     } else {
//       i += 1;
//     }
//   }

//   // find the first number missing from its index, that will be our required number
//   for (i = 0; i < n; i++) {
//     if (nums[i] !== i) {
//       return i;
//     }
//   }

//   return n;
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(n). In the while loop, although we are not incrementing the index i when swapping the numbers, this will result in more than n iterations of the loop, but in the worst-case scenario, the while loop will swap a total of n-1 numbers and once a number is at its correct index, we will move on to the next number by incrementing i. In the end, we iterate the input array again to find the first number missing from its index, so overall, our algorithm will take O(n) + O(n-1) + O(n) which is asymptotically equivalent to O(n).

// Space complexity #
// The algorithm runs in constant space O(1).
