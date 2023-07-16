import { Deque } from "./deque.js";

export const isPalindrome = (aString) => {
  if (!aString) return false;

  const deque = new Deque();

  const lowerString = aString.toLowerCase().replaceAll(' ', '');
  let isEqual = true;
  let firstChar, lastChar;
  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }
  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) isEqual = false;
  }
  return isEqual;
}
