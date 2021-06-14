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

const merge = function (intervals) {
  merged = [];
  // TODO: Write your code here
  //edge: 1 item, no item.
  if (intervals.length == 1 || !intervals.length) return intervals;

  // O(nlogn) sort
  intervals.sort((a, b) => a.start - b.start);

  // assign the first interval as previous:
  merged.push(intervals[0]);

  // visit all subsequent intervals to find/merge overlapping intervals.
  for (let index = 1; index < intervals.length; index++) {
    let previousPtr = merged.pop();

    // point the currentPtr to the element of intervals at the current index of the loop.
    let currentPtr = intervals[index];

    //comparisons: is previous last index, more than current's first index.
    if (previousPtr.end < currentPtr.start) {
      merged.push(previousPtr);
      merged.push(currentPtr);
      // inserting the last item

      continue;
    } else {
      if (previousPtr.end < currentPtr.end) {
        // push into merge [prv.start, current.end]
        merged.push(new Interval(previousPtr.start, currentPtr.end));
      } else {
        // meaning previous end is more than current.end, previous starts earlier, ends later.
        merged.push(previousPtr);
        continue;
      }
    }
  }
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
