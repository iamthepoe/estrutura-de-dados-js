import assert from 'node:assert';
import { describe, it } from 'node:test';
import { baseConverter } from '../baseConverter.js';

describe('baseConverter', () => {
	it('should be defined', () => {
		assert.ok(baseConverter);
	});

	it('should return a string', () => {
		assert.equal(typeof baseConverter(10, 2), 'string');
	});

	describe('conversions from decimal to various bases', () => {
		it('should convert decimal 10 to binary', () => {
			assert.equal(baseConverter(10, 2), '1010');
		});

		it('should convert decimal 10 to octal', () => {
			assert.equal(baseConverter(10, 8), '12');
		});

		it('should convert decimal 10 to hexadecimal', () => {
			assert.equal(baseConverter(10, 16), 'A');
		});

		it('should convert decimal 255 to binary', () => {
			assert.equal(baseConverter(255, 2), '11111111');
		});

		it('should convert decimal 255 to octal', () => {
			assert.equal(baseConverter(255, 8), '377');
		});

		it('should convert decimal 255 to hexadecimal', () => {
			assert.equal(baseConverter(255, 16), 'FF');
		});

		it('should convert decimal 1000 to binary', () => {
			assert.equal(baseConverter(1000, 2), '1111101000');
		});
	});
});
