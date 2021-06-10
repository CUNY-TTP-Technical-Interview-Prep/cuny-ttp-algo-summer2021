// Problem Statement #

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

/**
 * 
 *The window will need to extend while checking to see if there are more than k distinct characters.
 * When that occurs the window will move up once the earliest character type is removed.
 * Determining the longest substring(maxLength) while the window slides forward.
 * 
 * variables: windowStart, maxLength, characterFrequency, windowEnd
 * 
 * edge cases: null, k=0 or ""
 */

function longest_substring_with_k_distinct(str, k) {
  // TODO: Write code here

    let windowStart = 0,
    maxLength = 0,
    characterFrequency = {};

    if(str.length == 0 || k < 1) return 0;

  //extends the window 
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++){
      const rightCharacter = str[windowEnd];  //character at the start of the String

      if(!(rightCharacter in characterFrequency)) { //checks to see if character has occured
        characterFrequency[rightCharacter] = 0; //add the character type if it hasn't 
      }

      characterFrequency[rightCharacter]++;      //increment the character type

      //shrink the sliding window until there are only 2 character types in the frequency dictionary
      while(Object.keys(characterFrequency).length > k) {
        const leftCharacter = str[windowStart]; //character at the start of the window

        characterFrequency[leftCharacter]--; //decrement character occurence

        if(characterFrequency[leftCharacter] === 0 ) { //check if any occurences of the starting character in the frequency dictionary
          delete characterFrequency[leftCharacter];  //if not, remove character type
        }

        windowStart++;      //move window up
      }
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);   //determine max length
    }
    return maxLength
  }

//   let windowStart = 0,
//     maxLength = 0,
//     characterFrequency = {};

//   if(str.length == 0 || k < 1) return 0;

//   //extend the window
//   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//     const rightCharacter = str[windowEnd];  //character at the end of the window

//     if (!(rightCharacter in characterFrequency)) {  //check to see if the character is in the frequency dictionary
//       characterFrequency[rightCharacter] = 0;       //add character type in frequency dictionary
//     }
    
//     characterFrequency[rightCharacter]++;           //increment character occurence

//     while(Object.keys(characterFrequency).length > k) {
//       const leftCharacter = str[windowStart];       //character at the start of the window

//       characterFrequency[leftCharacter]--;          //decrement character occurence

//       if (characterFrequency[leftCharacter] === 0) {   //check if the start character has any occurences in the frequency dictionary
//         delete characterFrequency[leftCharacter];     //if not, remove the character type
//       }

//       windowStart++;                                //move window up
//     }

//     maxLength = Math.max(maxLength, windowEnd - windowStart + 1); // determine the maxLength
    
//   }

//   return maxLength;

// }
  console.log(
    `Length of the longest substring: ${longest_substring_with_k_distinct(
      'araaci',
      2
    )}`
  );
  console.log(
    `Length of the longest substring: ${longest_substring_with_k_distinct(
      'araaci',
      1
    )}`
  );
  console.log(
    `Length of the longest substring: ${longest_substring_with_k_distinct(
      'cbbebi',
      3
    )}`
  );

// Solution
// -----
// let windowStart = 0,
// maxLength = 0,
// charFrequency = {};

// // in the following loop we'll try to extend the range [window_start, window_end]
// for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
// const rightChar = str[windowEnd];
// if (!(rightChar in charFrequency)) {
//   charFrequency[rightChar] = 0;
// }
// charFrequency[rightChar] += 1;
// // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
// while (Object.keys(charFrequency).length > k) {
//   const leftChar = str[windowStart];
//   charFrequency[leftChar] -= 1;
//   if (charFrequency[leftChar] === 0) {
//     delete charFrequency[leftChar];
//   }
//   windowStart += 1; // shrink the window
// }
// // remember the maximum length so far
// maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// }

// return maxLength;
