// Problem Statement #

// We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’.
// The array has some numbers appearing twice, find all these duplicate numbers without using any extra space.

/*
[3, 4, 4, 5, 5]
Sort: [x, x, 3, 4, 5] -> x = the duplicate numbers
Return: [4, 5]
Edge Case: return [] (if no missing num or empty arr)

Steps:
  1. Cyclic sort (all the numbers will be in the correct index)
  2. Once I sort, compare the values on the index (index 0 -> 1, index 1 -> 2, index 2 -> 3)
  3. The duplicate will be on a random index
  4. Check if I have the proper value in each index
  5. If I don't, then it's a duplicate number and just add it to the res array (arr[i] -> push into my res arr)
  6. If I do, increment and proceed on in the array
  7. Res arr should have all the duplicate values

Starting point (incremented val)
While loop (increment conditionally)
If condition: check if the value matches the index
Some val = arr[starting point] - 1
Swap using destructuring
Once the val is in the correct index, increment the starting value
*/

const find_all_duplicates = function (nums) {
  // TODO: Write your code here
  duplicateNumbers = [];

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

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      duplicateNumbers.push(nums[i]);
    }
  }

  return duplicateNumbers;
};

console.log(find_all_duplicates([3, 4, 4, 5, 5]));
console.log(find_all_duplicates([5, 4, 7, 2, 3, 5, 3]));

// Solution
// -----
// function find_all_duplicates(nums) {
//   let i = 0;
//   while (i < nums.length) {
//     j = nums[i] - 1;
//     if (nums[i] != nums[j]) {
//       [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
//     } else {
//       i++;
//     }
//   }

//   duplicateNumbers = [];
//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] !== i + 1) {
//       duplicateNumbers.push(nums[i]);
//     }
//   }

//   return duplicateNumbers;
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(n).

// Space complexity #
// Ignoring the space required for storing the duplicates, the algorithm runs in constant space O(1).
