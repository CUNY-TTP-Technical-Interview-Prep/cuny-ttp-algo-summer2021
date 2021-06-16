// Problem Statement #

// We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’.
//Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers,
//find the missing number.
/*
running through the list of numbers(loop) i to nums.length-1:
num_swap = i
check if the number we are on is > (length of the list - 1)
    swap that number with the number that is at (length of the list - 2)// the very last number
else if(nums[i] != num_swap){ //i = 0, nums[i] = 3 nums[3]
  swap the number between nums[i] and nums[nums[i]] 
}*/

//[nums[i], (nums[nums[i]] = [nums[nums[i]], nums[i]])];

const find_missing_number = function (nums) {
  //for (let i = 0; i < nums.length; i++) {
  let i = 0;
  while (i < nums.length) {
    let num_swap = nums[i];
    /*if (nums[i] === nums.length) {
      [nums[i], nums[nums.length - 1]] = [nums[nums.length - 1], nums[i]];
    } else*/

    if (nums[i] != nums.length && i !== nums[i]) {
      [nums[i], nums[num_swap]] = [nums[num_swap], nums[i]];
      //num_swap += 1;
    } else {
      i += 1;
    }
  }
  for (i in nums) {
    if (i != nums[i]) {
      return i;
    }
  }
  console.log(nums);

  // TODO: Write your code here
  return -1;
};

console.log(find_missing_number([4, 0, 3, 1]));
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));

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
