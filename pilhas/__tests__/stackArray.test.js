import assert from 'node:assert';
import { describe, beforeEach, it } from 'node:test';
import { StackArray } from '../stackArray.js';

describe('stackArray', () => {
	let stack;
	beforeEach(() => {
		stack = new StackArray();
	});

	it('should add a new element to the stack', () => {
		stack.push(1);
		stack.push(2, 3);

		assert.equal(stack.size(), 3);
		assert.equal(stack.isEmpty(), false);
		assert.equal(stack.peek(), 3);
	});

	it('should remove an element from the top of stack and return it', () => {
		stack.push(1, 2, 3);

		const removedElement = stack.pop();

		assert.equal(removedElement, 3);
		assert.equal(stack.size(), 2);
		assert.equal(stack.isEmpty(), false);
		assert.equal(stack.peek(), 2);
	});

	it('should return the top element of the stack without removing it', () => {
		stack.push(1, 2, 3);

		const topElement = stack.peek();

		assert.equal(topElement, 3);
		assert.equal(stack.size(), 3);
	});

	it('should check if the stack is empty', () => {
		assert.equal(stack.isEmpty(), true);

		stack.push(1);

		assert.equal(stack.isEmpty(), false);

		stack.pop();

		assert.equal(stack.isEmpty(), true);
	});

	it('should return the size of the stack', () => {
		stack.push(1, 2);

		assert.equal(stack.size(), 2);

		stack.pop();

		assert.equal(stack.size(), 1);

		stack.clear();

		assert.equal(stack.size(), 0);
	});

	it('should clear the stack', () => {
		stack.push(1, 2, 3);

		stack.clear();

		assert.equal(stack.isEmpty(), true);
		assert.equal(stack.size(), 0);
	});
});
