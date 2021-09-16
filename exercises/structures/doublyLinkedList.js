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

  shift () {
    // remove node form the beginning
    // input - none
    // output - node removed
    // edge cases - empty myList
    //            - 1 item long list, reassign head and tail
    // constraints - none stated
    // hl - disconnect head, reassign head, return old head

    // if list is empty, return undefined
    if (!this.size) return undefined;

    // if list is 1 node long,
    if (this.size === 1) {
      // save the disconnected head
      var shifted = this.head;
      // reassign head
      this.head = null;
      this.tail = null;

    } else {
    // if list is 2+ nodes long,
    // reassign head to current head's next
    this.head = this.head.next;
    // save the disconnected head from the new head's previous
    var shifted = this.head.prev;
    // disconnect old head
    shifted.next = null;
    // disconnect prev from new head
    this.head.prev = null;
    }

    // decrement size
    this.size--;
    // return disconnected head
    return shifted;

  }

    // add a node to the front of the list, i.e., add a new head
    unshift(val) {
      // input - integer (value)
      // output - the list, the size
      // edge cases - list is empty (assign new node to head and tail)
      //            -
      // constraints - not sure
      // high level - create a new  node and add it to the front of the head, assign it as head, increment size of list

      // create a new node with val
      let node = new Node(val);

      // if list is empty
      if (!this.size) {
        // assign new node as head
        this.head = node;
        // assign new node as tail
        this.tail = node;
      // otherwise
      } else {
      // make new node's next = head
      node.next = this.head;
      // make head's previous the new node
      this.head.prev = node;
      // make head equal to new node
      this.head = node;
      }



      // increment size
      this.size++;
      // return list
      return this.head;
    }

    get(idx) {
      // retrieve the node at that index
      // input - integer (idx)
      // output - node
      // edge - index is > size, return undefined, or -1
      // high level - figure out whether idx is closer to the head or the tail, starting from there, //              loop to get the node at idx

      if (idx >= this.size) return undefined;

      let midpoint = this.size/2;

      let looper = (start, end, dir) => {
        let iter = 0;
        while (iter < end) {
          if (dir === 'next') start = start.next;
          if (dir === 'prev') start = start.prev;
          iter++;
        }
        return start;
      }

      if (idx <= midpoint) {
        return looper(this.head, idx, 'next');
      } else {
        let howmany = this.size - idx - 1;
        return looper(this.tail, howmany, 'prev');
      }

    }

}

let myList = new DLL();
console.log(myList);
myList.push(5);