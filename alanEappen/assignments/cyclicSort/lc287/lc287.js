// Problem Statement #

// We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

//given: nums -> unsorted array
//goal: is to find the duplicate value 

/*
variables: curPtr = 0
while loop conditional with curPtr < nums.length
let swapPtr = nums[curPtr]-1
The if conditional (nums[curPtr] !== nums[swapPtr])
[[numscurPtr],[numswapPtr]] = [[numsswapPtr], [[numscurPtr]]]
else{
 curPtr++
}

//make another for loop to find the duplicated value 
//by going through the sorted nums
then we make a conditional if nums[i] is equal to he next element
  if(num[i] == nums[i+1])
  {
    return nums[i] 
  }
*/
//edge cases
/*
nums.length = 0 return -1
there is no duplicates return -1
*/
const find_duplicate = function (nums) {
  let curPtr = 0

  if (nums.length == 0) return -1;

  while (curPtr < nums.length) {
    let swapPtr = nums[curPtr] - 1
    if (nums[curPtr] !== nums[swapPtr]) {
      [nums[curPtr], nums[swapPtr]] = [nums[swapPtr], nums[curPtr]]
    }
    else {
      curPtr++
    }
  }

  for (let i = 0; i < nums.length; i++) {
    // console.log(i + ' = ' + nums[i])
    if (nums[i] == nums[nums.length - 1] && i < nums.length - 1) {
      return nums[i]
    }
  }

  return -1;
};

console.log(find_duplicate([1, 4, 4, 3, 2])); //4    
console.log(find_duplicate([2, 1, 3, 3, 5, 4])); //3
console.log(find_duplicate([2, 4, 1, 4, 4])); //4
console.log(find_duplicate([2, 4, 1, 3, 5])); //-1
console.log(find_duplicate([])); //-1


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
