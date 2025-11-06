const { NotImplementedError } = require('../lib/errors');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
    constructor() {
        this._root = null;
    }

    root() {
        return this._root;
    }

    add(data) {
        this._root = addNode(this._root, data);

        function addNode(node, data) {
            if (!node) {
                return new Node(data);
            }
            if (node.data === data) {
                return node;
            }
            if (data < node.data) {
                node.left = addNode(node.left, data);
            } else {
                node.right = addNode(node.right, data);
            }
            return node;
        }
    }

    has(data) {
        return !!this.find(data);
    }

    find(data) {
        return findNode(this._root, data);

        function findNode(node, data) {
            if (!node) {
                return null;
            }
            if (node.data === data) {
                return node;
            }
            if (data < node.data) {
                return findNode(node.left, data);
            } else {
                return findNode(node.right, data);
            }
        }
    }

    remove(data) {
        this._root = removeNode(this._root, data);

        function removeNode(node, data) {
            if (!node) {
                return null;
            }

            if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else if (data > node.data) {
                node.right = removeNode(node.right, data);
                return node;
            } else {
                if (!node.left && !node.right) {
                    return null;
                }
                if (!node.left) {
                    return node.right;
                }
                if (!node.right) {
                    return node.left;
                }

                let minFromRight = node.right;
                while (minFromRight.left) {
                    minFromRight = minFromRight.left;
                }
                node.data = minFromRight.data;
                node.right = removeNode(node.right, minFromRight.data);

                return node;
            }
        }
    }

    min() {
        if (!this._root) {
            return null;
        }

        let currentNode = this._root;
        while (currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode.data;
    }

    max() {
        if (!this._root) {
            return null;
        }

        let currentNode = this._root;
        while (currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode.data;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

module.exports = {
  BinarySearchTree
};