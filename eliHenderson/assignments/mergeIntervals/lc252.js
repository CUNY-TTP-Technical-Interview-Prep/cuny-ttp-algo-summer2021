// Problem Statement #

// Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

/**
 * Return true if all intervals are mut-ex,
 *  return false if all intervals are not mut-ex
 *
 * ? is the intervals sorted
 *
 * I assume that the intervals are not sorted
 *
 * function (intervals){
 *  sort the intervals by the starting values
 *  intervals.sort((a, b) => a.start - b.start)
 *
 *
 *  loop through the intervals
 *  for(let i = 0; i < intervals.length< i++)
 *      check if there are overlapping values if so, return false
//  *      if(interval[i].end > interval[i + 1].start) return false
    wont work because we cant reference the next value of the ending intervale
        //we can start at the second interval and loop back 

        if(interval[i].start < interval[i-1].end)

        //this will be the same comparison, but now we won't hit a null  value
        the start time of the interval can not be overlapped by the end of the former interval
 *
 * if no overlaps are found return true
 * return true
 *
 * }
 *
 *
 * [[1,4], [2, 5], [7, 9]]
 *  we know the the start value
 *  is sorted so i[0].start < i[1].start
 *  but if the end value is greater than
 *  the start value of the next interval
 *  it's overlapping
 * 
 * // 4 > 2 so return false
 *  
 * refactored
 *  2 < 4 return false
 *
 * [[2,4], [6,7], [8, 12]]
 *     //4  !>  6   7 !> 8 return true
 *      6 !< 4 ; 8 !< 7 return true
 * 
 *
 * time: O(N)
 * space: O(1)
 *
 * edge cases:
 *  if only one appointment should i just return true?
 *  if no appointments should i return true?
 *  will the intervals be sorted or can i sort them myself?
 *
 *
 *
 *
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

const can_attend_all_appointments = function (intervals) {
  //sort the appointments by the start time if not already sorted
  intervals.sort((a, b) => a.start - b.start);

  //loop through the appointments
  //   for (let i = 0; i < intervals.length; i++) {
  for (let i = 1; i < intervals.length; i++) {
    //check if there are overlapping values if so, return false
    //this checks if the end of the first overlaps the start of the next
    // //if (intervals[i].end > intervals[i + 1].start) return false;

    if (intervals[i].start < intervals[i - 1].end) return false;
  }
  //return true if none of the ending, overlap the next appointments start times
  return true;
};

const can_attend_all_appointments = (intervals) => {
  intervals.sort((a, b) => a.start - b.start);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start < intervals[i - 1].end) return false;
  }

  return true;
};

console.log(
  `Can attend all appointments: ${can_attend_all_appointments([
    new Interval(1, 4),
    new Interval(2, 5),
    new Interval(7, 9),
  ])}`
);

console.log(
  `Can attend all appointments: ${can_attend_all_appointments([
    new Interval(6, 7),
    new Interval(2, 4),
    new Interval(8, 12),
  ])}`
);

console.log(
  `Can attend all appointments: ${can_attend_all_appointments([
    new Interval(4, 5),
    new Interval(2, 3),
    new Interval(3, 6),
  ])}`
);
