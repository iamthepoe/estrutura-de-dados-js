export class stackObject {
	constructor() {
		this.count = 0;
		this.items = {};
	}

	push(element) {
		this.items[this.count] = element;
		this.count++;
	}

	pop() {
		const item = this.items[this.count];
		return item;
	}

	isEmpty() {
		return this.count === 0;
	}

	size() {
		return this.count;
	}

	clear() {
		this.items = {};
		this.count = 0;
	}
}