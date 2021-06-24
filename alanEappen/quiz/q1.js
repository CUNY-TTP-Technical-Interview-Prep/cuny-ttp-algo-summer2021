//Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

/*
Given: an array of positive numbers [1,2,3,4] and K =2
Goal: find the maximum subarray of size k


first create a function maxSub() that takes in the 
positive numbers and k

we then compute sum of the first window
let sum = 0
a for loop to add the contents into sum variable
for(let i = 0 i<k i++)
{
    sum+= num[i]
}

we then compute the next windows by removing
the first element of the last windowm and then adding it 

currSum = sum get the currentsum
currSum += num[i] - arr[i-k] removing the first element and adding to currentsum
then we compare both sums and return the max

edge cases{
    if arrray is empty return -1
    if array length is less than k return -1
}

*/


function maxSub(k, arr) {
    let Sum = 0;

    if (arr.length < k || arr.length === null) {
        return -1
    }

    for (let i = 0; i < k; i++) {//First window
        Sum += arr[i];
    }

    let currSum = Sum
    for (let i = k; i < arr.length; i++) {//Second Window
        currSum += arr[i] - arr[i - k];
        Sum = Math.max(Sum, currSum);
    }

    return Sum
}
console.log(
    `Maximum sum of a subarray of size K: ${maxSub(
        4,
        [1, 5, 6, 3, 7, 2] //21
    )}`
);

console.log(
    `Maximum sum of a subarray of size K: ${maxSub(
        4,
        [] //-1
    )}`
);

console.log(
    `Maximum sum of a subarray of size K: ${maxSub(
        4,
        [1, 3, 4] //-1
    )}`
);
