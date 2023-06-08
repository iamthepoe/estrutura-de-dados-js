import assert from 'node:assert';
import { beforeEach, describe, it } from 'node:test';
import { Queue } from '../queue.js';

describe('Queue', () => {
	let queue;
	beforeEach(() => {
		queue = new Queue();
	});

	it('should be defined', () => {
		assert.ok(queue);
	});
});
