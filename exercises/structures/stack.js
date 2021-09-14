// LIFO life
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    // push to the front of the stack
    // input - value (any data type)
    // output - size?
    // edge cases - stack is empty (reassign last as well as first)
    // constraints - none stated
    // high level - add newly created node to the front and adjust size and first (last)

    // create new node with input value
    let node = new Node(val);

    // if stack is empty
    if (!this.size) {
      // assign new node to first
      this.first = node;
      // assign new node to last
      this.last = node;
    // else
    } else {
      // connnect new node to first
      node.next = this.first;
      // reassign first
      this.first = node;
    }


    // increment size
    // return size
    return ++this.size;
  }

  pop() {
    // pop from the front of the stack
  }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);