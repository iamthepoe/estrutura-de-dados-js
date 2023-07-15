import assert from 'node:assert';
import { beforeEach, describe, it } from 'node:test';
import { hotPotato } from '../hotPotato.js';

describe('hotPotato', () => {
  it('should John be the winner', () => {
    const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
    const result = hotPotato(names, 7);
    assert.equal(result.winner, 'John');
  });
});
