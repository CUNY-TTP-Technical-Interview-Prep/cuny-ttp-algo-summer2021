// Problem Statement #

// Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.

/*
input: head ptr to a linked-list.
output: head ptr, to the same linked-list reversed.

p: previous
h: head/current
n: head.next
 p      h    n
null <- 1 -> 2 -> 3 -> 4 -> 5->null


inital:
    current: head
    prv: null

while: nex.next ISNOT null

0:
    next: current.next
    current.next: prev
    prv: current
    curr: nextptr
    
head = next

return head

*/

class Node {
  constructor(value, next = null) {
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
}

const reverse = function (head) {
  if (head == null) return null;
  if (head.next === null) return head;

  // prv, current, next pointers
  let current = head,
    prev = null,
    next = head;

  while (current !== null) {
    next = current.next; // hold a ptr, to the next value, so we can always be able to move forward as long as we haven't reached null.
    current.next = prev; // to point current to the previous node, effectively flip the arrow.
    prev = current; // the old current is
    current = next; // the
  }

  // move head ptr to current. which was the previous last node.
  // this is new the start of the reversed linked-list.
  return prev;
};

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(`Nodes of reversed LinkedList are: ${reverse(head).get_list()}`);

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
