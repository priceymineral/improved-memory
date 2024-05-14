class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node = new Node(val);

    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;

      while (true) {
        if (node.val > current.val) {
          if (!current.right) {
            current.right = node;
            break;
          }
          current = current.right;
        } else {
          if (!current.left) {
            current.left = node;
            break;
          }
          current = current.left;
        }
      }
    }

    return this;
  }

  find(val) {
    if (!this.root) return undefined;

    let current = this.root;

    while (current) {
      if (current.val === val) return "found";
      current.val > val ? (current = current.left) : (current = current.right);
    }

    return "not found";
  }

  dfsPreOrder() {
    let data = [];

    function traverse(node) {
      console.log("node:", node);
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}

let tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(8);
tree.insert(20);
tree.insert(3);
console.log(tree);
console.log(tree.dfsPreOrder());

//        10
//       /  \
//     6      15
//   /   \       \
//  3     8       20
