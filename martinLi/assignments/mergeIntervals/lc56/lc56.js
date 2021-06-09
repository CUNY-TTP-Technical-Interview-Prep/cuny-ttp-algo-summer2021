// Problem Statement #

// Given a list of intervals, merge all the overlapping intervals to
// produce a list that has only mutually exclusive intervals.

/*
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/
/*
sort the intervals by start time.


curr_start = intervals[0][0]
curr_end  = intervals[0][1]
for loop(i =0; i <intervals.leng; i++ )

      intervals[i][0] > curr_start 
        intervals[i][1] > curr_end
          curr_end = intervals[i][1]

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

const merge = function (intervals) {
  //console.log("hi");
  if (intervals.length < 2) return intervals;
  merged = [];

  intervals.sort((a, b) => a.start - b.start);
  // console.log(intervals);
  let curr_start = intervals[0].start; //1
  let curr_end = intervals[0].end; //4
  console.log(curr_end + " end " + curr_start + " start ");

  for (let i = 1; i < intervals.length; i++) {
    //2                      3
    if (intervals[i].start > curr_end) {
      // 2> 3
      //   console.log("hi");
      merged.push(new Interval(curr_start, curr_end));
      curr_start = intervals[i].start;
      curr_end = intervals[i].end;
    }
    //[1,4][2,3][6,7]
    /** [1,4] [2, 5] [7,9] */
    // [1,3][2,6]
    //ce=6 cs = 1
    else {
      //
      curr_end = Math.max(curr_end, intervals[i].end);
    }
  }
  merged.push(new Interval(curr_start, curr_end));

  // TODO: Write your code here
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
