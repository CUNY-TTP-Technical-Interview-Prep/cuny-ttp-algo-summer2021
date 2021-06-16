// Problem Statement #

// Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

/* 
Precondition:
  Intervals_a: is an array of intervals that are disjoint and sorted by their start value
  Intervals_b: is an array of intervals that are disjoint and sorted by their start value
  - Non empty, same length

Postcondition:
  result: Array containing the intersections of the list

  General Idea:
  Variable explantion:
    aInterval, bInterval: stores the interval from each array
    sortPair: Array that is used to sort each aInterval and bInterval that we process
    intersection: null OR new Interval() -> Variable used to add all the array intersections to result

    While-loop: Iterate as if you were iterating both arrays joined together,
    Grab the next interval from each respective array,
    Place each interval in the sortPair array that will be sorted,
    Store an intersection (if it exists) into the intersection variable,
    LINE 53: Add the intersection to result iff aInterval ∩ bInterval

*/

function merge(intervals_a, intervals_b) {
  const result = [];
  const aLength = intervals_a.length, bLength = intervals_b.length;
  const totalLength = aLength + bLength;

  let j=0, k=0;
  let aInterval = new Interval(0,0),  bInterval = new Interval(0,0);
  let sortPair = [], intersection = null;
  while(j+k < totalLength) {
    if (j < aLength) aInterval = intervals_a[j++];
    if (k < bLength) bInterval = intervals_b[k++];

    sortPair = [aInterval, bInterval];
    sortPair.sort((a,b) => a.start - b.start);
    intersection = getIntersection(sortPair[0], sortPair[1]);
    if (intersection) result.push(intersection);
  }
  return result;
};
// Return null if there is no intersection, otherwise return the actual intersection
function getIntersection(first, second){
  if (first.end >= second.start){
    return new Interval(Math.max(first.start, second.start),  Math.min(first.end, second.end));
  }
  return null;
}

process.stdout.write('Intervals Intersection: ');
let result = merge([new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)], [new Interval(2, 3), new Interval(5, 7)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals Intersection: ');
result = merge([new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)], [new Interval(5, 10)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();









// Solution
// -----
// function merge(intervals_a, intervals_b) {
//   let result = [],
//     i = 0,
//     j = 0;

//   while (i < intervals_a.length && j < intervals_b.length) {
//     // check if intervals overlap and intervals_a[i]'s start time lies within the other intervals_b[j]
//     a_overlaps_b = intervals_a[i].start >= intervals_b[j].start && intervals_a[i].start <= intervals_b[j].end;

//     // check if intervals overlap and intervals_a[j]'s start time lies within the other intervals_b[i]
//     b_overlaps_a = intervals_b[j].start >= intervals_a[i].start && intervals_b[j].start <= intervals_a[i].end;

//     // store the the intersection part
//     if (a_overlaps_b || b_overlaps_a) {
//       result.push(new Interval(Math.max(intervals_a[i].start, intervals_b[j].start),
//         Math.min(intervals_a[i].end, intervals_b[j].end)));
//     }
//     // move next from the interval which is finishing first
//     if (intervals_a[i].end < intervals_b[j].end) {
//       i += 1;
//     } else {
//       j += 1;
//     }
//   }

//   return result;
// }

// -----

// Time complexity #
// As we are iterating through both the lists once, the time complexity of the above algorithm is O(N + M), where ‘N’ and ‘M’ are the total number of intervals in the input arrays respectively.

// Space complexity #
// Ignoring the space needed for the result list, the algorithm runs in constant space O(1).
