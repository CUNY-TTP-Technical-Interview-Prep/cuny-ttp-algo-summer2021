// Problem Statement #

// Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

/**
 * sort the intervals based on the start value
 * if the the end of the first array is less than the end of the second array
 * "merge" the arrays by making th end of a new array that needs to be pushed into the results list
 * the new array's end will be the largest end out of the two original arrays.
 *
 *
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
  merged = [];
  // TODO: Write your code here
  if (intervals.length < 2) {
    return intervals;
  }

  intervals.sort((a, b) => a.start - b.start);

  const merged = [];
  let start = intervals[0].start;
  let end = intervals[0].end;

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval.start <= end) {
      end = Math.max(interval.end, end);
    } else {
      merged.push(new Interval(start, end));
      start = interval.start;
      end = interval.end;
    }
  }

  merged.push(new Interval(start, end));
  return merged;
};
const merge = function (intervals) {
  merged = [];
  // TODO: Write your code here
  if (intervals.length < 2) {
    return intervals;
  }

  intervals.sort((a, b) => a.start - b.start);

  const merged = [];
  let start = intervals[0].start;
  let end = intervals[0].end;

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval.start <= end) {
      end = Math.max(interval.end, end);
    } else {
      merged.push(new Interval(start, end));
      start = interval.start;
      end = interval.end;
    }
  }

  merged.push(new Interval(start, end));
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

// var merge = function(intervals) {
//     intervals.sort((a,b) => a[0] - b[0]);
//     let result = [];
//     for(let i=0; i<intervals.length; i+=1) {
//         if (result.length === 0) {
//             result.push(intervals[i]);
//         } else {
//             let isMerged = false;
//             for(let j=0; j<result.length; j+=1) {
//                 if (intervals[i][0] <= result[j][1]) {
//                     result[j] = [result[j][0], Math.max(result[j][1], intervals[i][1])];
//                     isMerged = true;
//                     break;
//                 }
//             }
//             if (!isMerged) {
//                 result.push(intervals[i]);
//             }
//         }
//     }
//     return result;
// };

// var merge = function(intervals) {
//     if (intervals.length <= 1) return intervals;
//     intervals.sort((a, b) => a[0] - b[0])
//     let res = [];
//     let currentInterval = intervals[0];
//     res.push(currentInterval);
//     for (let interval of intervals) {
//         let currentIntervalBeg = currentInterval[0];
//         let currentIntervalEnd = currentInterval[1];
//         let nextIntervalBeg = interval[0];
//         let nextIntervalEnd = interval[1];
//         if (currentIntervalEnd >= nextIntervalBeg) {
//             currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
//         } else {
//             currentInterval = interval;
//             res.push(currentInterval)
//         }
//     }
//     return res;
// };
