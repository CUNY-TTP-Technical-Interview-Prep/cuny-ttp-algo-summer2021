// Problem Statement #

// We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array has some numbers appearing twice, find all these duplicate numbers without using any extra space.

// [1 2 3 4 5]
// [3 4 4 5 5]

// [3 4 3 4 5]

// [3 4 4 5 5]
// [4 4 3 5 5]
// [5 4 3 4 5]
// [5 4 3 4 5]

//loop through array
//check if position current number should be at is already occupied by this number
////the position does not have the number, swap the nums at current index and its new position
//else move on

//loop through array again
//check if current number is at the current position
////if it is not, means it oculdnt be moved to its correct position because the position was already filled
//////must be a duplicate then. add number to duplicate array

// [3 4 3 4 5]

const find_all_duplicates = function (nums) {
  duplicateNumbers = [];
  // TODO: Write your code here
  let i = 0;
  while (i < nums.length) {
    let swapIndex = nums[i] - 1;

    if (nums[swapIndex] !== nums[i]) {
      let temp = nums[swapIndex];
      nums[swapIndex] = nums[i];
      nums[i] = temp;
    } else {
      i++;
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
