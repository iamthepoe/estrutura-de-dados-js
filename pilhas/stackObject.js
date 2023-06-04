export class StackObject {
	#count = 0;
	#items = {};

	push(element) {
		this.#items[this.#count] = element;
		this.#count++;
	}

	pop() {
		if (this.isEmpty()) return undefined;
		const item = this.#items[this.#count - 1];
		delete this.#items[this.#count - 1];
		this.#count--;
		return item;
	}

	peek() {
		if (this.isEmpty()) return undefined;
		return this.#items[this.#count - 1];
	}

	isEmpty() {
		return this.#count === 0;
	}

	size() {
		return this.#count;
	}

	clear() {
		this.#items = {};
		this.#count = 0;
	}

	toString() {
		if (this.isEmpty()) return '';
		let stringObj = `${this.#items[0]}`;
		for (let i = 1; i < this.#count; i++) {
			stringObj = `${stringObj}, ${this.#items[i]}`;
		}
		return stringObj;
	}
}
