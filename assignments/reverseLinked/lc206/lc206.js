// Problem Statement #

// Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.

/**
 * Input: head of a Singly LinkedList
 * Output: new head of the reversed LinkedList
 * 
 * Properties: head, next pointer, Node value, null, current position, next position, last position
 * 
 * Pre-Condition: if list empty or only has null
 * 
 * Conditions: while current head not equal to null 
 * 
 * let next equal next value in list then update current next node to null 
 * then null to the head and the head to next
 * 
 * 
 * 
 */

class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }

  get_list() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
};


const reverse = function(head) {
  if(head == null || head < 0) return null;
  let current = head;
  let previous = null;

  while(current !== null){
   let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }


  return previous;
};

let head;
// console.log(head);
head = new Node(2);
// console.log(head); // first node but shows whole list
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
// console.log(head); // whole list
let nullval = head.next.next.next.next.next;
// console.log(nullval); // null
// head = new Node();
// console.log(head);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse(head).get_list()}`)



// Solution
// -----
// const reverse = function(head) {
//   let previous = null;
//   let current = head;

//   while (current !== null) {
//     next = current.next;
//     current.next = previous;
//     previous = current;
//     current = next;
//   }
//   return previous;
// };

// -----

// Time complexity #
// The time complexity of our algorithm will be O(N) where ‘N’ is the total number of nodes in the LinkedList.

// Space complexity #
// We only used constant space, therefore, the space complexity of our algorithm is O(1).
