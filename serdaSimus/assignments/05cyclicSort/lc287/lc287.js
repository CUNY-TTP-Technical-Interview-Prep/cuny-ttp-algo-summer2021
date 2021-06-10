// Problem Statement #

// We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

const find_duplicate = function (nums) {
  // TODO: Write your code here
  let currentPos = 0;

  while (currentPos < nums.length) {
    // the correct index of any value, is itself - 1.
    let correctIndex = nums[currentPos] - 1;

    if (currentPos != correctIndex) {
      if (nums[currentPos] != nums[correctIndex]) {
        [nums[currentPos], nums[correctIndex]] = [
          nums[correctIndex],
          nums[currentPos],
        ];
      } else {
        // duplicate found, return it.
        return nums[currentPos];
      }
    } else {
      currentPos++;
      continue;
    }
  }

  return -1;
};

console.log(find_duplicate([1, 4, 4, 3, 2]));
console.log(find_duplicate([2, 1, 3, 3, 5, 4]));
console.log(find_duplicate([2, 4, 1, 4, 4]));
console.log(find_duplicate([1, 4, 3, 2]));
console.log(find_duplicate([1, 2, 3, 3, 5, 4]));
console.log(find_duplicate([2, 4, 1, 4, 4]));

// Solution
// -----
// function find_duplicate(nums) {
//   let i = 0;
//   while (i < nums.length) {
//     if (nums[i] !== i + 1) {
//       j = nums[i] - 1;
//       if (nums[i] !== nums[j]) {
//         [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
//       } else { // we have found the duplicate
//         return nums[i];
//       }
//     } else {
//       i += 1;
//     }
//   }
//   return -1;
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(n).

// Space complexity #
// The algorithm runs in constant space O(1) but modifies the input array.
