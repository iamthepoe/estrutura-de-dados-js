export class Deque {
	#count = 0;
	#lowestCount = 0;
	#items = {};

	addBack(element) {
		this.#items[this.#count] = element;
		this.#count++;
	}

	removeFront() {
		if (this.isEmpty()) return undefined;

		const element = this.#items[this.#lowestCount];
		delete this.#items[this.#lowestCount];
		this.#lowestCount++;
		return element;
	}

	peekFront() {
		if (this.isEmpty()) return undefined;
		return this.#items[this.#lowestCount];
	}

	peekBack() {
		if (this.isEmpty()) return undefined;
		return this.#items[this.#count - 1];
	}

	size() {
		return this.#count - this.#lowestCount;
	}

	isEmpty() {
		return this.size() === 0;
	}

	clear() {
		this.#count = 0;
		this.#lowestCount = 0;
		this.#items = {};
	}

	toString() {
		if (this.isEmpty()) return '';
		let objString = `${this.#items[this.#lowestCount]}`;
		for (let i = this.#lowestCount + 1; i < this.#count; i++) {
			objString = `${objString},${this.#items[i]}`;
		}
		return objString;
	}
}
