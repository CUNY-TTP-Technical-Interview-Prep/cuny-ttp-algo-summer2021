// Problem Statement #

// Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

/**
 * input: head: the head of the single linkedlist
 * output: ture if the linkedlist has a cycle or false not
 * 
 * variables: fastPointer, slowPointer: to implement a fast and slow algorithm fastPointer go 2 node for each 
 *            iteration while slow go 1. set both begin at head
 * 
 * use a while loop to traverse the linked list. end the loop if the fast pointer is null.
 *  update slow pointer pass 1 node
 *  update fast pointer pass 2 node
 *  if the next node of faster pointer is slow pointer
 *    return true for has cycle
 * 
 * return false for 
 * 
 * edge case head is null => false
 * 
 * Time complexity O(n) space complexity o(1)
 */

class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const has_cycle = function(head) {
  // TODO: Write your code here
  let fastPointer = head,
      slowPointer = head;
  
  while(fastPointer !== null){
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;

      if(fastPointer === slowPointer)
        return true;
  }
  return false
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)




// Solution
// -----
// function has_cycle(head) {
//   let slow = head,
//     fast = head;
//   while (fast !== null && fast.next !== null) {
//     fast = fast.next.next;
//     slow = slow.next;
//     if (slow === fast) {
//       return true; // found the cycle
//     }
//   }
//   return false;
// }
// -----

// Time Complexity #
// As we have concluded above, once the slow pointer enters the cycle, the fast pointer will meet the slow pointer in the same loop. Therefore, the time complexity of our algorithm will be O(N) where ‘N’ is the total number of nodes in the LinkedList.

// Space Complexity #
// The algorithm runs in constant space O(1).
