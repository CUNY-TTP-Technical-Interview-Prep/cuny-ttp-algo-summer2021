// Problem Statement #

// Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge 
// all necessary intervals to produce a list that has only mutually exclusive intervals.



class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    // were using these in the rest of the code
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}


/**
 * Input: intervals Array and new inerval to insert
 * Output: return new merged interval
 * 
 * Intialize array and index;
 * Initialize while loop and set condition
 * 
 * condtion: while (index < intervals.length and Interval current position at the end is 
 * less then the new interval start)
 * 
 * push to the array we Initialized and increment index by 1 position 
 * 
 * Then Initialize next loop to merge all the intervals that overlap
 * 
 * condition: while (index < intervals.length and Interval current position at the start is 
 *   less then the new interval end)
 * 
 * we set the start of the interval and new interval to the minmum
 * and the end of the interval and new interval to the maximum
 * 
 * increment index by 1 position 
 * 
 * then push the new interval in the array we intiallized
 * 
 * and initalize a third condition
 * 
 * condition: which iterates through the intervals length and pushes the 
 * cureent interval index subarray in the array we intiallized and increment index by 1 position
 * 
 * and we return the array
 */
const insert = function (intervals, new_interval) {
  let merged = [],
      index = 0;
  
    // skip and add to output) all intervals that come before the 'new_interval'
    while (index < intervals.length && intervals[index].end < new_interval.start) {
      merged.push(intervals[index]);
      index++;
    }
  
    // merge all intervals that overlap with 'new_interval'
    while (index < intervals.length && intervals[index].start <= new_interval.end) {
      new_interval.start = Math.min(intervals[index].start, new_interval.start);
      new_interval.end = Math.max(intervals[index].end, new_interval.end);
      index++;
    }
  
    // insert the new_interval
    merged.push(new_interval);
  
    // add all the remaining intervals to the output
    while (index < intervals.length) {
      merged.push(intervals[index]);
      index++;
    }
  
    return merged;
};

// process.stdout.write('Intervals after inserting the new interval: ');
// let result = insert(
//   [],
//   new Interval(4, 6)
// );
// for (i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log();

process.stdout.write('Intervals after inserting the new interval: ');
let result = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 6)
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

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


// const min = Math.min;
// const max = Math.max;

// const insert = function (intervals, new_interval) {
//   let inputLength = intervals.length;
//   let merged = [];
//   let startIdx; // store index value

//   // find merge start index
//   for (let i = 0; i < inputLength; i++) {
//     if(new_interval[0] <= intervals[i][1]){
//       startIdx = i;
//       break;
//     }
//   }

//   let left = intervals.slice(0, startIdx);
//   let endIdx = inputLength;
//   let [ll, rr] = [new_interval[0], new_interval[1]];

//   // merge process
//   for (let i = startIdx; i < inputLength; i++) {
//     let [el, er ] = [intervals[i][0], intervals[i][1]];
//     if(new_interval[1] < el){
//       // if target right < interval left merge ends
//       endIdx = i;
//       break;
//     }
//     ll = mi(ll, el); // each time merge left with min, right with max
//     rr = mx(rr, er);
//   }
//   let right = intervals.slice(endIdx);
//   merged = [...left, ...[[ll, rr]], ...right];

//   return merged;
// };