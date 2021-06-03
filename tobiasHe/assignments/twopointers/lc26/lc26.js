//Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.

function remove_element(arr, key) {
	// TODO: Write code here
	//find all instances of repeating target of key
	//make a counter to keep track of the repeating instances of key
	//subtract it from arr.length to find new length of arr without "key"

	let keyCounter = 0;

	if (!arr.length) {
		return 0;
	}

	for (const element of arr) {
		if (element === key) {
			keyCounter++;
		}
	}
	return arr.length - keyCounter;
}

console.log(`Array new length: ${remove_element([ 3, 2, 3, 6, 3, 10, 9, 3 ], 3)}`);
console.log(`Array new length: ${remove_element([ 2, 11, 2, 2, 1 ], 2)}`);
console.log(`Array new length: ${remove_element([ 2, 11, 2, 2, 1 ], 1100)}`);

// Solution
// -----
// let nextElement = 0; // index of the next element which is not 'key'
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] !== key) {
//     arr[nextElement] = arr[i];
//     nextElement += 1;
//   }
// }
// return nextElement;

//-----

// Time Complexity #
// The time complexity of the above algorithm will be O(N), where ‘N’ is the total number of elements in the given array.

// Space Complexity #
// The algorithm runs in constant space O(1).
