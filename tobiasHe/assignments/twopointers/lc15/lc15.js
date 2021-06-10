// Problem Statement #
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
function search_triplets(arr) {
	// TODO: Write your code here
	// given unsorted array, find all triplets that add up to zero, return array with all triplets that sum up to zero
	// sort the array first
	// start from both ends of the array
	//
	triplets = [];

	let sumTarget = 0;

	if (arr.length < 3) {
		return triplets;
	}

	arr.sort((a, b) => a - b);
	for (let i = 0; i < arr.length - 2; i++) {
		if (arr[i] === arr[i - 1]) continue;
		if (arr[i] > sumTarget) {
			//if the first target is already greater than zero and since it's increasing, there's no way to add up to zero
			return triplets;
		}
		let leftPointer = i + 1;
		let rightPointer = arr.length - 1;

		while (leftPointer < rightPointer) {
			if (arr[leftPointer] + arr[rightPointer] + arr[i] === sumTarget) {
				triplets.push([ arr[leftPointer], arr[rightPointer], arr[i] ]);
				while (arr[leftPointer] === arr[leftPointer + 1]) leftPointer++;
				while (arr[rightPointer] === arr[rightPointer - 1]) rightPointer--;
				leftPointer++;
				rightPointer--;
			} else if (arr[leftPointer] + arr[rightPointer] + arr[i] < sumTarget) {
				leftPointer++;
			} else {
				rightPointer--;
			}
		}
	}

	return triplets;
}

console.log(search_triplets([ -3, 0, 1, 2, -1, 1, -2 ])); // -3 ,-2, -1, 0 ,1, 1,  2
console.log(search_triplets([ -5, 2, -1, -2, 3 ]));

// Solution
// -----
// arr.sort((a, b) => a - b);
// const triplets = [];
// for (i = 0; i < arr.length; i++) {
//   if (i > 0 && arr[i] === arr[i - 1]) { // skip same element to avoid duplicate triplets
//     continue;
//   }
//   search_pair(arr, -arr[i], i + 1, triplets);
// }

// return triplets;
// }

// function search_pair(arr, target_sum, left, triplets) {
// let right = arr.length - 1;
// while (left < right) {
//   const current_sum = arr[left] + arr[right];
//   if (current_sum === target_sum) { // found the triplet
//     triplets.push([-target_sum, arr[left], arr[right]]);
//     left += 1;
//     right -= 1;
//     while (left < right && arr[left] === arr[left - 1]) {
//       left += 1; // skip same element to avoid duplicate triplets
//     }
//     while (left < right && arr[right] === arr[right + 1]) {
//       right -= 1; // skip same element to avoid duplicate triplets
//     }
//   } else if (target_sum > current_sum) {
//     left += 1; // we need a pair with a bigger sum
//   } else {
//     right -= 1; // we need a pair with a smaller sum
//   }
// }

// -----

// Sorting the array will take O(N * logN). The searchPair() func will take O(N). As we are calling searchPair() for every number in the input array, this means that overall searchTriplets() will take O(N * logN + N^2), which is asymptotically equivalent to O(N^2).

// Space complexity #
// Ignoring the space required for the output array, the space complexity of the above algorithm will be O(N)O(N) which is required for sorting.
