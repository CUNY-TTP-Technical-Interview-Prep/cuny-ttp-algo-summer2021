// Problem Statement #
// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; 
// after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

/**
 * Initialize pointers at the start and end of the array.
 * If either are duplicates, splice the duplicate from the array
 * If arr[left] === duplicate, increment left
 * If arr[right] === duplicate, decrement right   
 * Return arr.length
 *  
 * edge cases => empty array, return -1
 */

function remove_element(arr, key) {
  // TODO: Write code here

  let left = 0,
  right = arr.length - 1;

  if(arr.length < 1) return -1;  
  
  while(left < right) {
    if(arr[left] === key) arr.splice(left, 1);
    if(arr[right] === key) arr.splice(right, 1); right = arr.length - 1;
    if(arr[left] !== key) left++;  
  }

  return arr.length;

  /**let left = 0,
   * right = arr.length - 1;
   * 
   * if(arr.length < 1) return -1;
   * 
   * while(left < right) {
   *  if(arr[left] === key) arr.splice(left, 1);
   *  if(arr[right] === key) arr.splce(right, 1); right = arr.length - 1;
   *  if(arr[left] !== key) left++; 
   * }
   * 
   * return arr.length;
   */
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
