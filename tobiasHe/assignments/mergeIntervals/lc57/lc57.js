// Problem Statement #

// Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

class Interval {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}

	print_interval() {
		process.stdout.write(`[${this.start}, ${this.end}]`);
	}
}

const insert = function(intervals, new_interval) {
	// TODO: Write your code here
	// determine where the new interval will overlap
	// since all the given intervals are not overlapping and sorted we can safely assume that if the start of new interval is greater than the end times
	// then we can push the new interval after the ones that satisfy (new_interval.start > interval.end[...])
	// find relevant intervals that the new interal affects it and insert it

	let merged = [];
	let i = 0;
	let length = intervals.length;
	//edge cases  if empty list of intervals just return newIntervals in the array
	if (length < 1) {
		merged.push(new_interval);
		return merged;
	}
	//find the first place to insert our new_interval which is right before the interval it is overlapping with
	while (i < length && intervals[i].end < new_interval.start) {
		merged.push(intervals[i]);
		i++;
	}

	//merging intervals
	//all the first that is overlapping with second
	while (i < length && intervals[i].start <= new_interval.end) {
		new_interval[0] = Math.min(new_interval[0], intervals[i][0]);
		new_interval[1] = Math.max(new_interval[1], intervals[i][1]);
		i++;
	}
	merged.push(new_interval);

	while (i < length) {
		merged.push(intervals[i]);
		i++;
	}
	return merged;
};

process.stdout.write('Intervals after inserting the new interval: ');
let result = insert([ new Interval(1, 3), new Interval(5, 7), new Interval(8, 12) ], new Interval(4, 6));
for (i = 0; i < result.length; i++) {
	result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([ new Interval(1, 3), new Interval(5, 7), new Interval(8, 12) ], new Interval(4, 10));
for (i = 0; i < result.length; i++) {
	result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([ new Interval(2, 3), new Interval(5, 7) ], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
	result[i].print_interval();
}
console.log();

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
