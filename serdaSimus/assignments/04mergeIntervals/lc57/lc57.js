// Problem Statement #

// Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.



/*
Problem Statement #
Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

Example 1:

Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
Output: [[1,3], [4,7], [8,12]]
Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].

Example 2:

Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
Output: [[1,3], [4,12]]
Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].

Example 3:

Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
Output: [[1,4], [5,7]]
Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4].
*/


class Interval {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}

	print_interval() {
		process.stdout.write(`[${this.start}, ${this.end}]`);
	}
}
/* Solution:
	loop intervals:
		check if newElem.start is less than currElem.start
			update current elem. start.
		check if newElem. is less than current.end
			check if new.end is less/equal to current.end
      

      *** I am still trying to wrap my head around this.
      I have started reading up on the solution and leetcode.
      when i have my own solution I will update this.
      The approach of just rewriting the code hasn't done much for me.
      reverse engineering is taking a bit long.
      
*/
const insert = function(intervals, new_interval) {
	let merged = [];
	// TODO: Write your code here
	for(let index=0; index<intervals.length; index++){
		let current = intervals[index]
		let start, end;
		if(new_interval.start > current.end){
			merged.push(current)
		}else{
			if(new_interval.start <= current.start){
				// it means new Interval covers this
				let start = 
			}else{
        // 
			} 
		}

	}

	return merged;
};























// Test Cases:
process.stdout.write('Intervals after inserting the new interval: ');
let result = insert([
	new Interval(1, 3),
	new Interval(5, 7),
	new Interval(8, 12),
], new Interval(4, 6));
for (i = 0; i < result.length; i++) {
	result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([
	new Interval(1, 3),
	new Interval(5, 7),
	new Interval(8, 12),
], new Interval(4, 10));
for (i = 0; i < result.length; i++) {
	result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([new Interval(2, 3),
new Interval(5, 7),
], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
	result[i].print_interval();
}
console.log();



// class Interval {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }

//   print_interval() {
//     process.stdout.write(`[${this.start}, ${this.end}]`);
//   }
// }

// const insert = function (intervals, new_interval) {
//   let merged = [];
//   // TODO: Write your code here

//   return merged;
// };

// process.stdout.write('Intervals after inserting the new interval: ');
// let result = insert(
//   [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
//   new Interval(4, 6)
// );
// for (i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log();

// process.stdout.write('Intervals after inserting the new interval: ');
// result = insert(
//   [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
//   new Interval(4, 10)
// );
// for (i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log();

// process.stdout.write('Intervals after inserting the new interval: ');
// result = insert([new Interval(2, 3), new Interval(5, 7)], new Interval(1, 4));
// for (i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log();

// Solution
// -----
// function insert(intervals, new_interval) {
//   let merged = [],
//     i = 0;

//   // skip and add to output) all intervals that come before the 'new_interval'
//   while (i < intervals.length && intervals[i].end < new_interval.start) {
//     merged.push(intervals[i]);
//     i += 1;
//   }

//   // merge all intervals that overlap with 'new_interval'
//   while (i < intervals.length && intervals[i].start <= new_interval.end) {
//     new_interval.start = Math.min(intervals[i].start, new_interval.start);
//     new_interval.end = Math.max(intervals[i].end, new_interval.end);
//     i += 1;
//   }

//   // insert the new_interval
//   merged.push(new_interval);

//   // add all the remaining intervals to the output
//   while (i < intervals.length) {
//     merged.push(intervals[i]);
//     i += 1;
//   }

//   return merged;
// }

// -----

// Time complexity #
// As we are iterating through all the intervals only once, the time complexity of the above algorithm is O(N), where ‘N’ is the total number of intervals.

// Space complexity #
// The space complexity of the above algorithm will be O(N) as we need to return a list containing all the merged intervals.
