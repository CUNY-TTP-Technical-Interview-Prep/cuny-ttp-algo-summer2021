// Problem Statement #

// Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

/* 
  Precondition:
  intervals: array containing possible overlapping intervals, intervals.length > 1 ?

  Postcondition: 
  Returns an array of mutually exclusive intervals from the original intervals array

  General Idea: 
  Sort all intervals based on their start value,
  Variable explanations:
    merged: array containing all merged arrays
    lastInterval: index of last interval, we make sure to only iterate before up until the second to last interval
    current: ith interval, next: i+1 interval,
  while: Iterate from i -> lastInterval (second to last interval), make comparisons and merge when necessary
    We increment i by 2 when we see an intersection
  
  LINE 47-51: Compare last interval to second to last interval (if it exists), or just add last interval, might be missing an edge case?
*/
function merge(intervals) {
  intervals.sort((a,b) => a.start - b.start);

  const merged = [], lastInterval = intervals.length - 1;
  let i = 0, current = null, next = null;

  while (i < lastInterval) {
    current = intervals[i], next = intervals[++i];
    if(isIntersect(current, next)){
      current = getMerged(current, next); 
      i++;
    }
    merged.push(current);
  }

  if (merged.length){
    current = merged[merged.length-1]; next = intervals[lastInterval];
    next = isIntersect(current, next) ?  getMerged(current, next) : next;
    if (!isEqual(current, next)) merged.push(next);
  }
  return merged;
};

// Helper functions: straightforward
function isIntersect(a,b){
  return a.end > b.start
}

function getMerged(a,b){
  return new Interval(Math.min(a.start,b.start), Math.max(a.end, b.end));
}

function isEqual(a,b){
  return a.start === b.start && a.end === b.end
}

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

merged_intervals = merge([ // [2,4] [5,9]  [6,7]
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
  new Interval(1, 4), // [1,6] [2,6], [3,5]
  new Interval(2, 6), // 
  new Interval(3, 5),
]);
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
