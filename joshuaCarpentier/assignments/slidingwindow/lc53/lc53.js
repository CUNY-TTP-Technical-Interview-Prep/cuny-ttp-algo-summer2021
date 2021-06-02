/*
inputs k pos num a sub array and another array of sub arrays
output maxsum while shifting

k is basically window size across array index

reutn zero or  null if the array length is zero or k is 0

*/

function max_subarray_size_k(k, arr) {

  // OG Attempt
  // let maxSum = 0,
  // winStart = 0,
  // windSum = 0;

  

  // for (let winEnd = 0; winEnd < arr.length; winEnd++){
  //     if(arr[winEnd] == winEnd + 1){
  //       windSum += arr[winEnd];
  //       console.log(windSum)

  //     }

  // }


  //Brute Force Solution
// let maxSum = 0,
//     winSum = 0;

//     for (let i = 0; i < arr.length + 1 - k; i++){
//       winSum = 0;
//       for (let j = i; j < i + k; j++ ){
//         winSum += arr[j];
//       }
//       maxSum = Math.max(maxSum, winSum);
//     }

//     return console.log(maxSum);


  //Better Approach Solution
let maxSum = 0,
winSum = 0,
winStart = 0;

for (let winEnd = 0; winEnd < arr.length; winEnd++ ){
  winSum += arr[winEnd];
  if (winEnd >= k - 1){
    maxSum = Math.max(maxSum, winSum);
    winSum -= arr[winStart];
    winStart += 1;
  }
}
return console.log(maxSum);

}



console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(
    3,
    [2, 1, 5, 1, 3, 2]
  )}`
);
console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(
    2,
    [2, 3, 4, 1, 5]
  )}`
);

console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(
    0,
    [2]
  )}`
);

console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(
    9,
    []
  )}`
);

