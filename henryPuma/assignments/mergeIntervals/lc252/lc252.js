// Problem Statement #

// Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

// Precondition: 
// intervals: array containing a collection of intervals, length > 1
// Postcondition:
// Returns true when none of the intervals intersect, false once we find intersecting intervals
/* General Idea: Iterate over the intervals array with the assumption that none of them are intersecting
  Once you find an intersecting interval, exit early by returning false
  Process: 
  Sort intervals by leftmost/start values,
  Iterate index (i) until the second to last interval <=> i < intervalLength - 1
  Make comparisons with current (i) and next interval (i+1),  
  With each comparison check if current interval oversteps into next interval,
  If we end up iterating until second to last interval and haven't found an intersection, 
  then return true by default
*/
function can_attend_all_appointments(intervals) {
  let intervalLength = intervals.length; // Store interval length to reuse later once more
  intervals.sort((a, b) => a.start - b.start); // Sort all the intervals by their left/start value
  // we only iterate until the second to last interval so we can compare it to i+1 (last interval)
  const lastInterval = --intervalLength;
  let i = 0; // Variable used to keep track of current node (i)
  // While intervals[i] is not the second to last interval in the array
  while (i < lastInterval) {
    // intervals[i] goes over the next interval <=> goes over interval[i+1], there is an intersection
    if (intervals[i].end > intervals[i+1].start) return false;
    i++;
  }
  return true;
};


console.log(`Can attend all appointments: ${can_attend_all_appointments([
  new Interval(1, 4),
  new Interval(2, 5),
  new Interval(7, 9),
])}`); // Intersect, false

console.log(`Can attend all appointments: ${can_attend_all_appointments([
  new Interval(6, 7),
  new Interval(2, 4),
  new Interval(8, 12),
])}`); // No intersect true

console.log(`Can attend all appointments: ${can_attend_all_appointments([
  new Interval(4, 5),
  new Interval(2, 3),
  new Interval(3, 6),
])}`); // Intersect, false


// Solution
// -----
// function can_attend_all_appointments(intervals) {
//   intervals.sort((a, b) => a.start - b.start);
//   for (i = 1; i < intervals.length; i++) {
//     if (intervals[i].start < intervals[i - 1].end) {
//       // please note the comparison above, it is "<" and not "<="
//       // while merging we needed "<=" comparison, as we will be merging the two
//       // intervals having condition "intervals[i][start] === intervals[i - 1][end]" but
//       // such intervals don't represent conflicting appointments as one starts right
//       // after the other
//       return false;
//     }
//   }
//   return true;
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(N*logN), where ‘N’ is the total number of appointments. Though we are iterating the intervals only once, our algorithm will take O(N * logN) since we need to sort them in the beginning.

// Space complexity #
// The space complexity of the above algorithm will be O(N), which we need for sorting. For Java, Arrays.sort() uses Timsort, which needs O(N) space.
