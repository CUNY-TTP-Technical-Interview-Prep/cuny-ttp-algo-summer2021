// Problem Statement #

// Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.

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

/**
 * input:
 * @param {*} head: the head of the linked list
 * 
 * output:
 * previous: that is the head of the reversed linked list
 * 
 * step 1: while loop traverse all the node of the linked lsit
 * step 2: reverse the linked list in the loop and return the node of previous node
 * 
 * variable next, current, previous as the pointer to store the current node and the nodes before and after
 * 
 * while loop to traverse all the node and if the current node is not null keep runnning
 *    store the cuurent.next node to next
 *    store the previous node to the current.next
 *    store the current node to the previous
 *    store the next node to the current.
 * end loop
 * return the previous node that was the last node of the linked list
 */

const reverse = function(head) {
  // TODO: Write your code here
  let current = head;
  let next = null;
  let previous = null;

  while (current !== null){
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
  }

  return previous;
  
};

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

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

/**
 * inputs:
 * @param {*} head: the head of the linked list
 * 
 * outpust:
 * @returns head: the head of the reversed linked list
 * 
 * step 1: use while loop to traverse all the node of the linked list
 * step 2: reverse the linked list the current becrom previous and the next become the current the previous become next
 * 
 * variable: 
 *      next: store the current.next node, current node store the current node, previous node store the previous node
 * 
 *      while the current node is not null keep runnning the loop until the end of the linked list
 *            store the current.next to the next pointer
 *            store the previous node to the current.next node
 *            store the current node to the previous
 *            store the next to the current
 *      end loop
 * 
 * return head
 * 
 * edge case: if the head is null => null
 */
//  const reverse = function(head) {
//   // TODO: Write your code here
//   let next = head.next;
//   let current = head;
//   let previous = null;

//   while(current !== null){
//     next = current.next;
//     current.next = previous;
//     previous = current;
//     current = next;
//   }

//   return previous;
// };