// Problem Statement #
// Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.
//Precondition:
// Arr: An unsorted array of integers 
// key: The number that we are removing from the array or the instances that exist in the array e.g 5 6 7 3 6

// Postcondition:
// n_arrLength: The length of the new array with the 'key' instances removed (number)
function remove_element(arr, key) {
  let n_arrLength = arr.length; // new array length (changing)
  // arr.length == 0 : the array is empty
  if(!n_arrLength){
    return 0;
  }

  let i = 0; // Index of our current value in the array
  const arrLength = arr.length; // The start length of the array (non-changing)
  // [1 , 2 ,3,3 4] KEY = 3
  while(i < arrLength){
    if (arr[i] === key){ // If our current value meets the target
      n_arrLength -= 1;
    }
    i+=1;
  }

  return n_arrLength;
}

console.log( // 7-> 6 -> 5 -> 4 
  `Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}` // [2, 6, 10, 9] RETURN 4
);
console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`); // [11, 1 ] RETURN 2
console.log(`Array new length: ${remove_element([], 2)}`); // RETURN 0


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
