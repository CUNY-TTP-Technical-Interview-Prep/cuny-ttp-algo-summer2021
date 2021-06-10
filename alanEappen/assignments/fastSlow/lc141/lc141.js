// Problem Statement #

//Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.
//Given:
//head
//Goal: to return a boolean to see if the linkedlist has a cycle.
//variables:
//slowPtr, fastPtr is equal to the head
//fastPtr and fastPtr.next exists proceed with the loop
//slowPtr.next() 
//fastPtr.next().next()
//if(slowPtr == fastPtr)
//return true
//if not a cycle 
//return false
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const has_cycle = function (head) {
  let slowPtr = head;
  let fastPtr = head;

  while (fastPtr && fastPtr.next) {

    slowPtr = slowPtr.next
    fastPtr = fastPtr.next.next
    if (slowPtr === fastPtr) {
      return true
    }
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
