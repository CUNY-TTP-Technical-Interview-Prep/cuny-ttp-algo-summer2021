// Problem Statement #

// Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

/**
 * inputs intervals: have several subarray with positve numbers and the are unsorted
 * 
 * output merged: that not overlapping
 * 
 * step1: sort the array to make it easy to check for overlapping
 * step2: compare the end element for first for with the each element in side subarray if the end less than current start element thare is overlaping
 *        if there is overlapping update that greater end to element to the end
 * step3: if there no overlapping, then push the new interval with start and end and update the new start and end
 * 
 * variable: merged array that be returned
 *  start pointer to point the first element of the subarray
 *  end pointer ot point the end element of the subarray
 * 
 * sort the array for the start element
 * 
 * put the first start element to start pointer 
 * put the first end element to end pointer
 * 
 * for loop to traverse all the element
 *  compare if there is a overlapping when the end is less than current start element
 *        compare the end with the current end elment and update the greater one to the end
 *  else that there is no overlapping
 *      push the start and end to the merged array
 *      update the start as current start
 *      update the end as current end element intervals
 * 
 *  push the last start and end element to the merged
 * return merged
 * 
 * edge case: intervals is null => null
 *            if there is one interval inside intervals return the interval
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


const merge = function(intervals) {
  if(intervals.length < 2) return intervals;
  merged = []
  // TODO: Write your code here
  intervals.sort((a,b) => a.start - b.start);
  let start = intervals[0].start;
  let end = intervals[0].end;

  for(let i = 1; i < intervals.length; i ++){
    if(end >= intervals[i].start){
      end = Math.max(end, intervals[i].end);
    } else{
      merged.push(new Interval(start, end) );
      start = intervals[i].start;
      end = intervals[i].end;
    }
  }
  merged.push(new Interval(start, end));

  return merged;
  
};

merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]); // [[1, 4], [2, 5], [7, 9]]
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`) // [[1, 5], [7, 9]]


merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`) // [[2, 4], [5, 9]]


merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`) // [1, 6]





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

/**
 * inputs: intervals: an 2d array of unsorted number 
 * 
 * output: return a merged 2d array
 * 
 * variables: start, end pointer to traverse the array and compare with the elements
 * 
 * step 1: sort the array
 * step 2: determine if two array is overlapping
 * step 3: merge the arrays
 * 
 * sort the array to have a clear order and determine if the elemments is overlaping 
 * set the first element to start
 *  set the second element to end
 * a for loop to traverse the array and move the end pointer each iteration and starting from second subarray
 *  compare if the current start element is less than the end two array is overlaping
 *    update end to be the greater number between end and current end
 *  if there is not an overlapping
 *    push the start and end to the merged array
 *    move start to the current start
 *    move end to the current end
 * 
 * push the last element to the merge array
 * return the merged array
 * 
 * edge case: if the intervels is null return a null or []
 *            
 *  
 */

//  intervals.sort((a,b) => a.start - b.start);
//  let start = intervals[0].start;
//  let end = intervals[0].end;

//  for(let i = 0; i < intervals.length; i++){
//    if(intervals[i].start <= end){
//      end = Math.max(end, intervals[i].end);
//    }else{
//      merged.push(new Interval(start, end));
//      start = intervals[i].start;
//      end = intervals[i].end;
//    }
//  }

//  merged.push(new Interval(start, end));

//  return merged;