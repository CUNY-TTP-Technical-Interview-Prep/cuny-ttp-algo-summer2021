// Problem Statement #

// Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

/**
 * [[1,3], [5,7], [8,12]] ([4,6])
 * sort the i[0].start
 * [[1,3] , [4, 7], [8,12]]
 *
 * 13 5 7 812
 *   4 6
 *
 * sort the intervals by the start value
 *
 * make a merge array
 *
 * make a start and end
 * start = first intervals start value
 * end = first interval end value
 *
 * loop over the entire intervals array
 *
 * make a variable that holds the iterating interval
 *
 * if(the given start is <= the iterating start && the given end is greater than the iterating start
 *  && the given end is less than the iterating end
 * )
 *
 * start = given start
 * end = the largest ending value
 *
 * else {
 *  push the interval value
 *  start = interval start
 *  end = interval end
 * }
 *
 *
 * push new interval into the merged array
 *
 * return merged array
 *
 * time: O(N)
 * space : O(1)
 *
 *
 * questions and concerns:
 *  This solution assumes the the b(given array ) will start to overlap interval a
 *  should I  account for all4 types of overlapping
 *
 *  is the test array sorted by the starting values already or should i do it in code,
 *
 *  in the case of an empty array, should i just push the given array  into the merged interval array?
 *
 *  in the case that the given array does not overlap any of the intervals arrays, should i treat it as a mutex interval?
 *
 *
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
  // intervals.sort((a, b) => a.start - b.start); // sort//

  let start = intervals[0].start;
  let end = intervals[0].end;

  for (i = 0; i < intervals.length; i++) {
    let interval = intervals[i];

    if (
      new_interval.start <= interval.end && //given start is less than inter start and end, And given end is in the middle of inter start and end
      new_interval.end > interval.start
    ) {
      start = new_interval.start;
      end = Math.max(interval.end, new_interval.end); //end equals the largest of the given and the iterating interval
    } else {
      merged.push(new Interval(start, end)); // push the current start and end
      start = interval.start;
      end = interval.end;
    }
  }

  merged.push(new Interval(start, end));

  return merged;
};

const insert = function (intervals, new_interval) {
  let merged = [];

  let start = intervals[0].start;
  let end = intervals[0].end;

  for (i = 0; i < intervals.length; i++) {
    let interval = intervals[i];

    if (
      new_interval.start <= interval.end &&
      new_interval.end > interval.start
    ) {
      start = new_interval.start;
      end = Math.max(interval.end, new_interval.end);
    } else {
      merged.push(new Interval(start, end));
      start = interval.start;
      end = interval.end;
    }
  }

  merged.push(new Interval(start, end));

  return merged;
};

process.stdout.write("Intervals after inserting the new interval: ");
let result = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 6)
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write("Intervals after inserting the new interval: ");
result = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 10)
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write("Intervals after inserting the new interval: ");
result = insert([new Interval(2, 3), new Interval(5, 7)], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();
