// Problem Statement #

// We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

//keep a pointer to current index
//while we are not at the end of the array
//check if current index has the correct number
//if it does, go to the next number
//else if it doesnt have same number
////check if number at current index has the same number as the index it wants to go to
////if it does, then found duplicate. return the duplicate
////if it doesnt swap number at current index with the number at the index it wants to go to

const find_duplicate = function (nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] == i + 1) {
      i++;
    } else {
      let swapIndex = nums[i] - 1;

      if (nums[i] === nums[swapIndex]) {
        return nums[i];
      } else {
        let temp = nums[swapIndex];
        nums[swapIndex] = nums[i];
        nums[i] = temp;
      }
    }
  }
  return -1;
};

//
console.log(find_duplicate([1, 4, 4, 3, 2]));
console.log(find_duplicate([2, 1, 3, 3, 5, 4]));
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
