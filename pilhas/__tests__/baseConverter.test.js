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

	describe('conversions from decimal to various bases', () => {});
});
