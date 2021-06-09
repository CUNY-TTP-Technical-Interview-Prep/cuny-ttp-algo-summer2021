// Problem Statement #

// Given a list of intervals, merge all the overlapping intervals to produce a 
// list that has only mutually exclusive intervals.

/**
 * Input: take in a array of objects 
 * 
 * before you loop sort the values 
 * 
 * loop through array of objects and check value range and compare
 * to other index to see if ranges overlap and merge together 
 * to create a new range
 * 
 * so for the first pair check which number is the lowest and highest
 * and set them to start and end and as we iterate update the start and end
 * if the lowest and highest value change
 * 
 * whats considered overlapping
 Something like [1,4] and [4,5] are considered overlapping since 4 = 4
 *  
 * Output: return the new array with the merged range
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
  //pre condition
  if(intervals.length < 2){
      return intervals;
  }
  // ?
  intervals.sort((a, b) =>{
    a.start - b.start
  });

  const mergedIntervals = [];

  let start = intervals[0].start,
  end =intervals[0].end ;

  for (i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    // overlapping intervals, adjust the 'end
    if (interval.start <= end){
            end = Math.max(interval.end, end);

    }
     // non-overlapping interval, add the previous interval and reset
     else {
            mergedIntervals.push(new Interval(start, end));
            start = interval.start;
            end = interval.end;
          }
        }

  // add the last interval
  mergedIntervals.push(new Interval(start, end));

  return mergedIntervals;
};



merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
console.log([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]); // array of objects
result = "";

for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)



// Time complexity #
// The time complexity of the above algorithm is O(N * logN), where ‘N’ is the total number of intervals. We are iterating the intervals only once which will take O(N), in the beginning though, since we need to sort the intervals, our algorithm will take O(N * logN).

// Space complexity #
// The space complexity of the above algorithm will be O(N) as we need to return a list containing all the merged intervals. We will also need O(N) space for sorting. For Java, depending on its version, Collections.sort() either uses Merge sort or Timsort, and both these algorithms need O(N) space. Overall, our algorithm has a space complexity of O(N).
