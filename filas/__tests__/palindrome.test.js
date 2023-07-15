import assert from 'node:assert';
import { beforeEach, describe, it } from 'node:test'
import { palindromeChecker } from '../palindrome.js';

describe('palindrome', () => {
  it('should return true', () => {
    assert.ok(palindromeChecker('arara'));
    assert.ok(palindromeChecker('Subi no onibus'));
    assert.ok(palindromeChecker('step on no pets'));
    assert.ok(palindromeChecker('kayak'));
  });
});
