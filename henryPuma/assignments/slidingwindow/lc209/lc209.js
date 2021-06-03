
// S: int > 0
// Arr: arr.length >= 0
function smallest_subarray_with_given_sum(s, arr) {
  // Arr.length == 0
  if (!arr.length) return 0;
  // let startWindow: the start of a subarray
  // let i: index of the current value in our Array
  
  // let arraySum : Store the overall sum of our sub array
  // let minLength : the minimum length of our subarray where arraySum >= s
  // let subLength: the length of the subarray
  // [1 ,3 ,4, 4, 7]     s=5
  // TODO: Write code here
  let startWindow=0, i=0, arraySum=0, subLength=0;

  let minLength =  Number.MAX_SAFE_INTEGER;
  const arrLength = arr.length;
 
  while( i < arrLength){
    arraySum += arr[i];
    subLength +=1; 
    if (arraySum >= s){
      minLength = subLength < minLength ? subLength : minLength;
      arraySum -= arr[startWindow];
      startWindow += 1;
      subLength -= 1;
    }
    i+=1;
  }
  return subLength;
}

console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    7,
    [2, 1, 5, 2, 3, 2]
  )}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    7,
    [2, 1, 5, 2, 8]
  )}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    8,
    [3, 4, 1, 1, 6]
  )}`
);

// Solution
// -----
// let windowSum = 0,
// minLength = Infinity,
// windowStart = 0;

// for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
// windowSum += arr[windowEnd]; // add the next element
// // shrink the window as small as possible until the 'window_sum' is smaller than 's'
// while (windowSum >= s) {
//   minLength = Math.min(minLength, windowEnd - windowStart + 1);
//   windowSum -= arr[windowStart];
//   windowStart += 1;
// }
// }

// if (minLength === Infinity) {
// return 0;
// }
// return minLength;
