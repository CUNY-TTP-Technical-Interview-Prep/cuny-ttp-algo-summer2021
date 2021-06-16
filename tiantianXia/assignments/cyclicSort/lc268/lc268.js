// Problem Statement #

// We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

/**
 * inputs: 
 * @param {*} nums : an array that containing distinct numbers and unsorted. the range could be from 0 - n and may not continues
 * 
 * output
 * @returns missNum: look for the missing number
 * 
 * step 1: loop all the elements
 * step 2: compare current pointer with current poiner to determine if the number is at the right postion if not swap
 * step 3: after swap if the current pointer is not equal to the value return the value
 * 
 * variables: currentPrt: a potiner that return the current value
 * 
 * a while loop that traverse all elements and check if the currentPrt is less than the length of nums while true
 *    define a swapPrt to be the value of the current pointer
 *    compare if the value current pointer is not equal to the value of the current pointer
 *        do swap with value in the swapPrt and the current prt vale
 *    else
 *        increment the currentprt
 * end loop
 * 
 * a for loop to traverse all the elements to find out the missing number
 *  compare if the current pointer is equal to the vaule of the current pointer if not equal
 *      reutn the current pointer meanning that we find the missing number
 * end loop
 * 
 * edge case: if we don't find the number return -1
 *            if num = [] => -1
 */
const find_missing_number = function(nums) {

  if(!nums.length) return -1;
  // TODO: Write your code here

  let currentPrt = 0;

  while(currentPrt < nums.length){

    const swapPrt = nums[currentPrt];

    if(nums[currentPrt] !== nums[swapPrt]){
      [nums[currentPrt], nums[swapPrt]] = [nums[swapPrt], nums[currentPrt]];
    }else{
      currentPrt ++;
    }
  }

  for(let i = 0; i < nums.length; i++){
    if(i !== nums[i]) return i;
  }

  return -1;
};

console.log(find_missing_number([4, 0, 3, 1])); //2
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1])); // 7
console.log(find_missing_number([]));

// Solution
// -----
// function find_missing_number(nums) {
//   let i = 0;
//   const n = nums.length;
//   while (i < n) {
//     j = nums[i];
//     if (nums[i] < n && nums[i] !== nums[j]) {
//       [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
//     } else {
//       i += 1;
//     }
//   }

//   // find the first number missing from its index, that will be our required number
//   for (i = 0; i < n; i++) {
//     if (nums[i] !== i) {
//       return i;
//     }
//   }

//   return n;
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(n). In the while loop, although we are not incrementing the index i when swapping the numbers, this will result in more than n iterations of the loop, but in the worst-case scenario, the while loop will swap a total of n-1 numbers and once a number is at its correct index, we will move on to the next number by incrementing i. In the end, we iterate the input array again to find the first number missing from its index, so overall, our algorithm will take O(n) + O(n-1) + O(n) which is asymptotically equivalent to O(n).

// Space complexity #
// The algorithm runs in constant space O(1).
