/**
 * Problem Given a sorted array, create a new array containing squares of all the numbers
 * of the input array in the sorted order
 *
 * questions:
 *  Can i make a new array
 *  what to do if the array is empty
 *  how to handle invalid inputs
 *
 *
 *
 *
 * over view
 *
 * make a new array to store the value
 * have a pointer at the left and right
 *  the beginning and end of the array
 * while left never goes beyond right
 * set values to hole arr value squared
 * if the right squared value is bigger or the same as left squared value
 * insert that squared value into the front of the array
 * else insert the left value
 *
 * return the new array
 *
 *
 */

function make_squares(arr) {
  const squares = [];
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let leftSquared = arr[left] ** 2;
    let rightSquared = arr[right] ** 2;
    if (leftSquared <= rightSquared) {
      squares.unshift(rightSquared);
      right--;
    } else {
      squares.unshift(leftSquared);
      left++;
    }
  }

  return squares;
}

function make_squares(arr) {
  const squares = []; // make a new array to store the values
  let left = 0; // pointer for the start of the array
  let right = arr.length - 1; //pointer for the end

  //loop until the left is less than or equal to the right
  while (left <= right) {
    // <= just in case there is an odd arr.length
    //set two vars that store the squared array value for ease
    let leftSquared = arr[left] ** 2;
    let rightSquared = arr[right] ** 2;

    //insert the largest value into the new array from the front
    if (leftSquared <= rightSquared) {
      squares.unshift(rightSquared);
      right--; //move the pointer down
    } else {
      squares.unshift(leftSquared);
      left++; //move the left pointer up
    }
  }
  //return the new array
  return squares;
}

console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);

//this solution may be o(n^2) so this is another solution that i have found online
//I say that it is O(n^2) because using unshift is O(N) already , using in the while loop
// can make it O(N^2) that being said, while testing, My solution with unshift is still
// faster, but in the worst case, the bottom solution will out perform mine

function make_squares(arr) {
  const n = arr.length;
  squares = Array(n).fill(0);
  let highestSquareIdx = n - 1;

  let left = 0;
  let right = n - 1;

  while (left <= right) {
    let leftSquared = arr[left] ** 2,
      rightSquared = arr[right] ** 2;

    if (leftSquared > rightSquared) {
      squares[highestSquareIdx] = leftSquared;
      left++;
    } else {
      squares[highestSquareIdx] = rightSquared;
      right--;
    }

    highestSquareIdx -= 1;
  }

  return squares;
}

function make_squares(arr) {
  const n = arr.length;
  squares = Array(n).fill(0);
  let highestSquareIdx = n - 1;

  let left = 0;
  let right = n - 1;

  while (left <= right) {
    let leftSquared = arr[left] ** 2,
      rightSquared = arr[right] ** 2;

    if (leftSquared < rightSquared) {
      squares[highestSquareIdx] = rightSquared;
      right--;
    } else {
      squares[highestSquareIdx] = leftSquared;
      left++;
    }

    highestSquareIdx--;
  }

  return squares;
}
