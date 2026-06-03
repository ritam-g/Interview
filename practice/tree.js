class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.head = null;
  }

  addNode(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  displayNode(node = this.head) {
    if (!node) return;

    this.displayNode(node.left)
    console.log(node.val);
    this.displayNode(node.right)
  }
}

const tree = new BinaryTree();

tree.addNode(10);
tree.addNode(5);
tree.addNode(15);
tree.addNode(3);
tree.addNode(7);
tree.addNode(12);
tree.addNode(18);
tree.addNode(20);

tree.displayNode();