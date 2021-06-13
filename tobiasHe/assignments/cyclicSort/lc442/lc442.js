// Problem Statement #

// We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array has some numbers appearing twice, find all these duplicate numbers without using any extra space.

const find_all_duplicates = function(nums) {
	duplicateNumbers = [];
	// TODO: Write your code here
	/* 
    create new array for to hold duplicates
    sort the array using cyclic sort
    swap when nums[i] !== nums[j] where j is nums[i] - 1 (position)
    all the numbers that are duplicates will sit on positions that are incorrect because we are only going through the array once. 
    loop through the array again to find all incorrect position numbers (duplicates) and add it to the array
  */
	let i = 0;
	while (i < nums.length) {
		let j = nums[i] - 1;
		if (nums[i] !== nums[j]) {
			[ nums[i], nums[j] ] = [ nums[j], nums[i] ];
		} else {
			i++;
		}
	}
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== i + 1) {
			duplicateNumbers.push(nums[i]);
		}
	}
	return duplicateNumbers;
};

console.log(find_all_duplicates([ 3, 4, 4, 5, 5 ]));
console.log(find_all_duplicates([ 5, 4, 7, 2, 3, 5, 3 ]));

// Solution
// -----
// function find_all_duplicates(nums) {
//   let i = 0;
//   while (i < nums.length) {
//     j = nums[i] - 1;
//     if (nums[i] != nums[j]) {
//       [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
//     } else {
//       i++;
//     }
//   }

//   duplicateNumbers = [];
//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] !== i + 1) {
//       duplicateNumbers.push(nums[i]);
//     }
//   }

//   return duplicateNumbers;
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(n).

// Space complexity #
// Ignoring the space required for storing the duplicates, the algorithm runs in constant space O(1).
