// Problem Statement #

// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

/*
I still have no clue how this works exactly.
I am reading on the solutions on leetcode for this problem.
https://leetcode.com/problems/linked-list-cycle-ii/solution/

*/

// originally went with copying 3x, still didn't work for me.
// still did not understand it.
// after some google, and youtube video,
// someone on YouTube explained in layman's term
// the following solution is what I understood
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const find_cycle_start = function (head) {
  // TODO: Write your code here
  // edge cases: if (!head || !head.next) return null;
  //confirm there is a cycle
  let fastPtr = head;
  let slowPtr = head;

  while (fastPtr !== null && fastPtr.next !== null) {
    slowPtr = slowPtr.next; // moves by 1 node.
    fastPtr = fastPtr.next.next; // moves by 2 nodes.
    if (slowPtr === fastPtr) break; // check if the 2 ptrs have met.
    //at the break, fast and slow are pointing to the same node.
    //if there is a cycle.
  }
  // find the length of the cycle
  let cycleLength = 0; // my counter
  while (true) {
    slowPtr = slowPtr.next; // moves by 1 node.
    cycleLength++;
    if (slowPtr === fastPtr) break;
  }
  // use length to find the head of the cycle using Floyd's H&T
  let ptr1 = head;
  let ptr2 = head;
  for (let i = 0; i < cycleLength; i++) {
    ptr2 = ptr2.next; // move ptr cycleLength ahead.
  }
  while (ptr1 !== ptr2) {
    ptr1 = ptr1.next; // move these pointers by 1.
    ptr2 = ptr2.next; // move these pointers by 1.
  }

  return ptr1 === ptr2 ? ptr1 : null;
};

// function find_cycle_start(head) {
//   // checking if head points to null or is null itself.
//   if (!head || !head.next) return null;

//   cycle_length = 0;
//   // find the LinkedList cycle
//   let slow = head,
//     fast = head;
//   while (fast !== null && fast.next !== null) {
//     fast = fast.next.next;
//     slow = slow.next;
//     if (slow === fast) {
//       // found the cycle
//       cycle_length = calculate_cycle_length(slow);
//       break;
//     }
//   }
//   return find_start(head, cycle_length);
// }

// function calculate_cycle_length(slow) {
//   let current = slow,
//     cycle_length = 0;
//   while (true) {
//     current = current.next;
//     cycle_length += 1;
//     if (current === slow) {
//       return cycle_length; // wouldn't be current - 1?
//     }
//   }
// }

// function find_start(head, cycle_length) {
//   let pointer1 = head,
//     pointer2 = head;
//   // move pointer2 ahead 'cycle_length' nodes
//   while (cycle_length > 0) {
//     pointer2 = pointer2.next;
//     cycle_length -= 1;
//   }
//   // increment both pointers until they meet at the start of the cycle
//   while (pointer1 !== pointer2) {
//     pointer1 = pointer1.next;
//     pointer2 = pointer2.next;
//   }

//   return pointer1;
// }
head = null;
// console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);
head = new Node(1);
// console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head;

// Solution
// -----
// function find_cycle_start(head) {
//   cycle_length = 0;
//   // find the LinkedList cycle
//   let slow = head,
//     fast = head;
//   while ((fast !== null && fast.next !== null)) {
//     fast = fast.next.next;
//     slow = slow.next;
//     if (slow === fast) { // found the cycle
//       cycle_length = calculate_cycle_length(slow);
//       break;
//     }
//   }
//   return find_start(head, cycle_length);
// }

// function calculate_cycle_length(slow) {
//   let current = slow,
//     cycle_length = 0;
//   while (true) {
//     current = current.next;
//     cycle_length += 1;
//     if (current === slow) {
//       break;
//     }
//   }
//   return cycle_length;
// }

// function find_start(head, cycle_length) {
//   let pointer1 = head,
//     pointer2 = head;
//   // move pointer2 ahead 'cycle_length' nodes
//   while (cycle_length > 0) {
//     pointer2 = pointer2.next;
//     cycle_length -= 1;
//   }
//   // increment both pointers until they meet at the start of the cycle
//   while (pointer1 !== pointer2) {
//     pointer1 = pointer1.next;
//     pointer2 = pointer2.next;
//   }

//   return pointer1;
// }

// -----

// Time Complexity #
// As we know, finding the cycle in a LinkedList with ‘N’ nodes and also finding the length of the cycle requires O(N). Also, as we saw in the above algorithm, we will need O(N) to find the start of the cycle. Therefore, the overall time complexity of our algorithm will be O(N).

// Space Complexity #
// The algorithm runs in constant space O(1).
