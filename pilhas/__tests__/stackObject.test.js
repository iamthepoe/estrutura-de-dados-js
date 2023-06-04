import { beforeEach, describe, it } from 'node:test';
import { StackObject } from '../stackObject.js';
import assert from 'node:assert';

describe('stackObject', () => {
	let stack;
	beforeEach(() => {
		stack = new StackObject();
	});

	it('should add a new element to the stack', () => {
		stack.push(1);
		stack.push(2);
		stack.push(3);

		assert.equal(stack.peek(), 3);
		assert.equal(stack.isEmpty(), false);
		assert.equal(stack.size(), 3);
	});

	it('should remove an element from the top of the stack and return it', () => {
		assert.equal(stack.pop(), undefined);

		stack.push(1);
		stack.push(2);
		stack.push(3);

		const removedElement = stack.pop();

		assert.equal(removedElement, 3);
		assert.equal(stack.peek(), 2);
		assert.equal(stack.size(), 2);
	});

	it('should return the top element of the stack without removing it', () => {
		assert.equal(stack.peek(), undefined);

		stack.push(1);
		stack.push(2);
		stack.push(3);

		assert.equal(stack.peek(), 3);
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
		stack.push(1);
		stack.push(2);

		assert.equal(stack.size(), 2);

		stack.pop();

		assert.equal(stack.size(), 1);

		stack.clear();

		assert.equal(stack.size(), 0);
	});

	it('should clear the stack', () => {
		stack.push(1);
		stack.push(2);
		stack.push(3);

		stack.clear();

		assert.equal(stack.isEmpty(), true);
		assert.equal(stack.size(), 0);
	});
});
