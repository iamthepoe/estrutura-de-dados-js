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

		it('should convert 3 to 11', () => {
			assert.equal(decimalToBinary(3), '11');
		});

		it('should convert 4 to 100', () => {
			assert.equal(decimalToBinary(4), '100');
		});

		it('should convert 5 to 101', () => {
			assert.equal(decimalToBinary(5), '101');
		});

		it('should convert 6 to 110', () => {
			assert.equal(decimalToBinary(6), '110');
		});

		it('should convert 7 to 111', () => {
			assert.equal(decimalToBinary(7), '111');
		});

		it('should convert 8 to 1000', () => {
			assert.equal(decimalToBinary(8), '1000');
		});

		it('should convert 9 to 1001', () => {
			assert.equal(decimalToBinary(9), '1001');
		});
	});
});
