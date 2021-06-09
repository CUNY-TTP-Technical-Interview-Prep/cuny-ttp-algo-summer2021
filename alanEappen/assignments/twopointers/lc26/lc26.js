// Problem Statement #
// Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.

//arr is unsorted array
// target 'key
//Goal: to remove all instances of the key in the array
//return the length after removing the key of the new array
//edge cases: 
//if the array is empty return 0;
//key is not in the array return 0;
/*
currentPtr = 0 first element
indexSum adds the indexes of the subarray
for loop until the length of array
conditional if currentPtr != key
increment the indexSum

return indexSum

*/
function remove_element(arr, key) {

  let indexSum = 0;

  //edge cases
  if (arr.length == 0 || arr.includes(key) == false) {
    return 0
  }

  //
  for (let currentPtr = 0; currentPtr < arr.length; currentPtr++) {
    if (arr[currentPtr] != key) {
      indexSum++
    }
  }
  return indexSum;
}

console.log(
  `Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`
);
console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`);
console.log(`Array new length: ${remove_element([12, 3, 5, 6, 5, 2], 7)}`);
console.log(`Array new length: ${remove_element([], 7)}`);

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
