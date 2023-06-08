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

	it('should add elements in the queue', () => {
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);

		assert.ok(queue.size(), 3);
		assert.ok(queue.peek(), 1);
	});
});
