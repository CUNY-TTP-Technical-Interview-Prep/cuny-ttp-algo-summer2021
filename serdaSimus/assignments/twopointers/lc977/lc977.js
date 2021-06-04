// Problem Statement #
// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

/*


Solution:
I was thinking of making use of JavaScript's built-in functional mechanisms. .map() and .sort()
Using .map(), I would take it the array, and provide a mechanism to square it.
this creates a new array with the squares of the previous array. O(n) space.

.sort() will allow me to compare the values inside of the array, and sort at O(n log n) TC.

overall, time and space complexity will TC O(n log n) where n is the arr.length
Space complexity would be O(n) since we are creating a new array with all the values squared.

*/

function make_squares(arr) {
  // TODO: Write code here
  return arr.map((item) => item * item).sort((a, b) => a - b);
}

console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);

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
