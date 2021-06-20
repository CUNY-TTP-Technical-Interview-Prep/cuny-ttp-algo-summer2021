// Problem Statement #

// Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.

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
  let prev = null;
  /**
   * [2] -> [4] -> [6] -> [8] -> [10] -> null
   *                                    p
   *  c
   *         n
   *  p
   *         c
   *                n
   *
   */
  let current = head;
  while (current != null) {
    /**
     * while current node isnt null
     * we set next to the current next
     * and we set the current next to prev
     * current's next is pointed to the node previously
     *
     * current is set to next until we hit null
     *
     * We then return previous
     */
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return previous;
  // TODO: Write your code here
  return head;
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
