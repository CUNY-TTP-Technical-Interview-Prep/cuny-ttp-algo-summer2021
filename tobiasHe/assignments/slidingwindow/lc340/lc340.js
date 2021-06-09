// Problem Statement #

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

function longest_substring_with_k_distinct(str, k) {
	// TODO: Write code here
	// given k distinc characters find longest continous string that has k distinct characters
	// make object that holds the frequencies of chars in string

	// araaci     2
	// pointer left ,  pointer right
	// object = {}  a = 1 ,
	// increment right pointer
	// object {} a = 1, r = 1  size : 2
	// increment right pointer
	// object{} a = 2 r = 1 size: 2
	// increment right poitner
	// object {} a =3 r = 1 size : 2  <= 2
	// increment right pointer
	// object a = 3 r = 1 c = 1 size : 3      keeping track of the size of the substring    (right - left + 1)  longest = Math.max(longest, (right - left + 1) )

	// object[leftpointer]--
	// increment left pointer

	let frequencies = {};
	let longest = 0;
	let windowStart = 0;

	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		let char = str.charAt(windowEnd);
		if (!frequencies[char]) {
			frequencies[char] = 1;
		} else {
			frequencies[char]++;
		}
		while (Object.keys(frequencies).length > k) {
			let previousChar = str[windowStart];
			frequencies[previousChar]--;
			if (frequencies[previousChar] === 0) {
				delete frequencies[previousChar];
			}
			windowStart++;
			longest = Math.max(longest, windowEnd - windowStart + 1);
		}
	}
	longest = Math.max(str.length - windowStart, longest);
	return longest;
}

// araa 4
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('aaaaa', 2)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('aaaaci', 2)}`);
// aa 2
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`);

//cbbeb 4
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('bacc', 2)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('abaccc', 2)}`);

// Solution
// -----
// let windowStart = 0,
// maxLength = 0,
// charFrequency = {};

// // in the following loop we'll try to extend the range [window_start, window_end]
// for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
// const rightChar = str[windowEnd];
// if (!(rightChar in charFrequency)) {
//   charFrequency[rightChar] = 0;
// }
// charFrequency[rightChar] += 1;
// // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
// while (Object.keys(charFrequency).length > k) {
//   const leftChar = str[windowStart];
//   charFrequency[leftChar] -= 1;
//   if (charFrequency[leftChar] === 0) {
//     delete charFrequency[leftChar];
//   }
//   windowStart += 1; // shrink the window
// }
// // remember the maximum length so far
// maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// }

// return maxLength;
