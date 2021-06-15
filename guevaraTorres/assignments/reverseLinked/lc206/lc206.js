// Problem Statement #

// Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.


/*
Switching the values, starting from head so that instead of pointing to the next node, it points to null.
I would need to hold reference to the next node, so it can becomes the new head.
Re-assigning the .next.

previous = null

while head !== null   //head = 1
next = head.next;     //next = 2
head.next = previous; //head.next = null
previous = head;      //previous = 1
head = next;          //head = 2

return previous       //previous = 4
variables: previous, next

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
  // TODO: Write your code here

  // let previous = null;
  // let next = null;

  // while(head !== null){
  //   next = head.next;
  //   head.next = previous;
  //   previous = head;
  //   head = next;
  // }

  // return previous;

  let previous = null;
  let next = null;

  while(head !== null) {
    next = head.next;
    head.next = previous;
    previous = head;
    head = next;
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
