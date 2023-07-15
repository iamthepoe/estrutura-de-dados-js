import assert from 'node:assert';
import { beforeEach, describe, it } from 'node:test';
import { hotPotato } from '../hotPotato.js';

describe('hotPotato', () => {
  it('should John be the winner', () => {
    const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
    const result = hotPotato(names, 7);
    assert.equal(result.winner, 'John');
  });

  it('should Maria be the winner', () => {
    const names = ['Maria', 'Mary', 'Mariana'];
    const result = hotPotato(names, 5);
    assert.equal(result.winner, 'Maria');
  })
});
