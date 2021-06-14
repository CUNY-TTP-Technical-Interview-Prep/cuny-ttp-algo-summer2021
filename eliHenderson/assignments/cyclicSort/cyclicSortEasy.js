// Problem Statement #

// We are given an array containing ‘n’ objects. Each object, when created, was assigned a unique number from 1 to ‘n’ based on their creation sequence. This means that the object with sequence number ‘3’ was created just before the object with sequence number ‘4’.

// Write a function to sort the objects in-place on their creation sequence number in O(n) and without any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

/**
 * Problem:
 *  the array is in range 1 - n
 *  Sort the array in place
 *
 *
 * [3,1,5,4,2]
 *
 * overview:
 *  use an iterator that will go loop through the array
 *  the iterator starts at 0, this will denote the index value
 *  check the value at iterator
 *  eg: nums[i] = nums[0]
 *
 *  We need find the value that = nums[nums[i] - 1]
 *  [3,1,5,4,2]
 *   i
 *  nums[i] = 3
 *  nums[nums[i] - 1] is the value at nums[2] which is 3's rightful index
 *  nums[nums[i] - 1] = 5
 *
 *  now, because we know where 3 needs to go, we can swap it with the value that is in its rightful place
 *
 *  then do it again until nums[0] has a correct value
 *
 *  when nums[i] has the correct value, we iterate  the i value
 *
 *  because nums[0] !==
 *
 *  let = i
 *
 *  while ( i < nums.len)
 *      if(nums[i] !== nums[nums[i] - 1])
 *          swap nums[i] and nums[nums[i] - 1]
 *
 *       else
 *          i++
 *
 * return the array
 *
 *
 *
 */

const cyclic_sort = function (nums) {
  //set a iterator that will go through the nums array
  let i = 0;

  //loop through the array
  while (i < nums.length) {
    //var holding nums[i] - 1
    let c = nums[i] - 1;
    // if(nums[i] !== nums[nums[i] - 1])
    if (nums[i] !== nums[c]) {
      //swap nums[i] and nums[nums[i] - 1]
      [nums[i], nums[c]] = [nums[c], nums[i]];
    } else {
      //move to the next index
      i++;
    }
  }
  //return arr
  return nums;
};

const cyclic_sort = (nums) => {
  let i = 0;

  while (i < nums.length) {
    let c = nums[i] - 1;
    if (nums[i] !== nums[c]) {
      [nums[i], nums[c]] = [nums[c], nums[i]];
    } else {
      i++;
    }
  }

  return nums;
};

console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`);
console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`);
console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`);
