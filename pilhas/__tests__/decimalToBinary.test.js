import assert from 'node:assert';
import { describe, it } from 'node:test';
import { decimalToBinary } from '../decimalToBinary.js';

describe('decimalToBinary', () => {
	it('should return a string', () => {
		assert.equal(typeof decimalToBinary(10), 'string');
	});
});
