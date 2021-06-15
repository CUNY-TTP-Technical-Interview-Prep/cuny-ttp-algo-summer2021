// Problem Statement #
// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

/*
Intitialize and declare left = 0
Initialize and declare right = arr.length - 1
Initialize a squared array with the same length of the sorted array
Each pointer then squares the value with the equivalent index
If squaredLeft > squaredRight, squaredLeft should be the value of the right pointer index, with left being incremented
If squaredRight >= squaredLeft, squaredRight becomes the index value of the squared array, with right being decremented

Return the squared squared array

variables: left, right, squares, leftSquare, rightSquare, highestSquareIdx

edge cases: empty array, return -1


*/

function make_squares(arr) {
  // TODO: Write code here
  
  let left = 0,
  n = arr.length,
  right = arr.length - 1,
  squares = Array(n).fill(0);
  let highestSquareIdx = n - 1;

  if(arr.length < 1) return -1;

  while(left <= right) {
    leftSquare = arr[left]**2;
    rightSquare = arr[right]**2;
    if(leftSquare > rightSquare) {
      squares[highestSquareIdx] = leftSquare;
      left++;
    }
    else {
      squares[highestSquareIdx] = rightSquare;
      right--;
    }
    highestSquareIdx--;
  }

  return squares;

  
  // let left = 0,
  // n = arr.length,
  // right = n - 1,
  // squares = Array(n).fill(0);
  // let highestSquareIdx = n -1;

  // if(arr.length < 1) return -1;

  // while(left <= right) {
  //   leftSquare = arr[left]**2;
  //   rightSquare = arr[right]**2;

  //   if(leftSquare > rightSquare) {
  //     squares[highestSquareIdx] = leftSquare;
  //     left++; 
  //   }else {
  //     squares[highestSquareIdx] = rightSquare;
  //     right--;
  //   }

  //   highestSquareIdx--;

  // }

  // return squares;
  
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
