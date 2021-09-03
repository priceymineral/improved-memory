class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor () {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  pop () {
    // remove the tail
    // return the tail
    // reassign the tail to the new last node

    if (!this.size) return undefined;
    // initialize a last node var
    let currentNode = this.head; // {val:1, next:Node}
    if (this.size === 1) {
      this.size = 0;
      this.head = null;
      this.tail = null;

      return currentNode;
    }

    let nextNode = currentNode.next; // {val:3, next:null}

    // traverse the list
    while (currentNode) {
      // console.log('in while loop');
      // if the next is null
      // console.log(nextNode.next);
      if (!nextNode.next) {
        // console.log('in if')
      // change the next pointer on the second to last node to null
      currentNode.next = null;
      // reassign tail to this modified node
      this.tail = currentNode;
      // decrement list size by 1
      this.size--;
      // return the value of the node whose next is null (tail??)
      // console.log('list:', this);
      // console.log('pop:', nextNode.val);
      return nextNode;

      }

      currentNode = nextNode;
      nextNode = currentNode.next;

    }

  }

  push (val) {
    let node = new Node(val);

    // if there is no head
    if (!this.head) {
      // assign a node with value val as the head and tail
      this.head = node;
      this.tail = this.head;
    // if there is a head
    } else {
      // assign the new node to the next of the tail
      this.tail.next = node;
      // assign the new node as the tail
      this.tail = node;
    }
    // increment the size
    this.size++;
    // return the list
    return this;
  }
}

let myList = new LinkedList();
// console.log(myList);
myList.push(1);
myList.push(3);
myList.pop();
// console.log(myList);
// myList.push(5);
// console.log(myList);
// myList.push(7);
// myList.push(9);
// console.log(myList.push(9));
// console.log(myList.head.next);

