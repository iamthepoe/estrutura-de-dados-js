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

	it('should clear the deck', () => {
		deck.addBack(1);
		deck.addBack(2);

		deck.clear();

		assert.equal(deck.isEmpty(), true);
		assert.equal(deck.peekFront(), undefined);
	});
});
