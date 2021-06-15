// Problem Statement #

// Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.


  // 1 -> 2 -> 3 -> 4 -> 5
  //           p         q
  // 1 -> 2 -> 5 -> 4 -> 3


/*
Start a loop to reach position p. Once position p is reach, we need to keep track of the previous node in order to connect the sub list after it is reversed.
As well as the current node, since it will be reversed into the last node in the sub list, allowing for a connection if position q is not the last node. 
Switching the values, starting from head so that instead of pointing to the next node, it points to null.
I would need to hold reference to the next node, so it can becomes the new head.
Re-assigning the .next.

variables: previous, current, next, i 

edge case: if p = return head
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
};

const reverse_sub_list = function (head, p, q) {
  // TODO: Write your code here

  let previous = null;
  let current = head;
  let i = 0;

  if(p === q) return head;

  for(; i < p - 1; i++) {
    previous = current;
    current = current.next;
  }

  const node_before_sub_list = previous;
  const last_node_of_sub_list = current;
  let next = null;

  i = 0;
  while(head && i < q - p + 1) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    i++;
  }

  if(node_before_sub_list !== null){
    node_before_sub_list.next = previous;
  }else{head = previous;}

  last_node_of_sub_list.next = current;
  return head;
  // let previous = null;
  // let current = head;
  // let i = 0;
  
  // if(p === q) return head;

  // for (; i < p - 1; i++) {
  //   previous = current;
  //   current = current.next;
  // }

  // const node_before_sub_list = previous; 
  // const last_node_of_sub_list = current;    
  // let next = null;

  // i = 0;
  // while (head && i < q - p + 1) {
  //   next = current.next;
  //   current.next = previous;
  //   previous = current;
  //   current = next;
  //   i++;
  // }

  // if(last_node_of_first_part !== null) {
  //   last_node_of_first_part.next = previous;
  // }else{
  //   head = previous;
  // }

  // last_node_of_sub_list.next = current; 
  // return head;
}


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
