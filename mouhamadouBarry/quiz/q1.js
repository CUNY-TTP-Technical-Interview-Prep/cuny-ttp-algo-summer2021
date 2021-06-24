// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
/*
INPUT: 
    - An array of positve numbers
    - A positive k int
OUTPUT:
    - Find the maximum sum of any contigous subarray of size k

Overview:
    - This problem look like a sliding windows problem
        -> startPtr 
        -> endPtr
        -> max
        -> sum

    - I will use a while loop to iteravte through out the array
        ->As the loop goes beyond k, I will subtract the starting pointer
Edge Cases:
    - What if the k is larger then the array?
    - What if the array is empty?
    - I'm I allow to modify the original array?
    - will 0 be considered a positive number? if so, What if k is 0?
        

*/


function returnSum(arr, k){
    
    let startPtr = 0
    let endPtr = 0
    let sum = 0
    let max = 0

    while ( endPtr < arr.length ){
        
        sum = sum + arr[endPtr]
        
        if (endPtr>k-1){
            max = Math.max(max, sum)
            sum = sum - arr[startPtr]
            startPtr++
            // console.log(`the value of startPtr is ${startPtr}`)
        }

        endPtr++
        // console.log(`the value of endPtr is ${endPtr}`)

    }

    return max
}


function main(){
    
    let arr = [ 1,2,3,4,5,6,7,8,9 ] //the largest sum of k=3 is 24
    let k = 3

    console.log(`My array is ${arr} and my k is ${k}`)

    console.log( returnSum(arr,3) )
}

main() 

//I should be getting 24 as my answer but I'm reciving 30