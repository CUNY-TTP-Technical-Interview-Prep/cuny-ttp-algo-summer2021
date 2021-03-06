// Problem Statement #

// We are given an array containing ‘n’ objects. Each object, when created, was assigned a unique number from 1 to ‘n’ based on their creation sequence. This means that the object with sequence number ‘3’ was created just before the object with sequence number ‘4’.

// Write a function to sort the objects in-place on their creation sequence number in O(n) and without any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

const cyclic_sort = function(nums) {
	// TODO: Write your code here
	// cyclic sort, sorts in place with swaps
	// given object representation array from 1-n integers, sort it by using cyclic sort
	// nums[0] = 3   nums[3-1]
	// 3 1 5 4 2
	// nums[0] = 3
	// swap nums[0] to position 2 which is where 5 is
	// 3 - 1 = 2
	// nums[0] - 1 = 2
	// j = 2  <--- used for position to swap nums[j] wapped with nums[0]
	// if [nums[i] !== nums[j]]  [3 !== 5]
	//    destructing swap [a,b] = [b,a]
	let i = 0;
	while (i < nums.length) {
		let j = nums[i] - 1;
		if (nums[i] !== nums[j]) {
			[ nums[i], nums[j] ] = [ nums[j], nums[i] ];
		} else {
			i++;
		}
	}
	return nums;
};

console.log(`${cyclic_sort([ 3, 1, 5, 4, 2 ])}`);
console.log(`${cyclic_sort([ 2, 6, 4, 3, 1, 5 ])}`);
console.log(`${cyclic_sort([ 1, 5, 6, 4, 3, 2 ])}`);

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
