// Problem Statement #

// We are given an unsorted array containing numbers taken from the range 1 to ‘n’. The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.

const find_missing_numbers = function(nums) {
  missingNumbers = [];
  // TODO: Write your code here
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
