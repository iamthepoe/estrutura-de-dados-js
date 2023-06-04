import assert from 'node:assert';
import { it } from 'node:test';
import { StackArray } from '../stackArray.js';
const stackArray = new StackArray();

it('should be defined', () => {
	assert.ok(stackArray);
});

it('should return true if is empty', () => {
	assert.equal(stackArray.isEmpty(), true);
});

it('should return the stack size', () => {
	assert.equal(stackArray.size(), 0);
});
