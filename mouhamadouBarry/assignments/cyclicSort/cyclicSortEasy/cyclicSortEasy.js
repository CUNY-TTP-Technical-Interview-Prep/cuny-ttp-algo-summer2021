// Problem Statement #

// We are given an array containing ‘n’ objects. Each object, when created, was assigned a unique number from 1 to ‘n’ based on their creation sequence. 
//This means that the object with sequence number ‘3’ was created just before the object with sequence number ‘4’.

// Write a function to sort the objects in-place on their creation sequence number in O(n) and without any extra space. 
//For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, 
//though each number is actually an object.



/*
INPUT: 
  - An array of positive ints

OUTPUT:
  - Sort the array in place base on their sequence numbers

Overview:
  - start at 0 
  - use a while(true)
    ->check if I is in the right place
  - temp variable



  [3,2,4,1]

  [[3], 2, 4, 1]

  [1, 2, 4, [3]]

  [1, 2, 3, 4]

*/
const cyclic_sort = function (nums) {
  // TODO: Write your code here

  let count = 0
  let temp = 0
  while ( count < nums.length){
    
   // for(let i=0;i<nums.length;i++){
      
      if (nums[count]!==(count+1)){
        
        temp = nums[count]
        nums[count] = nums[temp-1]
        nums[temp-1] = temp

      // }
    } else { 
      count++ 
    } 
  }

  return nums;
};

console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`);
console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`);
console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`);
console.log(`${cyclic_sort([1, 5, 6, 6, 3, 2])}`);

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
