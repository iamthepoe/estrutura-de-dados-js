import assert from 'node:assert';
import { beforeEach, describe, it } from 'node:test';
import { Deque } from '../deque.js';

describe('Deque', () => {
	let deque;
	beforeEach(() => {
		deque = new Deque();
	});

	it('should be defined', () => {
		assert.ok(deque);
	});

	it('should add elements in the front of deque', () => {
		deque.addFront(1);
		deque.addBack(2);
		deque.addFront(3);

		assert.equal(deque.size(), 3);
		assert.equal(deque.peekFront(), 3);

		deque.clear();

		deque.addFront(1);
		assert.equal(deque.size(), 1);
		assert.equal(deque.peekFront(), 1);
	});

	it('should add elements in the back of deque', () => {
		deque.addBack(1);
		deque.addBack(2);
		deque.addBack(3);

		assert.equal(deque.size(), 3);
		assert.equal(deque.peekBack(), 3);
	});

	it('should remove the last element of deque and return it', () => {
		assert.equal(deque.removeBack(), undefined);
		deque.addBack(1);
		deque.addBack(2);
		deque.addBack(3);

		const removedElement = deque.removeBack();

		assert.equal(removedElement, 3);
		assert.equal(deque.peekFront(), 1);
		assert.equal(deque.peekBack(), 2);
		assert.equal(deque.size(), 2);
	});

	it('should remove the first element of deque and return it', () => {
		assert.equal(deque.removeFront(), undefined);
		deque.addBack(1);
		deque.addBack(2);
		deque.addBack(3);

		const removedElement = deque.removeFront();

		assert.equal(removedElement, 1);
		assert.equal(deque.peekFront(), 2);
		assert.equal(deque.peekBack(), 3);
		assert.equal(deque.size(), 2);
	});

	it('should return the last element of the deque without removing it', () => {
		assert.equal(deque.peekFront(), undefined);
		deque.addBack(1);
		deque.addBack(2);
		deque.addBack(3);
		assert.equal(deque.peekBack(), 3);
		assert.equal(deque.size(), 3);
	});

	it('should return the first element of the deque without removing it', () => {
		assert.equal(deque.peekFront(), undefined);
		deque.addBack(1);
		deque.addBack(2);
		deque.addBack(3);
		assert.equal(deque.peekFront(), 1);
		assert.equal(deque.size(), 3);
	});

	it('should return the size of deque', () => {
		assert.equal(deque.size(), 0);
		deque.addBack(1);
		deque.addBack(2);
		assert.equal(deque.size(), 2);
		deque.removeFront();
		assert.equal(deque.size(), 1);
	});

	it('should verify if deque is empty', () => {
		assert.equal(deque.isEmpty(), true);
		deque.addBack(1);
		assert.equal(deque.isEmpty(), false);
		deque.removeFront();
		assert.equal(deque.isEmpty(), true);
	});

	it('should stringify our deque', () => {
		assert.equal(deque.toString(), '');

		deque.addBack(1);
		deque.addBack(2);
		deque.addBack(3);

		const stringQueue = deque.toString();
		assert.equal(typeof stringQueue, 'string');
		assert.equal(stringQueue, '1,2,3');
	});

	it('should clear the deque', () => {
		deque.addBack(1);
		deque.addBack(2);

		deque.clear();

		assert.equal(deque.isEmpty(), true);
		assert.equal(deque.peekFront(), undefined);
	});
});
