import assert from 'node:assert';
import { describe, it } from 'node:test';
import { decimalToBinary } from '../decimalToBinary.js';

describe('decimalToBinary', () => {
	it('should return a string', () => {
		assert.equal(typeof decimalToBinary(10), 'string');
	});

	it('should convert 10 to 1010', () => {
		assert.equal(decimalToBinary(10), '1010');
	});
});
