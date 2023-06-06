import { StackObject } from './stackObject.js';

const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const stack = new StackObject();

const baseConverter = (decimalNumber, base) => {
	let rem;
	let baseString = '';
	if (!(base >= 2 && base <= 36)) return '';

	while (decimalNumber > 0) {
		rem = Math.floor(decimalNumber % base);
		stack.push(rem);
		decimalNumber = Math.floor(decimalNumber / base);
	}

	while (!stack.isEmpty()) {
		baseString += digits[stack.pop()];
	}

	return baseString;
};

export { baseConverter };
