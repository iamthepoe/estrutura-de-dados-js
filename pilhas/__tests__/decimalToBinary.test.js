import assert from 'node:assert';
import { describe, it } from 'node:test';
import { decimalToBinary } from '../decimalToBinary.js';

describe('decimalToBinary', () => {
	it('should return a string', () => {
		assert.equal(typeof decimalToBinary(10), 'string');
	});

	describe('conversions from two to ten', () => {
		it('should convert 2 to 10', () => {
			assert.equal(decimalToBinary(2), '10');
		});
	});
});
