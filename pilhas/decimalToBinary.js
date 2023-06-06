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

	while (!remStack.isEmpty()) {
		toStringBinary += remStack.pop().toString();
	}
	return toStringBinary;
};

export { decimalToBinary };
