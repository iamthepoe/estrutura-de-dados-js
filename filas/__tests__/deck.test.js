import assert from 'node:assert';
import { beforeEach, describe, it } from 'node:test';
import { Deck } from '../deck.js';

describe('Deck', () => {
	let deck;
	beforeEach(() => {
		deck = new Deck();
	});

	it('should be defined', () => {
		assert.ok(deck);
	});

	it('should remove the first element of deck and return it', () => {
		assert.equal(deck.removeFront(), undefined);
		deck.addBack(1);
		deck.addBack(2);
		deck.addBack(3);

		const removedElement = deck.removeFront();

		assert.equal(removedElement, 1);
		assert.equal(deck.peekFront(), 2);
		assert.equal(deck.peekBack(), 3);
		assert.equal(deck.size(), 2);
	});

	it('should return the last element of the deck without removing it', () => {
		assert.equal(deck.peekFront(), undefined);
		deck.addBack(1);
		deck.addBack(2);
		deck.addBack(3);
		assert.equal(deck.peekBack(), 3);
		assert.equal(deck.size(), 3);
	});

	it('should return the first element of the deck without removing it', () => {
		assert.equal(deck.peekFront(), undefined);
		deck.addBack(1);
		deck.addBack(2);
		deck.addBack(3);
		assert.equal(deck.peekFront(), 1);
		assert.equal(deck.size(), 3);
	});

	it('should return the size of deck', () => {
		assert.equal(deck.size(), 0);
		deck.addBack(1);
		deck.addBack(2);
		assert.equal(deck.size(), 2);
		deck.removeFront();
		assert.equal(deck.size(), 1);
	});

	it('should verify if deck is empty', () => {
		assert.equal(deck.isEmpty(), true);
		deck.addBack(1);
		assert.equal(deck.isEmpty(), false);
		deck.removeFront();
		assert.equal(deck.isEmpty(), true);
	});

	it('should stringify our deck', () => {
		assert.equal(deck.toString(), '');

		deck.addBack(1);
		deck.addBack(2);
		deck.addBack(3);

		const stringQueue = deck.toString();
		assert.equal(typeof stringQueue, 'string');
		assert.equal(stringQueue, '1,2,3');
	});

	it('should clear the deck', () => {
		deck.addBack(1);
		deck.addBack(2);

		deck.clear();

		assert.equal(deck.isEmpty(), true);
		assert.equal(deck.peekFront(), undefined);
	});
});
