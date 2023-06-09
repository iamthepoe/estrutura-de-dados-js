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

	it('should clear the deck', () => {
		deck.addBack(1);
		deck.addBack(2);

		deck.clear();

		assert.equal(deck.isEmpty(), true);
		assert.equal(deck.peekFront(), undefined);
	});
});
