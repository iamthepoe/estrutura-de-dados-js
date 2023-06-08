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
});
