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
});
