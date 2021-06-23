// Problem Statement #

// Design a class to calculate the median of a number stream. The class should have the following two methods:

//   1. insertNum(int num): stores the number in the class
//   2. findMedian(): returns the median of all numbers inserted in the class

// If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.



  /**
   * 
   * Input: 
   * Output: 
   *  
   * Naive Approach
   * --------------- 
   * Variables: 
   * 
   * 
   */
class MedianOfAStream {
  constructor() {
    this.a = [];
}

insert_num(num) {
    this.a.push(num);
}

find_median() {
    this.a.sort((x, y) => x - y);
    let n = this.a.length;
    let m = n >> 1;
    return n & 1 ? this.a[m] : (this.a[m - 1] + this.a[m]) / 2;
}
}

var medianOfAStream = new MedianOfAStream();
medianOfAStream.insert_num(3);
medianOfAStream.insert_num(1);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(5);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(4);
console.log(`The median is: ${medianOfAStream.find_median()}`);

console.log(medianOfAStream)
console.log(`\n ------- Edge Cases ----------`)



  /**
   *  
   * Optimal Approach
   * --------------- 
   * Variables: 
   * 
   * 
   */