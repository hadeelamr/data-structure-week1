const BinarySearchTree = require('./binarySearchTree');
const { inorderTraversal, preorderTraversal, postorderTraversal } = require('./traversal');

// Create the BST and insert values
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);

// Print traversals
console.log("Inorder Traversal: ", inorderTraversal(bst.root));     // [3, 5, 7, 10, 12, 15, 18]
console.log("Preorder Traversal: ", preorderTraversal(bst.root));   // [10, 5, 3, 7, 15, 12, 18]
console.log("Postorder Traversal: ", postorderTraversal(bst.root)); // [3, 7, 5, 12, 18, 15, 10]
