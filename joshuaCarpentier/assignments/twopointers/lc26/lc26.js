// Problem Statement #
// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space;
// after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

/**
 *Input: array and key
 *Output: array length after removal of duplicates


 intialize a vairiable to stor the nextElement 

 then we need to loop over the array length then check if then check 
 the current index is not equal to the key if true then
 set the array index to the nextElement to the current index and
 add 1 to the next element and return the next element


 */
function remove_element(arr, key) {
  let nextElement = 0; // index of the next element which is not 'key'
  for (index = 0; index < arr.length; index++) {
    if (arr[index] !== key) {
      arr[nextElement] = arr[index];
      nextElement += 1;
    }
  }
  return nextElement;
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
