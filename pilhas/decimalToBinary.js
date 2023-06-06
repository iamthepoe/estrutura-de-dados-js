import { StackObject } from './stackObject.js';
const remStack = new StackObject();

const decimalToBinary = (decimalNumber) => {
	let rem;
	let toStringBinary = '';
	while (decimalNumber > 0) {
		rem = Math.floor(decimalNumber % 2);
		remStack.push(rem);
		decimalNumber = Math.floor(decimalNumber / 2);
	}
	let size = remStack.size();
	for (let i = 0; i < size; i++) {
		toStringBinary += String(remStack.pop());
	}
	return toStringBinary;
};

console.log(decimalToBinary(10));
