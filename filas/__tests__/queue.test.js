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

		assert.equal(queue.size(), 3);
		assert.equal(queue.peek(), 1);
	});

	it('should return the size of queue', () => {
		assert.equal(queue.size(), 0);
		queue.enqueue(1);
		queue.enqueue(2);
		assert.equal(queue.size(), 2);
		queue.dequeue();
		assert.equal(queue.size(), 1);
	});

	it('should verify if queue is empty', () => {
		assert.equal(queue.isEmpty(), true);
		queue.enqueue(1);
		assert.equal(queue.isEmpty(), false);
		queue.dequeue();
		assert.equal(queue.isEmpty(), true);
	});

	it('should clear the queue', () => {
		queue.enqueue(1);
		queue.enqueue(2);

		queue.clear();

		assert.equal(queue.isEmpty(), true);
		assert.equal(queue.peek(), undefined);
	});
});
