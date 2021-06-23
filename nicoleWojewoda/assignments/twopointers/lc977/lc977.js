// Problem Statement #
// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

/*
input: a sorted array
output: a sorted array containing the square of each element

brute-force:
steps:
  init output array
  loop through the given array
    square each element, add it to the output array
   
  sort the output array
  return the output array

better:
steps:
  init output array, left pointer, right pointer, position pointer
  start left pointer at 0 and right pointer at arr.length-1
  start pos pointer at arr.length-1
  loop while r >= l
    if r^2 is >= l^2,
      add r^2 to pos's index in the result array
      decrement right
    else, 
      add l^2 to pos's index in the result array
      increment left

    decrement pos
  
  return the result array
*/

function make_squares(arr) {
  if (!arr) return [];

  let result = Array(arr.length);
  let left = 0;
  let right = arr.length - 1;
  let pos = arr.length - 1;

  while (right >= left) {
    if (arr[right] * arr[right] >= arr[left] * arr[left]) {
      result[pos] = arr[right] * arr[right];
      right--;
    } else {
      result[pos] = arr[left] * arr[left];
      left++;
    }

    pos--;
  }

  return result;
}

console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`); // [0, 1, 4, 4, 9]
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`); // [0, 1, 1, 4, 9]

// Solution
// -----
// const n = arr.length;
// squares = Array(n).fill(0);
// let highestSquareIdx = n - 1;
// let left = 0,
//   right = n - 1;
// while (left <= right) {
//   let leftSquare = arr[left] * arr[left],
//     rightSquare = arr[right] * arr[right];
//   if (leftSquare > rightSquare) {
//     squares[highestSquareIdx] = leftSquare;
//     left += 1;
//   } else {
//     squares[highestSquareIdx] = rightSquare;
//     right -= 1;
//   }
//   highestSquareIdx -= 1;
// }

// return squares;

// -----

// Time complexity #
// The above algorithm’s time complexity will be O(N) as we are iterating the input array only once.

// Space complexity #
// The above algorithm’s space complexity will also be O(N); this space will be used for the output array.
