export class Deque {
	#count = 0;
	#lowestCount = 0;
	#items = {};

	addBack(element) {
		this.#items[this.#count] = element;
		this.#count++;
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
