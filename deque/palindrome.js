import { Deck } from "./deck.js";

export const isPalindrome = (aString) => {
  if (!aString) return false;

  const deck = new Deck();

  const lowerString = aString.toLowerCase().replaceAll(' ', '');
  let isEqual = true;
  let firstChar, lastChar;
  for (let i = 0; i < lowerString.length; i++) {
    deck.addBack(lowerString.charAt(i));
  }
  while (deck.size() > 1 && isEqual) {
    firstChar = deck.removeFront();
    lastChar = deck.removeBack();
    if (firstChar !== lastChar) isEqual = false;
  }
  return isEqual;
}
