const BinaryTreeNode = require('./binaryTree');

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new BinaryTreeNode(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }
}

module.exports = BinarySearchTree;
