// Problem Statement #

// We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.


/**
 * 
 * @param {*} nums 
 * @returns
 * 
 * Initialize a pointer
 * Then loop through the array
 * Checking for a duplicate of one number
 * 
 * currPtr = 0, nums(currPtr) = 1;
 * currPtr = 1, nums(currPtr) = 4;
 * if(value of currPtr !== currPtr + 1) currPtr++;
 * if it does, then return currPtr
 * 
 * edge cases: array with no elements or duplicates, return empty array 
 */

const find_duplicate = function(nums) {
  // TODO: Write your code here

  let currPtr = 0;                                          //current pointer is initialized

  if(nums.length < 2) return 0
  while(currPtr < nums.length) {                            //while pointer is less than length of numbers array
    if(nums[currPtr] !== currPtr + 1){                      //if current index does not equal next index
      const swapPtr = nums[currPtr] - 1;                    //declare and initialize swap pointer
      if(nums[currPtr] !== nums[swapPtr]){                  //if the current index and the swap index value are not strictly equal
        [ nums[currPtr], nums[swapPtr] ] = [ nums[swapPtr], nums[currPtr] ]; //swap the values
      }
      else return nums[currPtr];                            //if they are strictly equal, return current index value
    }
    else currPtr++;                                         //increment current pointer
  }
  return -1;
};

// let currPtr = 0;                                                

// if(nums.length < 2) return 0                                
// while(currPtr < nums.length) {                              
//   if(nums[currPtr] !== currPtr + 1){                        
//     const swapPtr = nums[currPtr] - 1;
//     if(nums[currPtr] !== numms[swapPtr]) {
//       [ nums[currPtr], nums[swapPtr] ] = [ nums[sawpPtr], nums[currPtr] ];
//     }
//     else return nums[currPtr];
//   }
//   else currPtr++;
// }
// return -1;

console.log(find_duplicate([1, 4, 4, 3, 2]));
console.log(find_duplicate([2, 1, 3, 3, 5, 4]));
console.log(find_duplicate([2, 4, 1, 4, 4]));


// Solution
// -----
// function find_duplicate(nums) {
//   let i = 0;
//   while (i < nums.length) {
//     if (nums[i] !== i + 1) {
//       j = nums[i] - 1;
//       if (nums[i] !== nums[j]) {
//         [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
//       } else { // we have found the duplicate
//         return nums[i];
//       }
//     } else {
//       i += 1;
//     }
//   }
//   return -1;
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(n).

// Space complexity #
// The algorithm runs in constant space O(1) but modifies the input array.
