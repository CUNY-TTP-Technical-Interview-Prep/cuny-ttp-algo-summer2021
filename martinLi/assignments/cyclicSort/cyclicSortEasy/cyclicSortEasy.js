// Problem Statement #

// We are given an array containing ‘n’ objects. Each object, when
// created, was assigned a unique number from 1 to ‘n’ based on their creation sequence. This means that the object with sequence number ‘3’ was created just before the object with sequence number ‘4’.

// Write a function to sort the objects in-place on their creation sequence number in O(n) and without any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

/*

*/
const cyclic_sort = function (nums) {
  /*
  we know that we have to swap without gaps in between numbers and it has to be sorted
  from 1 to n. every number less than n is included.
  It isn't sorted but it could be.
cases:
if nums.lengh < 2:
  return nums

We swap numbers in accordance to the value - 1(as array indexes start at 0)

  */
  let i = 0;
  let j = 0;

  while (i < nums.length) {
    j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      /*
     
     a = 2
     b = 5
     2 - 5 = -3 (a-b) 
     a = a - (a-b) 
     b = b-(b - a)
     ====================
     a=a-b //-3
     b = b +a // 2
     a = b - a //5  
     ======================
     //3
     */

      //nums[j] = nums[j] - (nums[j]-nums[i])
      //nums[i] = nums[j] -  (nums[j] - nums[i])//5
      nums[i] = nums[i] - nums[j];
      nums[j] = nums[j] + nums[i];
      nums[i] = nums[j] - nums[i];
    } else {
      i += 1;
    }
  }
  return nums;
};

console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`);
// [5,1,3,4,2] [2, 1,3,4,5] [1,2,3,4,5]
console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`);
console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`);

// Solution
// -----
// function cyclic_sort(nums) {
//   let i = 0;
//   while (i < nums.length) {
//     const j = nums[i] - 1;
//     if (nums[i] !== nums[j]) {
//       [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
//     } else {
//       i += 1;
//     }
//   }
//   return nums;
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(n). Although we are not incrementing the index i when swapping the numbers, this will result in more than ‘n’ iterations of the loop, but in the worst-case scenario, the while loop will swap a total of ‘n-1’ numbers and once a number is at its correct index, we will move on to the next number by incrementing i. So overall, our algorithm will take O(n) + O(n-1) which is asymptotically equivalent to O(n).

// Space complexity #
// The algorithm runs in constant space O(1).
