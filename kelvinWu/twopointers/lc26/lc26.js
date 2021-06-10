// Problem Statement #
// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

//loop through array
////go to element we haven't seen before and is greater than last element
////switch element with the next spot it should be in the sorted array

function remove_element(arr, key) {
  // TODO: Write code here
  if (nums.length == 0) return 0;
  let prevElement = nums[0];
  let whereToSwitch = 1;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] <= prevElement) i++;
    else {
      nums[whereToSwitch] = nums[i];
      prevElement = nums[i];
      whereToSwitch++;
    }
  }
  return whereToSwitch;
}

console.log(
  `Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`
);
console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`);

// Solution
// -----
// let nextElement = 0; // index of the next element which is not 'key'
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] !== key) {
//     arr[nextElement] = arr[i];
//     nextElement += 1;
//   }
// }
// return nextElement;

//-----

// Time Complexity #
// The time complexity of the above algorithm will be O(N), where ‘N’ is the total number of elements in the given array.

// Space Complexity #
// The algorithm runs in constant space O(1).
