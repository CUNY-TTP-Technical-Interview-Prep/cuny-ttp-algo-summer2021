// Problem Statement #

// We are given an array containing ‘n’ objects. Each object, when created, was assigned a unique number from 1 to ‘n’ based on their creation sequence. This means that the object with sequence number ‘3’ was created just before the object with sequence number ‘4’.

// Write a function to sort the objects in-place on their creation sequence number in O(n) and without any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

/**
 * inputs: 
 * @param {*} nums: an array that containing unique unsorted positive intergers.
 * 
 * outputs
 * @returns nums: a sorted array
 * 
 * step 1: loop all the elements
 * step 2: set j be the number of the nums[i] - 1 so that the function is able to compare the number at current position and number
 *          in the j position which is the position that current element should at
 * step 3: swap two element if two element is no equal
 * 
 * variable i: for iteration
 * 
 * while loop to traverse nums
 *  set j as nums[i] - 1 so that we can compare that number at that position and swap
 *    if current nums is not equal to the nums at j
 *      swap current num and num at j
 *    else increment i
 * end loop
 * return nums
 * edge case nums[] => []
 */
const cyclic_sort = function (nums) {
  // TODO: Write your code here
  let i = 0;
  while(i < nums.length){
    const j = nums[i] - 1;
    if(nums[i] !== nums[j]){
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }else
      i ++;
  }
  return nums;
};

console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`);
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

/**
 * inputs: 
 * @param {*} nums: an array that containing unique unsorted positive intergers.
 * 
 * outputs
 * @returns nums: a sorted array
 * 
 * step 1: loop all the elements
 * step 2: set j be the number of the nums[i] - 1 so that the function is able to compare the number at current position and number
 *          in the j position which is the position that current element should at
 * step 3: swap two element if two element is no equal
 * 
 * variable i: for iteration
 * 
 * while loop to traverse nums
 *  set j as nums[i] - 1 so that we can compare that number at that position and swap
 *    if current nums is not equal to the nums at j
 *      swap current num and num at j
 *    else increment i
 * end loop
 * return nums
 * edge case nums[] => []
 */
//  const cyclic_sort = function (nums) {
//   // TODO: Write your code here
//   let i = 0;
//   while(i < nums.length){
//     const j = nums[i] - 1;
//     if(nums[i] !== nums[j]){
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//     }else
//       i ++;
//   }
//   return nums;
// };
