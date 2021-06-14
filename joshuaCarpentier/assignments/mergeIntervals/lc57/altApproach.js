
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

const min = Math.min;
const max = Math.max;

const insert = function (intervals, new_interval) {
  let inputLength = intervals.length;
  let merged = [];
  let startIdx; // store index value

  // find merge start index
  for (let i = 0; i < inputLength; i++) {
    if(new_interval[0] <= intervals[i][1]){
      startIdx = i;
      break;
    }
  }

  let left = intervals.slice(0, startIdx);
  let endIdx = inputLength;
  let [ll, rr] = [new_interval[0], new_interval[1]];

  // merge process
  for (let i = startIdx; i < inputLength; i++) {
    let [el, er ] = [intervals[i][0], intervals[i][1]];
    if(new_interval[1] < el){
      // if target right < interval left merge ends
      endIdx = i;
      break;
    }
    ll = mi(ll, el); // each time merge left with min, right with max
    rr = mx(rr, er);
  }
  let right = intervals.slice(endIdx);
  merged = [...left, ...[[ll, rr]], ...right];

  return merged;
};


process.stdout.write('Intervals after inserting the new interval: ');
let result = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 6)
);

console.log(result);
// for (i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }