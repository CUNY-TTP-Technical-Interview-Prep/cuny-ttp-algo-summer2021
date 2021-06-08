// Problem Statement #
// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

function make_squares(arr) {
	// TODO: Write code here
	// given sorted, return a new array that is also sorted with sqaures of those numbers
	// since it's sorted, the largest values after squared will be at the ends of each pole decreasing towards the middle
	// using two pointer technique we can just loop through the array once
	let squares = [];
	let leftPointer = 0;
	let rightPointer = arr.length - 1;

	while (leftPointer <= rightPointer) {
		if (arr[leftPointer] * arr[leftPointer] > arr[rightPointer] * arr[rightPointer]) {
			squares.push(arr[leftPointer] * arr[leftPointer]);
			leftPointer++;
		} else {
			squares.push(arr[rightPointer] * arr[rightPointer]);
			rightPointer--;
		}
	}
	return squares.reverse();
}

console.log(`Squares: ${make_squares([ -2, -1, 0, 2, 3 ])}`);
4, 1, 0, 4, 3;
console.log(`Squares: ${make_squares([ -3, -1, 0, 1, 2 ])}`);
console.log(`Squares: ${make_squares([ 1, 2, 3, 4, 5 ])}`);

// Solution
// -----
// const n = arr.length;
// squares = Array(n).fill(0);
// let highestSquareIdx = n - 1;
// let left = 0,
//   right = n - 1;
// while (left <= right) {
//   let leftSquare = arr[left] * arr[left],
//     rightSquare = arr[right] * arr[right];
//   if (leftSquare > rightSquare) {
//     squares[highestSquareIdx] = leftSquare;
//     left += 1;
//   } else {
//     squares[highestSquareIdx] = rightSquare;
//     right -= 1;
//   }
//   highestSquareIdx -= 1;
// }

// return squares;

// -----

// Time complexity #
// The above algorithm’s time complexity will be O(N) as we are iterating the input array only once.

// Space complexity #
// The above algorithm’s space complexity will also be O(N); this space will be used for the output array.
