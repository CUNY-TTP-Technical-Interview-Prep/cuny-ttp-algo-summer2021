// Problem Statement
// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

//this is a sliding window problem, with the need to find a subarray
//Initialize a startwindow in order to begin the window
//Initialize a max sum to return after it goes through the whole window
//Inititalize a temp sum to keep track of the current sum
//use a loop to iterate through the array and increase the end window and decrease the start window 
//While comparing the sums to determine whether max sum should be changed to the temp sum

//variables: startWindow, maxSum, tempSum, endWindow

//edge case: if empty array, return -1

const maxSubarray = (k, arr) => {
    let startWindow = 0;
    let tempSum = 0;
    let maxSum = 0;

    if(arr.length < 0) return -1;

    for( let endWindow = 0; endWindow < arr.length; endWindow++) {
        
        tempSum += arr[endWindow];

        if(endWindow >= k -1){
            maxSum = Math.max(maxSum, tempSum);
            tempSum -= arr[startWindow];
            startWindow++;
        }
    }

    return maxSum;
}

console.log(maxSubarray(3, [4, 7, 8, 10, 3]));
console.log(maxSubarray(4, []));