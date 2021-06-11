// Problem Statement #

// We are given an array containing ‘n’ objects. Each object, when created, was assigned a unique number from 1 to ‘n’ based on their creation sequence. This means that the object with sequence number ‘3’ was created just before the object with sequence number ‘4’.

// Write a function to sort the objects in-place on their creation sequence number in O(n) and without any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

/*
Given: [3, 1, 5, 2, 4]
Return: [1, 2, 3, 4, 5]
Edge Case: Return [] if it is an empty array

Steps:
  1. We want to sort the values in the array by index (index 0 = 1, index 1 = 2, ...)
     Simply put, arr[i] === i + 1
     To do this, we should use cyclic sort
  2. To implement, we need an increment that starts at 0 and increments conditionally
     We should use a while loop because we only want to increment if the value is in the proper index (multiple swaps possible)
     We initialize another variable that will serve as our swap index (arr[i] - 1)
     We swap as long as the value is not in it's proper index and the values we swap are not the same, else we just increment
     We finally return the array
*/

const cyclic_sort = function (nums) {
  // TODO: Write your code here
  let startIdx = 0;

  while (startIdx < nums.length) {
    if (nums[startIdx] !== startIdx + 1) {
      const swapIdx = nums[startIdx] - 1;
      if (nums[startIdx] !== nums[swapIdx]) {
        [nums[startIdx], nums[swapIdx]] = [nums[swapIdx], nums[startIdx]];
      } else {
        startIdx++;
      }
    } else {
      startIdx++;
    }
  }

  return nums;
};

console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`);
console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`);
console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`);
console.log(`${cyclic_sort([])}`);

// Solution
// -----
// function cyclic_sort(nums) {
//   let i = 0;
//   while (i < nums.length) {
//     const j = nums[i] - 1;
//     if (nums[i] !== nums[j]) {
//       [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
//     } else {
//       i += 1;
//     }
//   }
//   return nums;
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(n). Although we are not incrementing the index i when swapping the numbers, this will result in more than ‘n’ iterations of the loop, but in the worst-case scenario, the while loop will swap a total of ‘n-1’ numbers and once a number is at its correct index, we will move on to the next number by incrementing i. So overall, our algorithm will take O(n) + O(n-1) which is asymptotically equivalent to O(n).

// Space complexity #
// The algorithm runs in constant space O(1).
