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

	it('should remove elements from the top of stack', () => {
		stack.push(1, 2, 3);

		stack.pop();

		assert.equal(stack.size(), 2);
		assert.equal(stack.isEmpty(), false);
		assert.equal(stack.peek(), 2);
	});
});
