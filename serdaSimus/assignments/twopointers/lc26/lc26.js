// Problem Statement #
// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

/*
  SOLUTION #1
	input: arr: unsorted array.
	input2: key:interger

	setup:
		ptr to start of arr.
		ptr to end of arr.
		swap_mechanism
	
	process:
		while loop(ptrStar <= ptrEnd):
			if(elemnt[end]== key)
				move ptrEnd to -1
			else:
				if(elem[start] == key):
					swap(elem[start] with elem[end])
					pop()
					move (startPtr by 1)
					move (endPtr by -1)
				else
					move startPtr by +

*/

// In-class, group solution Serda & Tiantian
// Swap() and pop().
function remove_element(arr, key) {
  // TODO: Write code here
  if (!arr.length) return null;

  let windowStart = 0;
  let windowEnd = arr.length - 1;

  // Tc: O(n) where n is the size of the array.
  // Sc: O(3) which essentially is O(1) or constant space.
  while (windowStart <= windowEnd) {
    if (arr[windowEnd] === key) {
      windowEnd--;
      arr.pop();
    } else {
      if (arr[windowStart] == key) {
        let temp = arr[windowStart]; //O(1)
        arr[windowStart] = arr[windowEnd];
        arr[windowEnd] = temp;

        windowEnd--;
        arr.pop();
        windowStart++;
      } else {
        windowStart++;
      }
    }
  }
  return arr.length;
}

/* 
SOLUTION #2
at home: solution, no pointer
but shift(), push(), pop()

Tc: O(n) where n is size of arr
Sc: O(n) because of shift() operations on an array are O(n)
push O(1) * every non-key item in the array O(n) -> O(2n) >> O(n)

JS arrays are technically hash maps where the key is the index.
so these are technically O(1 ) operations in JS.
*/

function remove_element2(arr, key) {
  // TODO: Write code here
  if (!arr.length) return null;

  let arrLength = arr.length;
  // loop is based on the orignal size of the array.
  // the number of elements we should visit.
  for (let index = 0; index < arrLength; index++) {
    // here we only have to check the first item.
    if (arr[0] === key) {
      arr.shift();
    } else {
      arr.push(arr.shift());
    }
  }
  return arr.length;
}

console.log(
  `Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`
);
console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`);

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
