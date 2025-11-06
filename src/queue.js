const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
    constructor() {
        this._head = null;
        this._tail = null;
    }

    getUnderlyingList() {
        return this._head;
    }

    /**
     * Adds the element to the queue (end of the list).
     * @param {any} value
     */
    enqueue(value) {
        const newNode = new ListNode(value);

        if (!this._head) {
            this._head = newNode;
            this._tail = newNode;
        } else {
            this._tail.next = newNode;
            this._tail = newNode;
        }
    }

    /**
     * Removes and returns the element from the queue (front of the list).
     * @returns {any} The value of the element removed, or undefined if empty.
     */
    dequeue() {
        if (!this._head) {
            return undefined;
        }

        const value = this._head.value;
        const oldHead = this._head;

        this._head = oldHead.next;

        if (!this._head) {
            this._tail = null;
        }

        oldHead.next = null;

        return value;
    }
}

module.exports = {
  Queue
};
