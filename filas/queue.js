export class Queue {
	#count = 0;
	#lowestCount = 0;
	#items = {};

	enqueue(element) {
		this.#items[this.#count] = element;
		this.#count++;
	}

	dequeue() {
		if (this.isEmpty()) return undefined;

		const element = this.#items[this.#lowestCount];
		delete this.#items[this.#lowestCount];
		this.#lowestCount++;
		return element;
	}

	peek() {
		if (this.isEmpty()) return undefined;
		return this.#items[this.#lowestCount];
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
}
