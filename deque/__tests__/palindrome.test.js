import assert from 'node:assert';
import { describe, it } from 'node:test'
import { isPalindrome } from '../palindrome.js';

describe('palindrome', () => {
  it('should return true', () => {
    assert.ok(isPalindrome('arara'));
    assert.ok(isPalindrome('Subi no onibus'));
    assert.ok(isPalindrome('step on no pets'));
    assert.ok(isPalindrome('jooj'));
  });

  it('should return false', () => {
    assert.ok(!isPalindrome('ararssa'));
    assert.ok(!isPalindrome('TIBATIBATIBATIBATIBA'));
    assert.ok(!isPalindrome('jooji'));
    assert.ok(!isPalindrome('toma'));
  });

});
