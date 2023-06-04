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
		if (this.isEmpty()) return undefined;
		const item = this.items[this.count];
		delete this.items[this.count];
		this.count--;
		return item;
	}

	peek() {
		if (this.isEmpty()) return undefined;
		return this.items[this.count - 1];
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
