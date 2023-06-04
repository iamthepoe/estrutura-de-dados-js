export class stackObject {
	constructor() {
		this.count = 0;
		this.items = {};
	}

	push(element) {
		this.items[this.count] = element;
		this.count++;
	}

	isEmpty() {
		return this.count === 0;
	}
}
