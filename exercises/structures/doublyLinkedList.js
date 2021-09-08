class Node {
  constructor(val) {
    this.val = val,
    this.next = null,
    this.prev = null
  }
}

class DLL {
  constructor () {
    this.head = null,
    this.tail = null,
    this.size = 0
  }

  push (val) {
    // push() adds to the end of the list (ie, is the new tail)
    // input: integer (val)
    // output: our list
    // edge cases: if list is empty, new node will have to become head and tail
    //
    // constraints: none stated
    // high level: create a new node with the input value and connect it as the new tail and return the new list

    // create new node with val
    let node = new Node(val);
    // console.log(node);

    // if list is empty
    if (!this.size) {
      // assign new node to the head
      this.head = node;
      // assgn new node to the tail
      this.tail = node;
    // else
    } else {
      // connect to tail
        // make tail.next equal to new node
      this.tail.next = node;
        // make new node.prev equal to the old tail
      node.prev = this.tail;
      // reassign tail to be the new node
      this.tail = node;
    }

    // increment size
    this.size++;

    // return list
    return this;
  }

  pop () {
    // no input
    // output is the popped node
    // edge cases : list is empty
    //
    // constraints : none stated
    // high level : remove the tail and reassign it to it's previous. return popped node.

    if (!this.size) return undefined;
    // save the tail to a variable
    let oldTail = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // reassign the tail to the tails prev
      this.tail = oldTail.prev;
      // sever both connection
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.size--;

    // console.log(this);
    return oldTail;
  }

}

let myList = new DLL();
console.log(myList);
myList.push(5);