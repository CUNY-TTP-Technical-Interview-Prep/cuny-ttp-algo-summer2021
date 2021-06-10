// Problem Statement #

// Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

/*
[[6, 7], [2, 4], [5, 9]]
Sort: [[2, 4], [5, 9], [6, 7]]

Vars:
  res array (put our result)
  ptr1: arr[0][0] = 2
  ptr2: arr[0][1] = 4

Loop through the rest of the intervals
Have a comparison:
  If it is overlapping: update one of our ptrs and to res (get the lowest and greatest values between the two intervals)
  If it is not overlapping: push the first arr into res and update the two pointers to the next interval in the array

ptr1: arr[1][0] = 5
ptr2: arr[1][1] = 9

The end, the res array should have our merged intervals
*/

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

// [[6, 7], [2, 4], [5, 9]]
const merge = function (intervals) {
  // TODO: Write your code here
  if (intervals.length <= 1) {
    return intervals;
  }

  intervals.sort((a, b) => a.begin - b.begin); // a[0] - b[0]

  merged = [];
  let ptr1 = intervals[0].start; // intervals[0][0];
  let ptr2 = intervals[0].end; // intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];

    // if (interval[0] >= ptr1 && interval[0] <= ptr2) {
    if (interval.start >= ptr1 && interval.start <= ptr2) {
      // If there is overlap
      ptr2 = Math.max(ptr2, interval.end); // Math.max(ptr2, interval[1]);
    } else {
      // If there is no overlap
      merged.push(new Interval(ptr1, ptr2)); // merged.push([ptr1, ptr2]);
      ptr1 = interval.start; // interval[0];
      ptr2 = interval.end; // interval[1];
    }
  }

  merged.push(new Interval(ptr1, ptr2)); // merged.push([ptr1, ptr2]);
  return merged;
};

merged_intervals = merge([
  new Interval(1, 4),
  new Interval(2, 5),
  new Interval(7, 9),
]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`);

merged_intervals = merge([
  new Interval(6, 7),
  new Interval(2, 4),
  new Interval(5, 9),
]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`);

merged_intervals = merge([
  new Interval(1, 4),
  new Interval(2, 6),
  new Interval(3, 5),
]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`);

merged_intervals = merge([new Interval(1, 4), new Interval(1, 4)]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`);

// Solution
// -----
// function merge(intervals) {
//   if (intervals.length < 2) {
//     return intervals;
//   }
//   // sort the intervals on the start time
//   intervals.sort((a, b) => a.start - b.start);

//   const mergedIntervals = [];
//   let start = intervals[0].start,
//     end = intervals[0].end;
//   for (i = 1; i < intervals.length; i++) {
//     const interval = intervals[i];
//     if (interval.start <= end) { // overlapping intervals, adjust the 'end'
//       end = Math.max(interval.end, end);
//     } else { // non-overlapping interval, add the previous interval and reset
//       mergedIntervals.push(new Interval(start, end));
//       start = interval.start;
//       end = interval.end;
//     }
//   }
//   // add the last interval
//   mergedIntervals.push(new Interval(start, end));
//   return mergedIntervals;
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(N * logN), where ‘N’ is the total number of intervals. We are iterating the intervals only once which will take O(N), in the beginning though, since we need to sort the intervals, our algorithm will take O(N * logN).

// Space complexity #
// The space complexity of the above algorithm will be O(N) as we need to return a list containing all the merged intervals. We will also need O(N) space for sorting. For Java, depending on its version, Collections.sort() either uses Merge sort or Timsort, and both these algorithms need O(N) space. Overall, our algorithm has a space complexity of O(N).
