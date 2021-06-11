// Problem Statement #

// We are given an unsorted array containing numbers taken from the range 1 to ‘n’.
// The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.

/*
[2, 4, 1, 2]
Sort: [1, 2, 2, 4] return [3]
Edge Case: return [] (if no missing num or empty arr)

[2, 4, 1, 2]
[1, 2, x, 4]
[1, 2, 2, 4]

[2, 4, 1, 2, 5, 5]
[1, 2, x, 4, 5, x] -> [2, 5]

Steps:
  1. Cyclic sort (all the numbers will be in the correct index) [1, 2, 2, 4]
  2. Once I sort, compare the values on the index (index 0 -> 1, index 1 -> 2, index 2 -> 3)
  3. The duplicate will be on a random index
  4. Check if I have the proper value in each index
  5. If I don't, then it's a duplicate number and just add it to the res array (index + 1 -> push into my res arr)
  6. If I do, increment and proceed on in the array
  7. Res arr should have all the missing values

Starting point (incremented val)
While loop (increment conditionally)
If condition: check if the value matches the index
Some val = arr[starting point] - 1
Swap using destructuring
Once the val is in the correct index, increment the starting value
*/

/*
Walkthrough Example 1:
  [2, 3, 1, 8, 2, 3, 5, 1]
  Iteration 0:  startIdx = 0, nums[startIdx] = 2, swapIdx = 1, nums[swapIdx] = 3
                [3, 2, 1, 8, 2, 3, 5, 1]
  Iteration 1:  startIdx = 0, nums[startIdx] = 3, swapIdx = 2, nums[swapIdx] = 1
                [1, 2, 3, 8, 2, 3, 5, 1]
  Iteration 2:  startIdx = 0, nums[startIdx] = 1
                Increment startIdx
  Iteration 3:  startIdx = 1, nums[startIdx] = 2
                Increment startIdx
  Iteration 4:  startIdx = 2, nums[startIdx] = 3
                Increment startIdx
  Iteration 5:  startIdx = 3, nums[startIdx] = 8, swapIdx = 7, nums[swapIdx] = 5
                [1, 2, 3, 5, 2, 3, 8, 1]
  Iteration 6:  startIdx = 3, nums[startIdx] = 5, swapIdx = 4, nums[swapIdx] = 2
                [1, 2, 3, 2, 5, 3, 8, 1]
  Iteration 7:  startIdx = 3, nums[startIdx] = 2, swapIdx = 1, nums[swapIdx] = 2
                Increment startIdx
  Iteration 8:  startIdx = 4, nums[startIdx] = 5
                Increment startIdx
  Iteration 9:  startIdx = 5, nums[startIdx] = 3, swapIdx = 2, nums[swapIdx] = 3
                Increment startIdx
  Iteration 10: startIdx = 6, nums[startIdx] = 8, swapIdx = 7, nums[swapIdx] = 1
                [1, 2, 3, 2, 5, 3, 1, 8]
  Iteration 11: startIdx = 6, nums[startIdx] = 1, swapIdx = 0, nums[swapIdx] = 1
                Increment startIdx
  Iteration 12: startIdx = 7, nums[startIdx] = 8
                Increment startIdx
  End of loop

  Final array: [1, 2, 3, 2, 5, 3, 1, 8]
*/

const find_missing_numbers = function (nums) {
  // TODO: Write your code here
  missingNumbers = [];

  let startIdx = 0;
  while (startIdx < nums.length) {
    if (nums[startIdx] !== startIdx + 1) {
      let swapIdx = nums[startIdx] - 1;
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
      missingNumbers.push(i + 1);
    }
  }

  return missingNumbers;
};

console.log(find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1]));
console.log(find_missing_numbers([2, 4, 1, 2]));
console.log(find_missing_numbers([2, 3, 2, 1]));

// Solution
// -----
// function find_missing_numbers(nums) {
//   let i = 0;
//   while (i < nums.length) {
//     const j = nums[i] - 1;
//     if (nums[i] !== nums[j]) {
//       [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
//     } else {
//       i += 1;
//     }
//   }
//   missingNumbers = [];

//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] !== i + 1) {
//       missingNumbers.push(i + 1);
//     }
//   }

//   return missingNumbers;
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(n).

// Space complexity #
// Ignoring the space required for the output array, the algorithm runs in constant space O(1).
