import assert from 'node:assert';
import { describe, it } from 'node:test';
import { baseConverter } from '../baseConverter.js';

describe('baseConverter', () => {
	it('should be defined', () => {
		assert.ok(baseConverter);
	});
});
