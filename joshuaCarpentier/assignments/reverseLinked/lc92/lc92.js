// Problem Statement #

// Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.
/**
 * 
 * Input: head of a Singly LinkedList, position left, position right 
 * Output: 
 * 
 * Variables: head, next pointer, Node value, null, current position, next position, last position

 * 
 * Brute force Approach
 * --------------- 
 * Pre-Condition: 
 * 
 * Conditions: 
 * 
 * Termination-Conditions: 

 * 
 * Post-Conditions: 
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

const reverse_sub_list = function(head, p, q) {
  if (p === q) {
    return head;
  }

  // after skipping 'p-1' nodes, current will point to 'p'th node
  let current = head;
//   console.log(` the head ${current.value}`);
  let previous = null;

  let i = 0;
  while (current !== null && i < p - 1) {
    previous = current;
    // console.log(` the previous with current value ${previous.value}`);

    current = current.next;
    // console.log(` the previous with current value ${current.value}`);

    i += 1;
  }

  // we are interested in three parts of the LinkedList, the part before index 'p',
  // the part between 'p' and 'q', and the part after index 'q'
  const last_node_of_first_part = previous;
//   console.log(` the last_node_of_first_part with previous value ${last_node_of_first_part.value}`);

  // after reversing the LinkedList 'current' will become the last node of the sub-list
  const last_node_of_sub_list = current;
//   console.log(` the last_node_of_sub_list with current value ${last_node_of_sub_list.value}`);

  let next = null; // will be used to temporarily store the next node

  i = 0;
  // reverse nodes between 'p' and 'q'
  while (current !== null && i < q - p + 1) {
    next = current.next;
    // console.log(` the next with current next value ${next.value}`);
    current.next = previous;
    // console.log(` the current.next with previous value ${ current.next.value}`);

    previous = current;
    // console.log(` the previous with current value ${ previous.value}`);

    current = next;
    // console.log(` the current with next value ${ current.value}`);

    i += 1;
  }
  console.log(head)

  // connect with the first part
  if (last_node_of_first_part !== null) {
    // 'previous' is now the first node of the sub-list
    last_node_of_first_part.next = previous;

    // console.log(` last_node_of_first_part.next with previous value ${ last_node_of_first_part.next.value}`);

    // this means p === 1 i.e., we are changing the first node (head) of the LinkedList
  } else {
    head = previous;
    // console.log(` head with previous value ${ head.value}`);

  }

  // connect with the last part
  last_node_of_sub_list.next = current;
//   console.log(` last_node_of_sub_list.next with current value ${ last_node_of_sub_list.next.value}`);

  return head;
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 4).get_list()}`)

// Solution
// -----
// function reverse_sub_list(head, p, q) {
//   if (p === q) {
//     return head;
//   }

//   // after skipping 'p-1' nodes, current will point to 'p'th node
//   let current = head,
//     previous = null;
//   let i = 0;
//   while (current !== null && i < p - 1) {
//     previous = current;
//     current = current.next;
//     i += 1;
//   }

//   // we are interested in three parts of the LinkedList, the part before index 'p',
//   // the part between 'p' and 'q', and the part after index 'q'
//   const last_node_of_first_part = previous;
//   // after reversing the LinkedList 'current' will become the last node of the sub-list
//   const last_node_of_sub_list = current;
//   let next = null; // will be used to temporarily store the next node

//   i = 0;
//   // reverse nodes between 'p' and 'q'
//   while (current !== null && i < q - p + 1) {
//     next = current.next;
//     current.next = previous;
//     previous = current;
//     current = next;
//     i += 1;
//   }

//   // connect with the first part
//   if (last_node_of_first_part !== null) {
//     // 'previous' is now the first node of the sub-list
//     last_node_of_first_part.next = previous;
//     // this means p === 1 i.e., we are changing the first node (head) of the LinkedList
//   } else {
//     head = previous;
//   }

//   // connect with the last part
//   last_node_of_sub_list.next = current;
//   return head;
// }

// -----

// Time complexity #
// The time complexity of our algorithm will be O(N) where ‘N’ is the total number of nodes in the LinkedList.

// Space complexity #
// We only used constant space, therefore, the space complexity of our algorithm is O(1).
