// Problem Statement #

// Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

// The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

/*
Sort the array in place (don't use the .sort function)
If it is sorted or edge case: return the array (do nothing)

Two pointers (beginning and end of array)
Loop through the array
If statement for 0, 1 and 2
Keep all the 0s to the left side of the array
Keep all the 2s to the right side of the array
Swap two elements (define temp variable, set the array element equal to the next array element, set the next array element to the temp)
No return value

[2, 1, 1, 0, 1]
-> [1, 1, 1, 0, 2]
-> [0, 1, 1, 1, 2]
*/

const dutch_flag_sort = function (arr) {
  // TODO: Write your code here
  let leftPtr = 0;
  let rightPtr = arr.length - 1;

  let i = 0;
  while (i <= rightPtr) {
    if (arr[i] === 0) {
      const temp = arr[i];
      arr[i] = arr[leftPtr];
      arr[leftPtr] = temp;

      leftPtr++;
      i++;
    } else if (arr[i] === 1) {
      i++;
    } else {
      const temp2 = arr[i];
      arr[i] = arr[rightPtr];
      arr[rightPtr] = temp2;

      rightPtr--;
    }
  }
};

let arr = [1, 0, 2, 1, 0];
dutch_flag_sort(arr);
console.log(arr);

arr = [2, 2, 0, 1, 2, 0];
dutch_flag_sort(arr);
console.log(arr);

arr = [2, 1, 1, 0, 1];
dutch_flag_sort(arr);
console.log(arr);

arr = [2, 1, 2, 1, 1, 1, 1];
dutch_flag_sort(arr);
console.log(arr);

arr = [0];
dutch_flag_sort(arr);
console.log(arr);

// Solution
// -----
// function dutch_flag_sort(arr) {
//   // all elements < low are 0, and all elements > high are 2
//   // all elements from >= low < i are 1
//   let low = 0,
//     high = arr.length - 1,
//     i = 0;
//   while (i <= high) {
//     if (arr[i] === 0) {
//       [arr[i], arr[low]] = [arr[low], arr[i]]; // swap
//       // increment 'i' and 'low'
//       i += 1;
//       low += 1;
//     } else if (arr[i] === 1) {
//       i += 1;
//     } else { // the case for arr[i] === 2
//       [arr[i], arr[high]] = [arr[high], arr[i]]; // swap
//       // decrement 'high' only, after the swap the number at index 'i' could be 0, 1, or 2
//       high -= 1;
//     }
//   }
// }

// -----

// Time complexity #
// The time complexity of the above algorithm will be O(N) as we are iterating the input array only once.

// Space complexity #
// The algorithm runs in constant space O(1).
