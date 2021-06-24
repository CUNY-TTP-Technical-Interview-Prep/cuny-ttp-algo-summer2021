//Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.


//Answer 3,40,70
let x = [10,50,20,30,40,70,10]
let y = [100,50,20,70,30,90,10]
let z = [20,30,10,50,80,20,30,90]

const maxSum = (array, k ) =>{
 
  let begin = 0
  let end = k-1
  let maxSum = -1
  let result = []
 
  while( end !== array.length )
  {
    let tempSum = array[begin] + array[begin+1] + array[end]
    if( tempSum > maxSum)
    {
      maxSum = tempSum
      result = [ array[begin] , array[begin+1] , array[end]]
    }
     
    end++
    begin++
  }
  return result
}


let k = 3
console.log(maxSum(x,k))
console.log(maxSum(y,k))
console.log(maxSum(z,k))
