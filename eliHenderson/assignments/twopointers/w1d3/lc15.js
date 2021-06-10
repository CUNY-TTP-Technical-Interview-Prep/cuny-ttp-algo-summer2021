const search_triplets = function (arr) {
  arr.sort();
  let results = [];
  let n = 0;
  var l = arr.length;
  for (var i = 0; i < l; i++) {
    // move i to the next unique elem
    if (i > 0 && arr[i] === arr[i - 1]) {
      // skip same element to avoid duplicate triplets
      continue;
    }
    var j = i + 1,
      k = l - 1;
    while (j < k) {
      if (arr[i] + arr[j] + arr[k] < n) {
        j++;
      } else if (arr[i] + arr[j] + arr[k] > n) {
        k--;
      } else {
        results.push([arr[i], arr[j], arr[k]]);
        //move j to next unique elem
        j++;
        k--;
        while (j < k && arr[j] === arr[j - 1]) {
          j += 1;
        }
      }
    }
  }
  return results;
};

// set two pointers at the front and end of the arr
// loop through the arr
// set a resetting pointer to one after the inc pointer
// while the front and back pointers do not overlap
// if the sum of the pointers is less than 0, move the front up
// if the sum is greater than 0 decrease the back pointer
// if the sum is 0 push the values into the array
// check for duplicates, and continue the loop

// [-1, -1, 0, 0, 1, 1]
//  i             j  k

console.log(search_triplets([-1, -1, 0, 0, 1, 1]));
