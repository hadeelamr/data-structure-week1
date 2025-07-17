function inorderTraversal(node, result = []) {
    if (node) {
        inorderTraversal(node.left, result);
        result.push(node.value);
        inorderTraversal(node.right, result);
    }
    return result;
}

function preorderTraversal(node, result = []) {
    if (node) {
        result.push(node.value);
        preorderTraversal(node.left, result);
        preorderTraversal(node.right, result);
    }
    return result;
}

function postorderTraversal(node, result = []) {
    if (node) {
        postorderTraversal(node.left, result);
        postorderTraversal(node.right, result);
        result.push(node.value);
    }
    return result;
}

module.exports = { inorderTraversal, preorderTraversal, postorderTraversal };
