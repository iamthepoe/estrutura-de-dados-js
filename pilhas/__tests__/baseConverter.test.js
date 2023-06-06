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
	});
});
