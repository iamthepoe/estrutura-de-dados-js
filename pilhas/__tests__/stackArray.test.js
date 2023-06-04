import assert from 'node:assert';
import { it } from 'node:test';
import { StackArray } from '../stackArray.js';
const stackArray = new StackArray();

it('should be defined', () => {
	assert.ok(new StackArray());
});
