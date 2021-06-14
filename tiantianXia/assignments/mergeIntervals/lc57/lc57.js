// Problem Statement #

// Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

/**
 * inputs: intervals that contains several interval and they are sorted and do not have overlapping
 *          new_interval: is going to merge to the intervals
 * output: should be a merged array with intervals
 * 
 * step 1: compare and push all the element to the merged that before the new interval 
 * step 2: merged the new interval with current element
 * step 3: push all the element after the merged element
 * 
 * variables: start and end to first store the new interval and compare with other intervals
 *            isOverlapping a boolean to determine if there is a overlapping
 * 
 * while loop to traverse down all the emelemnt in the intervals. if i is less than the intervals.length or 
 * there is a overlapping
 * 
 *    compare if the start is less or equal than current start, so we can determine if need to move to next element
 *         and the end is greater than the current start if true there is a overlapping
 *            compare end and current end then put the greater one to the end
 *            isOverlapping set to true
 * 
 *    else start is greater that the current start
 *      check if the start is less than the  current end so that there will be a overlapping
 *              put start as the current start
 *              compare end and current end and put the greater one to the end 
 *              is overlapping set to true
 *     
 *   if there is no overlapping push the current start and end to the merge
 *    if there is a onverlapping and next start is greater than end
 *        push the start and end to merged
 *    if the last element is overlapping 
 *      push the start and end
 *    increment i
 *           
 *  return merged
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

const insert = function (intervals, new_interval) {
  let merged = [];
  // TODO: Write your code here
  let start = new_interval.start;
  let end = new_interval.end;
  let i = 0;
  let isOverlapping = false;

  while(i < intervals.length || isOverlapping){
    if(i === intervals.length) i -= 1;
    if(start <= intervals[i].start && end >= intervals[i].start){
        end = Math.max(end, intervals[i].end);
        isOverlapping = true;
    }else{
      if(start <= intervals[i].end){
        start = intervals[i].start;
        end = Math.max(end, intervals[i].end);
        isOverlapping = true;
      }
    }
    if(!isOverlapping){
      merged.push(new Interval(intervals[i].start, intervals[i].end));
    }else if (i < intervals.length - 1){
      if(end <= intervals[i + 1].start){
        merged.push(new Interval(start, end));
        isOverlapping = false;
      }
    }else if(i === intervals.length - 1){
      merged.push(new Interval(start, end));
      isOverlapping = false;
    }
    if(i < intervals.length) i ++;
  }

  return merged;
};



process.stdout.write('Intervals after inserting the new interval: ');
let result = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)], // [1,3] [5,7] [8,12] given[4,6] 
  new Interval(4, 6)
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval(); // [1,3][4,7][8,12]
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)], // [1 ,3] [5, 7] [8, 12] given [4, 10]
  new Interval(4, 10)
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval(); // [1,3][4,12]
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([new Interval(2, 3), new Interval(5, 7)], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
  result[i].print_interval(); // [1,4][5,7]
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

/**
 * inputs intervals: a sorted array with no overlapping
 *        new_interval: an array that may overlap with other intervals
 * 
 * outpu: a new merged intervals with no overlapping
 * 
 * variables: merged: to store all the results
 *          start, end store the given interval
 * 
 * for loop to traverse all the element inside the intervals
 *    compare if start is less or eaual than the current start
 *        compare if end is greater that the current start
 *              update end to the greater one
 *        else
 *          push the start and end to the merged
 *    else 
 *        push the current start and end to merged
 * 
 * return merged
 * 
 * edge case intervals is null return null
 */

// const insert = function (intervals, new_interval) {
//   let merged = [];
//   // TODO: Write your code here
//   let start = new_interval.start;
//   let end = new_interval.end;

//   for(let i = 0; i < intervals.length; i ++){
//     if(start < intervals[i].start || start === intervals[i].start){
//       if(end >= intervals[i].start){ // check for overlaping
//         start = Math.min(start, intervals[i].start);
//         end = Math.max(end, intervals[i].end);
//         if( i === intervals.length - 1)
//           merged.push(new Interval(start, end));
//       }else{
//         merged.push(new Interval(start, end));
//         merged.push(new Interval(intervals[i].start, intervals[i].end));
//       }
//     }else{
//       merged.push(new Interval(intervals[i].start, intervals[i].end));
//     }
//   }
//   // merged.push(new Interval(start, end));
//   return merged;
// };