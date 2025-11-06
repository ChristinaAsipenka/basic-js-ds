const { NotImplementedError } = require('../lib/errors');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
    constructor() {
        this._items = [];
    }

    push(value) {
        this._items.push(value);
    }

    pop() {
        return this._items.pop();
    }

    peek() {
        if (this._items.length === 0) {
            return undefined;
        }
        const topIndex = this._items.length - 1;
        return this._items[topIndex];
    }
}

module.exports = {
  Stack,
};
