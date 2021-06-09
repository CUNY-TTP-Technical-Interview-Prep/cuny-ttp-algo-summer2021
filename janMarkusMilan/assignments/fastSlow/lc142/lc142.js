// Problem Statement #

// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

/*
Tortoise and Hare Algorithm
P1 where it moves 1 step
P2 where it moves 2 steps

P3 = Hare or Tortoise 
P4 = Head node
Loop until they reach the same node

Return one of the pointers at the end

Return head
*/

/*
// Brute Force Solution using Sets (Time: O(n), Space: O(n))
let currentNode = head;
const seenNodes = new Set(); // The .has() method is O(1)

// Loop until the current node has already been stored in the set
while (!seenNodes.has(currentNode)) {
  if (currentNode === null || currentNode.next === null ) {
    return null; // There is a tail, so no cycle
  }

  seenNodes.add(currentNode);
  currentNode = currentNode.next;
}

return currentNode;
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const find_cycle_start = function (head) {
  // TODO: Write your code here
  if (!head) {
    return head;
  }

  // Use Floyd's Tortoise & Hare Algorithm to check if we have a cycle
  let tortoise = head;
  let hare = head;

  // Keep looping until we find one of our two cases
  while (true) {
    tortoise = tortoise.next;
    hare = hare.next;

    if (hare === null || hare.next === null) {
      return null; // No cycle
    } else {
      hare = hare.next; // Increment hare by one more step (hare moves at 2)
    }

    // If they are pointing at the same list node
    if (tortoise === hare) {
      break;
    }
  }

  // Instantiate two pointers that will traverse the cycle to find the list node that starts the cycle
  // This is also a magical math property
  let ptr1 = head;
  let ptr2 = tortoise;

  while (ptr1 !== ptr2) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  return ptr1;
};

head = new Node(1);
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
