// Problem Statement
// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.



  /**
   * 
   * Input: Array of positive numbers & a positive num k
   * Output: Sum
   *    
   * find sum of any contiguous subarray compare to k 
   * 
   * Naive Approach
   * --------------- 
   * Variables: 
   * 
   * 
   */
   console.log(`\n ------- Test Case -------- `);

const maxSum = (arr, k) =>{
    console.log(`${arr}`)
    if(!arr.length) return k
    


    let totalSum =0;

    for(let i=0; i<arr.length; i++){
        // if(k === 0) {
        //     //check if array has 0
        // }
        //  if(arr.length == 1)  arr[i] 
           
        console.log(`TotalSum After: ${totalSum}`)

        totalSum += arr[i];
        console.log(`TotalSum ${totalSum}`)

        if(totalSum === k ){
            return totalSum;
        }

    }
    return totalSum; // always return outside of loop
    // console.log(totalSum)


}



   console.log(`\n ------- Edge Case -------- `);
   console.log(`Case 01 Single Element: ${maxSum([2], 10)}`)
   console.log(`Case 02 Positive Element: ${maxSum([1, 4, 5, 9], 10)}`)
   console.log(`Case 03 No Element: ${maxSum([], 10)}`)
   console.log(`Case 04 No K Element: ${maxSum([1, 4, 5, 9, 10], 0)}`)




  /**
   * 
   *
   * Optimal Approach
   * --------------- 
   * Variables: 
   * 
   * 
   */